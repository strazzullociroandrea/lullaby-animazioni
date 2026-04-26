'use server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const saveConfirm = async (formData: FormData) => {
  const payload = await getPayload({ config })

  const rawData = Object.fromEntries(formData.entries())

  try {
    await payload.create({
      collection: 'confirmation',
      data: {
        data: rawData
      },
    })
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: 'Errore durante il salvataggio' }
  }
}