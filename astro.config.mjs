import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: "https://sediprount.github.io/",
    base: "lading-page"


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