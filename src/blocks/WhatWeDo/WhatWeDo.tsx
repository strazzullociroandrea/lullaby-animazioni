import { RichText } from '@payloadcms/richtext-lexical/react'

export const WhatWeDo = ({ headerData }: { headerData: any }) => {
  const { title, description } = headerData

  return (
    <section id="cosa-facciamo" className="py-10 md:py-5 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">{title}</h2>

          {description && (
            <div
              className="
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
      </div>
    </section>
  )
}
