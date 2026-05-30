import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { Toaster } from '@/context/components/ui/sonner'
import React from 'react'
import { Providers } from './Providers'
import { cath, lombok, neu } from '@/lib/font'

const inter = Inter({ subsets: ['latin'] })

const info = {
  name: 'Akshita Srivastava',
  
  description:
    'Full-Stack Developer, Next.js Buff, Freelancer, Always Evolving. Crafting web apps to ignite ideas.',
  url: 'https://www.akshita.dev/',
  image:
    'https://raw.githubusercontent.com/devxoshakya/folio/a69b6d36cc22cf658c1d480bb5da9918494ccc88/public/logo.svg?token=AKWRCG75NGIPUUQJDKKNUQ3HEGXVC',
}

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: info.name,
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  openGraph: {
    type: 'website',
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image,
  },
 
}

interface ChildrenProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="4d6857e8-29c8-4387-bd3a-b5a841b036ef"
        ></script>
      </head>
      <body
        className={`${neu.variable} ${inter.className} ${cath.variable} ${lombok.variable}`}
      >
        <Providers>
          <div className="relative dark:bg-black">{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
