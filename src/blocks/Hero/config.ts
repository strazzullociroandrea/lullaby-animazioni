import { Block } from 'payload'

export const HeroConfig: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Colore Sfondo',
      defaultValue: 'bg-white',
      options: [
        { label: 'Bianco', value: 'bg-white' },
        { label: 'Viola Lullaby', value: 'bg-primary' },
        { label: 'Giallo Sole', value: 'bg-yellow-80' },
        { label: 'Azzurro Cielo', value: 'bg-blue-80' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titolo',
      required: true,
    },
    {
      label: 'Sottotitolo',
      name: 'subtitle',
      type: 'textarea',
      required: true,
    },
    {
      name: 'motto',
      type: 'text',
      label: 'Frase Motto (Opzionale)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ctaLabel',
          type: 'text',
          label: 'Testo pulsante',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'ctaPage',
          type: 'relationship',
          relationTo: 'pages',
          label: 'Pagina di destinazione',
          required: true,
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'showPath',
      type: 'checkbox',
      label: 'Mostra percorso (Breadcrumb)',
      defaultValue: false,
    },
  ],
}
