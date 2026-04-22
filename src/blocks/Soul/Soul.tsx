import { RichText } from '@payloadcms/richtext-lexical/react'

export const Soul = ({ headerData }: { headerData: any }) => {
  const { title, description, content, image } = headerData

  return (
    <section id="cosa-facciamo" className="py-10 md:py-5 mt-8 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">{title || "Titolo"}</h2>
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
        <div className="mt-5 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-glow max-w-sm mx-auto">
            <img src={image.url} alt={image.alt} />
          </div>
          <div className="text-muted-foreground h-auto">
            <RichText data={content} />
          </div>
        </div>
      </div>
    </section>
  )
}
