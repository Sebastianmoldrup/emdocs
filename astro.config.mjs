import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Hjem',
      // social: {
      //   github: 'https://github.com/withastro/starlight'
      // },
      sidebar: [
        {
          label: 'Shortcodes',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Lånekalkulator',
              link: '/shortcodes/lanekalkulator/',
            },
            {
              label: 'Accordion',
              link: '/shortcodes/accordion/',
            },
          ],
        },
      ],
    }),
    tailwind(),
    react(),
  ],
});
