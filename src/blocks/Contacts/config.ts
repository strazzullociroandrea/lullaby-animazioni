import { Block } from 'payload'

export const ContactsConfig: Block = {
  slug: 'contatti',
  fields: [
    {
      label: 'Cellulare',
      name: 'phone',
      required: true,
      type: 'text',
    },
    {
      label: 'Descrizione cellulare (opzionale)',
      name: 'descPhone',
      type: 'text',
    },
    {
      label: 'Email',
      name: 'mail',
      required: true,
      type: 'email',
    },
    {
      label: 'Descrizione email (opzionale)',
      name: 'descMail',
      type: 'text',
    },
    {
      label: 'Sede legale',
      name: 'place',
      required: true,
      type: 'text',
    },
    {
      label: 'Descrizione sede legale (opzionale)',
      name: 'descPlace',
      type: 'text',
    },
    {
      name: 'openingHours',
      label: 'Orari di Apertura',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'dayRange',
              type: 'text',
              label: 'Giorni (es: Lunedì - Venerdì)',
              required: true,
              admin: { width: '50%' },
            },
            {
              name: 'hours',
              type: 'text',
              label: 'Orario (es: 09:00 - 18:00)',
              required: true,
              admin: { width: '50%' },
            },
          ],
        },
      ],
    },
  ],
}