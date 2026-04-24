import { Phone, Mail, MapPin, Clock, Send, Sparkles } from 'lucide-react'
import React from 'react'

export const Contacts = ({ headerData }: { headerData: any }) => {
  const {
    descPhone, phone,
    mail, descMail,
    place, descPlace,
    openingHours,
  } = headerData

  return (
    <section className="mt-5 mb-15">
      <div className="container mx-auto px-6">

        <div className="absolute top-0 left-0 w-64 h-64 bg-hero-mint/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-hero-violet/10 rounded-full blur-3xl -z-10" />

        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-block">
            <Sparkles className="absolute -top-8 -left-8 text-brand-yellow animate-bounce w-8 h-8" />
            <h2 className="relative z-10 font-display font-bold text-5xl md:text-6xl text-primary leading-tight">
              Hai qualche domanda?
              <span className="block h-2 bg-brand-pink/20 rounded-full mt-[-10px] -z-10 mx-auto " />
            </h2>
            <Sparkles className="absolute -bottom-4 -right-8 text-brand-pink animate-pulse w-6 h-6" />
          </div>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            Siamo pronti a rendere magico il tuo prossimo evento! Scrivici o chiamaci per un preventivo personalizzato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">

          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-display font-bold text-2xl text-primary px-2 mb-4">I nostri recapiti</h3>

            {[
              { icon: Phone, label: 'Cellulare', val: phone, desc: descPhone, color: 'bg-red-400' },
              { icon: Mail, label: 'Email', val: mail, desc: descMail, color: 'bg-blue-400' },
              { icon: MapPin, label: 'Sede legale', val: place, desc: descPlace, color: 'bg-green-400' }
            ].map((item, idx) => (
              <div key={idx} className="group flex gap-5 border border-border/60 bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 items-start shadow-card-soft  ">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.color} shadow-sm text-white `}>
                  <item.icon size={26} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-lg leading-none mb-1">{item.label}</span>
                  <span className="text-foreground/80 font-medium break-all">{item.val || 'Non disponibile'}</span>
                  {item.desc && <p className="text-xs italic text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>}
                </div>
              </div>
            ))}

            <div className="border border-border/60 bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-card-soft">
              <div className="flex gap-5 items-center mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-hero-violet shadow-sm text-white">
                  <Clock size={26} />
                </div>
                <span className="font-bold text-foreground text-lg">Orari di apertura</span>
              </div>
              <div className="space-y-2 px-2">
                {openingHours?.length > 0 ? (
                  openingHours.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between text-sm py-2 border-b border-dashed border-border last:border-0">
                      <span className="text-muted-foreground font-medium">{item.dayRange}</span>
                      <span className="font-bold text-primary">{item.hours}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground italic">Contattaci per info sugli orari</p>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-primary/5 p-8 md:p-12 rounded-[3rem] shadow-glow relative">
              <h3 className="font-display font-bold text-3xl text-brand-blue mb-8 flex items-center gap-3">
                Scrivici un messaggio
              </h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-sm ml-2 text-foreground/70 uppercase tracking-wider">Nome e cognome*</label>
                  <input type="text" required className="bg-muted/50 p-4 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all" placeholder="Mario Rossi" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-bold text-sm ml-2 text-foreground/70 uppercase tracking-wider">Email*</label>
                  <input type="email" required className="bg-muted/50 p-4 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all" placeholder="mario@esempio.it" />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-bold text-sm ml-2 text-foreground/70 uppercase tracking-wider">Cellulare*</label>
                  <input type="tel" required className="bg-muted/50 p-4 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all" placeholder="+39 333 0000000" />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-bold text-sm ml-2 text-foreground/70 uppercase tracking-wider">Come possiamo aiutarti?*</label>
                  <textarea rows={4} required className="bg-muted/50 p-4 rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all resize-none" placeholder="Descrivici la tua idea..."></textarea>
                </div>

                <div className="md:col-span-2 py-2">
                  <label className="group flex items-start gap-3 text-sm text-foreground/80 cursor-pointer">
                    <input type="checkbox" required className=" w-5 h-5 rounded-lg border-muted accent-primary cursor-pointer" />
                    <span className="transition-colors leading-tight">
                      Accetto il trattamento dei dati personali. Promettiamo di non inviarti spam, solo magia! ✨
                    </span>
                  </label>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="cursor-pointer w-full py-5 rounded-[1.5rem] bg-brand-pink text-white font-black text-xl  transition-bounce flex items-center justify-center gap-3 group">
                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    INVIA RICHIESTA
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-6 uppercase tracking-widest">
                    Risposta garantita entro 24 ore
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}