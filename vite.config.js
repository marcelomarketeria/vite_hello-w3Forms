import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    optimizeDeps: {
        esbuildOptions: {
            // This can help if the binary is still not found or accessible
            // but we'll try the pnpm fixes first.
        }
    }
})
