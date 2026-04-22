import { Block } from 'payload'

export const GuarantessConfig: Block = {
  slug: 'garanzie',
  fields: [
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
      name: 'guarantess',
      type: 'array',
      label: 'Garanzie',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titolo Servizio',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Descrizione Servizio',
          required: true,
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Tipo di Icona',
          required: true,
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
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.iconType === 'lucide',
          },
        },
        {
          name: 'uploadIcon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Carica Immagine',
          admin: {
            condition: (_, siblingData) => siblingData?.iconType === 'image',
          },
        },
      ],
    },
  ],
}
