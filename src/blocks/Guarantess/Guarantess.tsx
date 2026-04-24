import { RichText } from '@payloadcms/richtext-lexical/react'
import * as Icons from 'lucide-react'
import React from 'react'
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


export const Guarantess = ({ headerData }: { headerData: any }) => {
  const { title, description, guarantess } = headerData

  return (
    <section className="mt-5 mb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">

          <div className="relative inline-block mb-6">
            <span className="absolute -top-4 -left-7 text-2xl animate-pulse text-brand-yellow">✦</span>

            <h2 className="relative z-10 font-display font-bold text-4xl md:text-5xl text-primary">
              {title || 'Titolo'}
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-brand-pink/20 rounded-full -z-10" />
            </h2>

            <span className="absolute -right-6 top-0 text-brand-pink  ">✦</span>
          </div>
        </div>

        {description && (
          <div
            className="
              mt-10
              mb-10
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

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {!guarantess && <p>Inserisci le garanzie</p>}

          {guarantess &&
            guarantess.map((s: any, i: number) => (
              <div
                key={s.title}
                className={`group border relative text-primary rounded-3xl p-7 shadow-card-soft hover:-translate-y-2 hover:shadow-glow transition-bounce animate-pop-in block`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow">
                  ✨
                </div>

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-secondary/50">
                  <span className="text-2xl">                <IconRenderer card={s} />
</span>
                </div>

                <h3 className="font-display font-bold text-xl mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug mb-5">
                  {s.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}