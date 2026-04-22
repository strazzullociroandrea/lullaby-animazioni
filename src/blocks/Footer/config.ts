import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const FooterConfig: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titolo',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Sottotitolo',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Descrizione',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
      required: true,
    },
    {
      name: 'items',
      type: 'group',
      label: 'Menu Pagine',
      required: true,
      fields: [
        {
          name: 'pages',
          label: '',
          type: 'array',
          required: true,
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
              label: 'Etichetta personalizzata',
              required: true,
            },
          ],
        },
      ],
    },
    {
      label: 'Contatti',
      type: 'group',
      name: 'contacts',
      fields: [
        {
          label: 'Telefono',
          name: 'phone',
          type: 'text',
          required: true,
        },
        {
          label: 'Email',
          name: 'email',
          type: 'text',
          required: true,
        },
        {
          label: 'Instagram link',
          name: 'iglink',
          type: 'text',
          required: true,
        },
        {
          label: 'Facebook link',
          name: 'fcblink',
          type: 'text',
          required: true,
        },
        {
          label: 'Partita Iva',
          name: 'iva',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
