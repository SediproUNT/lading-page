import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [
        react(), tailwind()
    ],
    image: {
        // Configuración opcional de imágenes
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    }
});