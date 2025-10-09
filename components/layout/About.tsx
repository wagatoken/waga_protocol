"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Web3Card from "@/components/web3-card"

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

export default function AboutSection(){
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
          <span className="web3-dual-gradient-text-glow" style={gradientTextStyle}>
            About WAGA Protocol
          </span>
        </h2>
        <p className="mb-8 md:mb-12 text-base md:text-lg text-gray-400">
          Revolutionizing the coffee industry with a two-phase approach to blockchain integration
        </p>
      </div>

      <div className="grid gap-8 md:gap-12 md:grid-cols-2">
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex flex-col justify-center">
          <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-emerald-400">Our Vision</h3>
          <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
            WAGA Protocol envisions a future where smallholder farmers, cooperatives, roasters, and consumers
            operate in a more inclusive, transparent, and sustainable coffee value chain.
          </p>
          <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
            By leveraging blockchain and DeFi technologies, we aim to create an ecosystem where all participants
            thrive while contributing to the growth of a global, sustainable coffee industry.
          </p>
          <div className="mt-2 md:mt-4">
            <Link
              href="#features"
              className="group inline-flex items-center text-emerald-500 hover:text-emerald-400 text-sm md:text-base"
            >
              Learn more about our approach
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <Web3Card variant="dual" className="h-full p-4 sm:p-6 web3-card-glow">
            <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-purple-300 purple-glow flex flex-wrap items-center">
              <div className="relative mr-3 mb-2 sm:mb-0">
                <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-sm"></div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
                  <svg
                    className="h-4 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span>Two-Phase MVP Deployment</span>
            </h3>

            <div className="mb-4 md:mb-6 space-y-3 md:space-y-4">
              <div className="rounded-lg border border-purple-500/20 bg-black/50 p-3 sm:p-4 backdrop-blur-sm">
                <h4 className="mb-1 md:mb-2 text-base md:text-lg font-semibold text-purple-300">
                  Phase 1: Retail Coffee Traceability
                </h4>
                <p className="text-gray-400 text-sm md:text-base">
                  A consumer-facing traceability solution for roasted coffee bags with QR code scanning and
                  blockchain verification.
                </p>
              </div>

              <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-3 sm:p-4 backdrop-blur-sm">
                <h4 className="mb-1 md:mb-2 text-base md:text-lg font-semibold text-emerald-300">
                  Phase 2: Wholesale Export Tokenization
                </h4>
                <p className="text-gray-400 text-sm md:text-base">
                  A blockchain-based trade finance system for bulk coffee exports with DeFi integration and
                  tokenized assets.
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs sm:text-sm text-purple-300">Launching Q2 2025</span>
            </div>
          </Web3Card>
        </motion.div>
      </div>
    </div>
  )
}