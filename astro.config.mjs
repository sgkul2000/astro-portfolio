import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://shreeshkulkarni.dev',
  integrations: [
    tailwind({
      // We manage our own CSS file with @tailwind directives
      applyBaseStyles: false,
    }),
  ],
});
