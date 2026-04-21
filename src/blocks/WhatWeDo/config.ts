import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
export const WhatWeDo: Block = {
  slug: 'what-we-do',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titolo Sezione',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Descrizione',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Servizi (Card)',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titolo Servizio',
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Descrizione Servizio',
        },
        {
          name: 'toPage',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          label: 'Seleziona Pagina',
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Tipo di Icona',
          defaultValue: 'lucide',
          options: [
            { label: 'Icona Lucide (Testo)', value: 'lucide' },
            { label: 'Immagine Personale', value: 'image' },
          ],
        },
        {
          name: 'lucideIcon',
          type: 'text',
          label: 'Nome Icona Lucide (es: Heart, Star, Smile)',
          admin: {
            condition: (_, siblingData) => siblingData?.iconType === 'lucide',
          },
        },
        {
          name: 'uploadIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Carica Immagine',
          admin: {
            condition: (_, siblingData) => siblingData?.iconType === 'image',
          },
        },
      ],
    },
  ],
}
