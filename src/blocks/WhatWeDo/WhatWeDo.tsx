import { RichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'
import * as Icons from 'lucide-react'
import Image from 'next/image'

type LucideIconName = keyof typeof Icons

interface IconRendererProps {
  card: {
    iconType: 'lucide' | 'image'
    lucideIcon?: string
    uploadIcon?: {
      url: string
    }
  }
}

const IconRenderer: React.FC<IconRendererProps> = ({ card }) => {
  if (card.iconType === 'image' && card.uploadIcon?.url) {
    return (
      <Image
        src={card.uploadIcon.url}
        alt="custom-icon"
        width={32}
        height={32}
        className="object-contain"
      />
    )
  }
  const iconName = card.lucideIcon as LucideIconName
  const SelectedIcon = Icons[iconName] ? (Icons[iconName] as React.ElementType) : null

  if (SelectedIcon) {
    return <SelectedIcon size={32} strokeWidth={2} />
  }

  return <Icons.HelpCircle size={32} />
}

export const WhatWeDo = ({ headerData }: { headerData: any }) => {
  const { title, description, cards } = headerData

  const getCardColor = (index: number) => {
    const bgColors = ['bg-brand-blue', 'bg-brand-pink', 'bg-brand-orange', 'bg-brand-green']
    return bgColors[index % bgColors.length]
  }

  return (
    <section id="cosa-facciamo" className="py-10 md:py-5  ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">
            {title || 'Titolo'}
          </h2>

          {description && (
            <div
              className="
              text-muted-foreground
              prose
              prose-lg
              md:prose-xl
              max-w-5xl
              text-center
              mx-auto
              prose-p:text-muted-foreground
              prose-p:leading-relaxed
              prose-strong:text-primary
              flex flex-col items-center
            "
            >
              <RichText data={description} />
            </div>
          )}
        </div>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((s: any, i: number) => (
            <a
              href={s.toPage.url}
              key={s.title}
              className={`h-60 lg:h-75 ${getCardColor(i)} rounded-3xl p-7 text-primary-foreground shadow-card-soft hover:-translate-y-2 hover:shadow-glow transition-bounce animate-pop-in block`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 backdrop-blur flex items-center justify-center mb-5">
                <IconRenderer card={s} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 leading-tight">{s.title}</h3>
              <p className="text-sm text-primary-foreground/90 leading-snug mb-5">{s.content}</p>
              <div className="text-xs font-bold opacity-90">Scopri →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
