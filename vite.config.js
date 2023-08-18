import { defineConfig } from 'vite';
import velstack from 'velstack';

export default defineConfig({
    plugins: [
        velstack({
            refresh: true,
        }),
    ],
});
