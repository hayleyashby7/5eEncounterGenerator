import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import browserslistToEsbuild from 'browserslist-to-esbuild';

export default defineConfig({
    plugins: [react()],
    build: {
        target: browserslistToEsbuild(),
    },
});
