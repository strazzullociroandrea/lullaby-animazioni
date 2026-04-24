import { Block } from 'payload'

export const HeroConfig: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Colore Sfondo',
      defaultValue: 'bg-white',
      // HeroConfig.ts
      options: [
        { label: 'Viola Lullaby', value: 'bg-primary' }, // Esistente
        { label: 'Giallo Sole', value: 'bg-brand-yellow' }, // Modificato da bg-yellow-80
        { label: 'Blu Brand', value: 'bg-brand-blue' }, // Modificato
        { label: 'Lavanda Dolce', value: 'bg-hero-lavender' },
        { label: 'Cielo Pulito', value: 'bg-hero-sky' },
        { label: 'Menta Fresca', value: 'bg-hero-mint' },
        { label: 'Limone Light', value: 'bg-hero-lemon' },
        { label: 'Pesca Soft', value: 'bg-hero-peach' },
        { label: 'Rosa Confetto', value: 'bg-hero-rose' },
        { label: 'Oceano Profondo', value: 'bg-hero-ocean' },
        { label: 'Verde Bosco', value: 'bg-hero-forest' },
        { label: 'Giallo Caldo', value: 'bg-hero-sunshine' },
        { label: 'Rosso Fuoco', value: 'bg-hero-fire' },
        { label: 'Gomma da Masticare', value: 'bg-hero-bubblegum' },
        { label: 'Indaco Notte', value: 'bg-hero-indigo' },
        { label: 'Verde Ottanio', value: 'bg-hero-teal' },
        { label: 'Crema Vaniglia', value: 'bg-hero-cream' },
        { label: 'Grigio Ardesia', value: 'bg-hero-slate' },
        { label: 'Fragola', value: 'bg-hero-strawberry' },
        { label: 'Acqua Marina', value: 'bg-hero-aqua' },
        { label: 'Violetto', value: 'bg-hero-violet' },
        { label: 'Albicocca', value: 'bg-hero-apricot' },
        { label: 'Verde Salvia', value: 'bg-hero-sage' },
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
