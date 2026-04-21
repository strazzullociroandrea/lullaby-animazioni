import type { CollectionConfig } from 'payload'
import { HeroConfig } from '@/blocks/Hero/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },

  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Icona Tab Browser (Favicon)',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Meta Data & Header',
          description: 'Configura il titolo della pagina, lo slug e i meta tag SEO.',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Page Title (H1)',
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
              admin: {
                description: "L'URL della pagina (es: la-mia-pagina)",
              },
            },
            {
              name: 'meta',
              type: 'group',
              label: 'SEO Meta Tags',
              fields: [
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Meta Description',
                },
                {
                  name: 'keywords',
                  type: 'text',
                  label: 'Keywords (separate da virgola)',
                },
                {
                  name: 'extraTags',
                  type: 'array',
                  label: 'Custom Meta Tags',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      admin: {
                        placeholder: 'og:image, twitter:card, etc.',
                      },
                    },
                    {
                      name: 'content',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Content Layout',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [HeroConfig],
            },
          ],
        },
      ],
    },
  ],
}
