import { RichText } from '@payloadcms/richtext-lexical/react'
import { Phone, Mail } from 'lucide-react'
import { InstagramIcon } from '../instagram-icon'
import { FacebookIcon } from '../facebook-icon'
import Link from 'next/link'
import React from 'react'

export const Footer = ({ headerData }: { headerData: any }) => {
  const { logo, title, subtitle, description, items, contacts } = headerData

  return (
    <footer className="bg-primary text-background py-10 md:py-14">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        <div className="md:col-span-2 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            {logo ? (
              <img src={logo.url} alt={logo.alt} className="h-auto w-16 md:w-20" />
            ) : (
              <span className="font-display font-bold text-xl text-primary-foreground">L</span>
            )}
            <div>
              <div className="font-display font-bold text-lg">{title}</div>
              <div className="text-[10px] uppercase tracking-widest text-background/60">
                {subtitle}
              </div>
            </div>
          </div>
          <RichText className="text-sm opacity-80" data={description} />
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold mb-2">Link Rapidi</h4>
          {items.pages.map((item: { label: string, url: string }) => (
            <a
              key={item.label}
              className="cursor-pointer text-sm opacity-80 hover:underline mb-2  text-background/60"
              href={item.url}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold mb-2">Legale</h4>
          <div className="text-sm opacity-80 flex flex-col gap-1 ">
            <a href="#" className="hover:underline  text-background/60 ">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline mt-2  text-background/60">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline mt-2  text-background/60">
              Termini e Condizioni
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <h4 className="font-bold mb-2">Contatti</h4>
          <a
            className="text-sm mb-2 hover:underline cursor-pointer flex items-center gap-2  text-background/60"
            href={`tel:${contacts.phone ? contacts.phone : ''}`}
          >
            <Phone className="w-4 h-auto" />
            <span>{contacts.phone ? contacts.phone : 'Cellulare'}</span>
          </a>
          <a
            className="text-sm mb-2 hover:underline cursor-pointer flex items-center gap-2  text-background/60"
            href={`mailto:${contacts.email ? contacts.email : ''}`}
          >
            <Mail className="w-4 h-auto" />
            <span>{contacts.email ? contacts.email : 'Email'}</span>
          </a>
          <p className="text-sm mb-2  flex items-center gap-2  text-background/60">
            P. Iva {contacts.iva ? contacts.iva : 'Partita iva'}
          </p>
          <div>
            <div className="flex items-center gap-2 mt-3 w-full">
              <Link
                key="instragram"
                href={contacts.iglink || '/'}
                aria-label="instagram"
                className="cursor-pointer w-8 h-8 rounded-full bg-white/80 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
              <Link
                key="facebook"
                href={contacts.fcblink || '/'}
                aria-label="facebook"
                className="cursor-pointer w-8 h-8 rounded-full bg-white/80 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mx-auto px-6 mt-10 pt-6 border-t border-background/10 text-center text-sm text-background/60">
        © {new Date().getFullYear()} Lullaby Animazioni. Tutti i diritti riservati.
        <p>
          Developed by{' '}
          <a
            href="https://cirostrazzullo.it"
            target="_blank"
            className="cursor-pointer hover:underline"
          >
            cirostrazzullo.it
          </a>
        </p>
      </div>
    </footer>
  )
}
