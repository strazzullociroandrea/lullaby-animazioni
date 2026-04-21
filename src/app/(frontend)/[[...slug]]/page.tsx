import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function SlugPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug: slugArray } = await params

  const urlSlug = slugArray?.[0] || 'index'

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: urlSlug,
      },
    },
  })

  const page = result.docs[0]

  if (!page) {
    return notFound()
  }

  return <main></main>
}
