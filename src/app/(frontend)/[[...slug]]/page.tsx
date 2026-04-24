import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import configPromise from '@/payload.config'
import React from 'react'
import { Hero } from '@/blocks/Hero/Hero'
import { Metadata } from 'next'
import { WhatWeDo } from '@/blocks/WhatWeDo/WhatWeDo'
import { Guarantess } from '@/blocks/Guarantess/Guarantess'
import { Soul } from '@/blocks/Soul/Soul'
import { Contacts } from '@/blocks/Contacts/Contacts'
import { BreadCrumb } from '@/blocks/BreadCrumb/BreadCrumb'

export async function generateMetadata({
                                         params,
                                       }: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
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
  if (!page) return { title: 'Errore di configurazione. Controlla il titolo della pagina' }

  return {
    title: page.title,
    description: page?.meta?.description,
    keywords: page?.meta?.keywords,
    icons: {
      icon: (typeof page.favicon === 'object' && page.favicon !== null
        ? page.favicon.url
        : undefined) as string | undefined,
    },
  }
}

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
  const wwdResult = page.layout?.find((block) => block.blockType === 'what-we-do')
  const guaranResult = page.layout?.find((block) => block.blockType === 'garanzie')
  const soulResult = page.layout?.find((block) => block.blockType === 'anima')
  const contactsResult = page.layout?.find((block) => block.blockType === 'contatti')
  const breadCrumbResult = page.layout?.find((block) => block.blockType === 'BreadCrumb')

  return (
    <main>
      {page.layout?.map((block: any, index: number) => {
        if (block.blockType === 'hero') {
          return <Hero headerData={heroResult} key="hero" />
        }
        if (block.blockType === 'what-we-do') {
          return <WhatWeDo headerData={wwdResult} key="whatwedo" />
        }
        if (block.blockType === 'garanzie') {
          return <Guarantess headerData={guaranResult} key="guarantess" />
        }
        if (block.blockType === 'anima') {
          return <Soul headerData={soulResult} key="soul" />
        }
        if (block.blockType === 'contatti') {
          return <Contacts headerData={contactsResult} key="contacts" />
        }

        if (block.blockType === 'BreadCrumb') {
          return <BreadCrumb headerData={breadCrumbResult} key="BreadCrumb" />
        }


        return null
      })}
    </main>
  )
}
