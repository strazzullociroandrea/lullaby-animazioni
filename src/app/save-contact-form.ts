'use server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { z } from 'zod'

const SubmissionSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  description: z.string().min(10),
})

export const saveContactForm = async (formData: FormData) => {
  const payload = await getPayload({ config })

  const entries = Object.fromEntries(formData.entries())

  const validatedFields = SubmissionSchema.safeParse(entries)

  if (!validatedFields.success) {
    return { success: false, error: 'Dati non validi' }
  }

  try {
    await payload.create({
      collection: 'submissions',
      data: validatedFields.data,
    })
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}