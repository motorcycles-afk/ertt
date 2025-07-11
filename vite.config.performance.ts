import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Performance-optimized Vite configuration
export default defineConfig({
  plugins: [
    react({
      // Use the new JSX runtime for smaller bundle size
      jsxRuntime: 'automatic',
      // Disable React Fast Refresh in production
      fastRefresh: process.env.NODE_ENV !== 'production'
    })
  ],
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
      }
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react']
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate source maps only for errors
    sourcemap: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  },
  // Performance optimizations
  server: {
    hmr: {
      overlay: false // Disable error overlay for better performance
    }
  },
  // CSS optimizations
  css: {
    devSourcemap: false,
    modules: {
      localsConvention: 'camelCase'
    }
  }
})