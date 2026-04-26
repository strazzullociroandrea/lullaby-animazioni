import { CollectionConfig } from 'payload'

export const Confirmation: CollectionConfig = {
  slug: 'confirmation',
  access: {
    create: () => true,
    read: ({ req: { user } }) => !!user,
  },
  fields: [
    { name: 'data', type: 'json' },
  ],
}