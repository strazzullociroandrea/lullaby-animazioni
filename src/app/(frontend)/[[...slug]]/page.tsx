import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import configPromise from '@/payload.config'
import React from 'react'
import { Hero } from '@/blocks/Hero/Hero'

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

  const heroResult = page.layout?.find((block) => block.blockType === 'hero')

  return (
    <main>
      {page.layout?.map((block: any, index: number) => {
        if (block.blockType === 'hero') {
          return <Hero headerData={heroResult} key="hero" />
        }
        return null
      })}
    </main>
  )
}
