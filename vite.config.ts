import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/api/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@layouts': path.resolve(__dirname, './src/layouts/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@icons': path.resolve(__dirname, './src/icons/'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@router': path.resolve(__dirname, './src/router/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@types': path.resolve(__dirname, './src/types/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@dto': path.resolve(__dirname, './src/dto/'),
      '@hoc': path.resolve(__dirname, './src/hoc/'),
      '@mock': path.resolve(__dirname, './src/mock/'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
