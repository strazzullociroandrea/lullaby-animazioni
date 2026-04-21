import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export const Hero = ({ headerData }: { headerData: any }) => {
  const { backgroundColor, title, subtitle, motto, ctaLabel, ctaPage, image } = headerData

  return (
    <section
      id="home"
      className={`relative overflow-hidden text-primary-foreground min-h-[90vh] flex items-center ${backgroundColor}`}
    >
      <div className="container relative mx-auto px-6 pt-24 pb-48 md:pt-32 md:pb-64 lg:ml-20 lg:mr-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-pop-in z-10">
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-8">
              {subtitle}
            </p>

            {motto && <p className="text-brand-yellow font-bold text-lg mb-10">✦ {motto}</p>}

            <div className="flex flex-wrap gap-4">
              <Link
                href={typeof ctaPage === 'object' && ctaPage?.slug ? `/${ctaPage.slug}` : '/'}
                className="px-7 py-4 rounded-full bg-primary-foreground text-primary font-bold shadow-card-soft hover:-translate-y-1 hover:shadow-glow transition-bounce"
              >
                {ctaLabel}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-12 items-center justify-center w-full animate-bounce">
              <ArrowDown />
            </div>
          </div>

          <div className="hidden sm:block relative animate-pop-in [animation-delay:0.2s]">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -inset-6 rounded-[3rem] bg-primary-foreground/10 backdrop-blur-sm" />
              <img
                src={image.url}
                alt="Image Hero"
                className="w-full h-auto relative rounded-[3rem]  object-cover shadow-glowl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-brand-yellow flex items-center justify-center text-3xl rotate-12 animate-wiggle shadow-card-soft">
                🎵
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-brand-pink flex items-center justify-center text-3xl shadow-card-soft animate-float">
                🎨
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 translate-y-px">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-20 md:h-30"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
          style={{ transform: 'scaleY(1.1)', transformOrigin: 'bottom' }}
        >
          <path
            fill="hsl(var(--background))"
            d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,72 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  )
}
