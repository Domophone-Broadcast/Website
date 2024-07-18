'use client'

import { useState } from 'react'
import Hero from '@/components/hero'
import Features from '@/components/features'
import CtaSection from "@/components/cta-section";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <main>
        <Hero />
        <Features />
        <CtaSection />
      </main>
  )
}
