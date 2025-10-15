"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import ParticleBackground from "@/components/particle-background"
import HexagonGrid from "@/components/hexagon-grid"
import AboutSection from "@/components/layout/About"
import FeaturesSection from "@/components/layout/Features"
import BenefitsSection from "@/components/layout/BenefitsSection"
import TechnologiesSection from "@/components/layout/TechnologySection"
import Roadmap from "@/components/layout/RoadMap"
import Cta from "@/components/layout/CTA"
import Hero from "@/components/layout/Hero"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}


const Section = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { 
    once: true, 
    // threshold: 0.2 
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      className={`py-12 md:py-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
 
  return (
    <div className="overflow-hidden bg-gradient-to-b from-background via-background to-muted ">
      <ParticleBackground />
      <HexagonGrid className="dark:opacity-10" />

      <Section id='/' >
        <Hero />
      </Section>

      <Section id="about" className="bg-gray-900/10">
        <AboutSection />
      </Section>

      <Section id="features" >
        <FeaturesSection />
      </Section>

      <Section className="bg-gray-900/10">
        <BenefitsSection />
      </Section>

      <Section>
        <TechnologiesSection />
      </Section>

      <Section id="roadmap" className="bg-gray-900/10">
        <Roadmap />
      </Section>

      <Section id="contact" >
        <Cta/>
      </Section>
    </div>
  );
}
