import { Block } from 'payload'

export const BreadCrumbConfig: Block = {
  slug: 'BreadCrumb',
  fields: [
    {
      label: 'Faq',
      name: 'faq',
      type: 'array',
      required: true,
      fields: [
        {
          label: 'Titolo',
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          label: 'Descrizione',
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}