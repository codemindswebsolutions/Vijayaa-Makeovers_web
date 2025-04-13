import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Vijayaa-Makeovers_web/', // 👈 Important for GitHub Pages
  resolve: {
    alias: {
      'react-refresh/babel': path.resolve('./node_modules/react-refresh/babel.js'),
    },
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'makeover-web-2.onrender.com',
      'localhost',
    ],
    // port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
  },
});
