'use client'

import { useState } from 'react'
import Hero from '@/app/components/hero'
import Features from '@/app/components/features'
import CtaSection from "@/app/components/cta-section";
import Footer from "@/app/components/footer";
import Price from "@/app/components/price";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <main>
          <Hero/>
          <Features/>
          <Price/>
          <CtaSection/>
          <footer>
            <Footer/>
          </footer>
      </main>
  )
}
