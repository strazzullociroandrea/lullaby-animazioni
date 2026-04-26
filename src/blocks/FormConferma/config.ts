import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const FormConferma: Block = {
  slug: 'formConferma',
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      label: 'Nome categoria di conferma',
      required: true,
    },
    {
      name: 'info',
      type: 'array',
      label: 'Configurazione Campi',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'fieldName',
              type: 'text',
              label: 'Nome campo',
              required: true,
              admin: { width: '40%' },
            },

            {
              name: 'type',
              type: 'select',
              label: 'Tipologia campo',
              required: true,
              admin: { width: '30%' },
              options: [
                { label: 'Testuale', value: 'text' },
                { label: 'Data e ora', value: 'datetime-local' },
                { label: 'Contenuto (Editor)', value: 'div' },
                { label: 'Selezione Singola', value: 'select' },
                { label: 'Selezione Multipla', value: 'select-multiple' },
              ],
            },
            {
              name: 'width',
              type: 'select',
              label: 'Larghezza Layout',
              required: true,
              defaultValue: 'full',
              admin: { width: '30%' },
              options: [
                { label: 'Metà Colonna (50%)', value: 'half' },
                { label: 'Colonna Intera (100%)', value: 'full' },
              ],
            },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Obbligatorio (default no)',
          required: true,
        },
        {
          name: 'placeholder',
          type: 'text',
          label: 'Placeholder',
          admin: {
            condition: (_, siblingData) => siblingData?.type !== 'div',
          },
        },
        {
          name: 'info',
          type: 'text',
          label: 'Info campo (Sottotitolo)',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Contenuto Formattato',
          editor: lexicalEditor({}),
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'div',
          },
        },
        {
          name: 'selectOptions',
          type: 'array',
          label: 'Opzioni Selezione',
          admin: {
            condition: (_, siblingData) =>
              ['select', 'select-multiple'].includes(siblingData?.type),
          },
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'label', type: 'text', required: true, admin: { width: '50%' } },
                { name: 'value', type: 'text', required: true, admin: { width: '50%' } },
              ],
            },
          ],
        },
      ],
    },
  ],
}