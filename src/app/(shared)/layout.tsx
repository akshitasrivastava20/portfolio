import Footer from '@/context/components/layouts/Footer'
import Header from '@/context/components/layouts/Header'
import ScrollToTopButton from '@/context/components/shared/ScrollToTop'
import React from 'react'

interface ChildrenProps {
  readonly children: React.ReactNode
}

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Header className='max-w-3xl mx-auto'/>
      <div className="container mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-5 md:px-16">
        {children}
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}
