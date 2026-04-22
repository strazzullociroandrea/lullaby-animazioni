import type { GlobalConfig } from 'payload'

export const NavbarConfig: GlobalConfig = {
  slug: 'Navbar',
  label: 'Navbar',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Brand & Logo',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Logo della Navbar',
            },
            {
              name: 'logoText',
              type: 'text',
              required: true,
              label: 'Testo sotto il logo',
              admin: {
                placeholder: 'Es: Animazione per bambini',
              },
            },
          ],
        },
        {
          label: 'Menu Pagine',
          fields: [
            {
              name: 'navItems',
              type: 'array',
              label: 'Pagine nel Menu',
              labels: {
                singular: 'Link Pagina',
                plural: 'Link Pagine',
              },
              fields: [
                {
                  name: 'pageReference',
                  type: 'relationship',
                  relationTo: 'pages',
                  required: true,
                  label: 'Seleziona Pagina',
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Etichetta personalizzata (opzionale)',
                },
              ],
            },
          ],
        },
        {
          label: 'Social e Contatti',
          fields: [
            {
              name: 'instagram',
              type: 'text',
              label: 'Link Instagram',
              required: true,
              admin: { placeholder: 'https://instagram.com/...' },
            },
            {
              name: 'facebook',
              type: 'text',
              label: 'Link Facebook',
              required: true,
              admin: { placeholder: 'https://facebook.com/...' },
            },
            {
              name: 'phoneNumber',
              type: 'text',
              label: 'Numero di Cellulare',
              required: true,
              admin: { placeholder: '+39 333 ...' },
            },
          ],
        },
      ],
    },
  ],
}
