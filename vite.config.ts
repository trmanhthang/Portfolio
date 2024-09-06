import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Sử dụng ~ để trỏ đến thư mục src
      '~': path.resolve(__dirname, 'src'),
    },
  },
})
