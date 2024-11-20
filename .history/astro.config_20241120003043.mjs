import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [
        tailwind()
    ],
    image: {
        // Configuración opcional de imágenes
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    }
});

