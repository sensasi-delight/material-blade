import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'src/assets/src/main.ts',
            },
            output: {
                dir: 'src/assets/dist',
                entryFileNames: '[name].js',
                assetFileNames: '[name][extname]',
                chunkFileNames: 'vendor.js',
            },
        },
    },
})
