'use client'
import { useState } from 'react'
import { HelpCircle, Sparkles, ChevronDown } from 'lucide-react'
import React from 'react'

export const BreadCrumb = ({ headerData }: { headerData: any }) => {
  const { faq } = headerData
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  return (
    <section className="mt-5 mb-15">
      <div className="container mx-auto px-6">
        <div className="absolute top-0 left-0 w-64 h-64 bg-hero-mint/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-hero-violet/10 rounded-full blur-3xl -z-10" />

        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-block">
            <Sparkles className="absolute -top-8 -left-8 text-brand-yellow animate-bounce w-8 h-8" />
            <h2 className="relative z-10 font-display font-bold text-5xl md:text-6xl text-primary leading-tight">
              FAQs
              <span className="block h-2 bg-brand-pink/20 rounded-full mt-[-10px] -z-10 mx-auto " />
            </h2>
            <Sparkles className="absolute -bottom-4 -right-8 text-brand-pink animate-pulse w-6 h-6" />
          </div>
        </div>
        <div className="space-y-4">
          {faq.map((f, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={i}
                className={`border-2 transition-all duration-300 rounded-[2rem] overflow-hidden ${
                  isOpen
                    ? 'border-primary/30 bg-white shadow-glow'
                    : 'border-transparent bg-white/50 shadow-card-soft hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none"
                >
                  <span className={`font-display  text-lg md:text-xl transition-colors ${
                    isOpen ? 'text-primary' : 'text-foreground'
                  }`}>
                    {f.title}
                  </span>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className={isOpen ? 'text-primary' : 'text-muted-foreground'} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                    className="p-6 pt-0 text-muted-foreground text-lg leading-relaxed border-t border-dashed border-primary/10">
                    {f.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center bg-secondary/40 rounded-3xl p-8 border border-border">
          <h3 className="font-display font-bold text-2xl text-primary mb-2">Non hai trovato risposte alle tue
            domande?</h3>
          <p className="text-muted-foreground mb-5 max-w-xl mx-auto">Non farti problemi, siamo qui per aiutarti a creare
            un evento indimenticabile.</p>
          <a href="/contatti"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-card-soft hover:-translate-y-0.5 hover:shadow-glow transition-bounce">
            Contattaci o scrivici
          </a>
        </div>
      </div>
    </section>
  )
}