'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { InstagramIcon } from '../instagram-icon'
import { FacebookIcon } from '../facebook-icon'
import { usePathname } from 'next/navigation'

export const Navbar = ({ headerData }: { headerData: any }) => {
  const { logo, logoText, navItems = [], instagram, facebook, phoneNumber } = headerData || {}
  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <div className="flex justify-start">
            <Link href="/" className="flex flex-col items-center gap-1 group">
              <div className="w-25 h-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                {logo?.url ? (
                  <img
                    src={logo.url}
                    alt={logo.alt || 'Logo'}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-primary font-bold text-2xl">L</span>
                )}
              </div>

              <div className="leading-tight text-center">
                <div className="text-[8px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                  {logoText || 'Animazione educativa e musicale'}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-7 text-center">
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item: {
              pageReference:{
                id: string,
                slug: string
              },
              label: string
            }) => (
              <Link
                key={item.pageReference.id}
                href={item.pageReference.slug}
                className={`text-sm font-semibold transition-colors font-body ${
                  pathname == '/' + item.pageReference.slug
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Link
                key="instragram"
                href={instagram || '/'}
                aria-label="instagram"
                className="cursor-pointer w-9 h-9 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
              <Link
                key="facebook"
                href={facebook || '/'}
                aria-label="facebook"
                className="cursor-pointer w-9 h-9 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </Link>
            </div>
            <Link
              href={`tel:${phoneNumber ? phoneNumber.replaceAll(' ') : ''}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-card-soft hover:shadow-glow hover:-translate-y-0.5 transition-bounce"
            >
              <Phone className="w-4 h-4" /> {phoneNumber || 'Cellulare'}
            </Link>
          </div>
        </div>
        <button
          className="lg:hidden p-2 text-primary cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-1">
          <div className="container py-6 flex flex-col items-center justify-center gap-4 px-4 mx-auto">
            {navItems.map((item: {
              pageReference: {
                slug: string,
                id: string
              },
              label: string
            }) => {
              const slug = item.pageReference.slug === 'home' ? '' : item.pageReference.slug
              const href = `/${slug}`
              const isActive = pathname === href

              return (
                <Link
                  key={item.pageReference.id}
                  href={href}
                  onClick={close}
                  className={`text-sm font-semibold transition-all py-2 w-full text-center ${
                    isActive ? 'text-primary ' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            <div className="flex items-center gap-2 mt-3 w-full">
              <Link
                key="instragram"
                href={instagram || '/'}
                aria-label="instagram"
                className="cursor-pointer w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
              <Link
                key="facebook"
                href={facebook || '/'}
                aria-label="facebook"
                className="cursor-pointer w-9 h-9 rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </Link>
            </div>
            <div className="w-full ">
              <Link
                href={`tel:${phoneNumber ? phoneNumber.replaceAll(' ') : ''}`}
                className="mt-3 flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold transition-bounce"
              >
                <Phone className="w-4 h-4" /> {phoneNumber || 'Cellulare'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
