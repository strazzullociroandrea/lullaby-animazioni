import React from 'react'
import './styles.css'
import { Navbar } from '@/blocks/Navbar/Navbar'
import { Footer } from '@/blocks/Footer/Footer'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config })

  const headerData = await payload.findGlobal({
    slug: 'Navbar',
    depth: 1,
  })

  const footerData = await payload.findGlobal({
    slug: 'footer',
    depth: 1,
  })

  return (
    <html lang="en">
      <body>
        <Navbar headerData={headerData} />
        <main>{children}</main>
        <Footer headerData={footerData} />
      </body>
    </html>
  )
}
