import { RichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'

export const Soul = ({ headerData }: { headerData: any }) => {
  const { title, description, content, image } = headerData

  const hasText = (data: any) => {
    if (!data || !data.root?.children) return false;
    return data.root.children.some((child: any) =>
      child.children?.some((inner: any) => inner.text?.trim().length > 0)
    );
  }

  return (
    <section id="anima" className="mt-5 mb-15">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block mb-4">
            <span className="absolute -top-4 -left-7 text-2xl animate-pulse text-brand-yellow">✦</span>
            <h2 className="relative z-10 font-display font-bold text-5xl md:text-6xl text-primary">
              {title || 'Titolo'}
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-brand-pink/20 rounded-full -z-10" />
            </h2>
            <span className="absolute -right-6 top-0 text-brand-pink">✦</span>
          </div>

          {hasText(description) && (
            <div
              className="
                mt-10 mb-10
                prose prose-lg md:prose-xl
                max-w-5xl text-center mx-auto
                prose-p:text-muted-foreground
                prose-p:m-0
                flex flex-col items-center
              "
            >
              <RichText data={description} />
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative animate-pop-in">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -inset-6 rounded-[3rem] bg-secondary/30 backdrop-blur-sm" />
              <img
                src={image?.url}
                alt={title || "Soul Image"}
                className="w-full h-full relative rounded-[3rem] object-cover shadow-card-soft"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center text-2xl shadow-card-soft">
                🎵
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-brand-pink flex items-center justify-center text-2xl shadow-card-soft">
                🎨
              </div>
            </div>
          </div>

          <div className="h-auto">
            <div className="prose prose-lg max-w-none
              text-muted-foreground
              prose-p:my-2
              prose-strong:text-primary">
              <RichText data={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}