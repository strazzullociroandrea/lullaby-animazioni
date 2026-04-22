import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const SoulConfig: Block = {
  slug: 'anima',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titolo',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Descrizione contenuto',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Carica Immagine',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenuto completo',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
  ],
}
