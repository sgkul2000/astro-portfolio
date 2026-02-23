import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // We manage our own CSS file with @tailwind directives
      applyBaseStyles: false,
    }),
  ],
});
