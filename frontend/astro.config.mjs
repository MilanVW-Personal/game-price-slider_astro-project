// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/itc3_astro',
  site: 'https://milan-vanwinkel-statweb.be/itc3_astro'
});