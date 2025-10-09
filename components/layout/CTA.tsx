"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Web3Button from "../web3-button"
import DynamicGlowCard from "../dynamic-glow-card"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const gradientTextStyle = {
  color: "transparent",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  backgroundImage:
    "linear-gradient(to right, rgba(16, 185, 129, 1), rgba(147, 51, 234, 1), rgba(16, 185, 129, 1))",
  backgroundSize: "300% auto",
}

export default function Cta(){
    return(
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicGlowCard variant="emerald" className="mx-auto max-w-4xl p-3 sm:p-4 md:p-8 lg:p-12" intensity="high">
            <motion.div variants={fadeIn}>
              <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl text-center">
                <span className="web3-dual-gradient-text-glow" style={gradientTextStyle}>
                  Join the WAGA Ecosystem
                </span>
              </h2>
              <p className="mx-auto mb-6 md:mb-8 max-w-2xl text-base md:text-lg text-gray-300 text-center">
                Be part of a movement to make the coffee value chain fair again. Whether you're a farmer, processor,
                buyer, or enthusiast, there's a place for you in our community.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Web3Button size="lg" variant="gradient" className="w-full sm:w-auto" asChild>
                  <Link href="/community/dashboard">Join Community</Link>
                </Web3Button>
                <Web3Button size="lg" variant="purple" className="w-full sm:w-auto">
                  Read Whitepaper
                </Web3Button>
              </div>
            </motion.div>
          </DynamicGlowCard>
        </div>
    )
}
