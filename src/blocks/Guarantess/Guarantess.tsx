import { RichText } from '@payloadcms/richtext-lexical/react'

export const Guarantess = ({ headerData }: { headerData: any }) => {
  const { title, description, guarantess } = headerData

  return (
    <section className="mt-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">{title}</h2>
        </div>
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
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guarantess.map((s: any, i: number) => (
            <div
              key={s.title}
              className={`text-primary rounded-3xl p-7 shadow-card-soft hover:-translate-y-2 hover:shadow-glow transition-bounce animate-pop-in block`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5">icon</div>
              <h3 className="font-display font-bold text-xl mb-3 leading-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-snug mb-5">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
