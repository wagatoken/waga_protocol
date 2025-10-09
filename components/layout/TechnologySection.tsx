 "use client"

import React from "react"
import { motion } from "framer-motion"
import { Coffee, Shield, BarChart3, Leaf, Globe, Zap, Database, Cpu } from "lucide-react"
import DynamicGlowCard from "@/components/dynamic-glow-card"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const gradientTextStyle = {
  color: "transparent",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  backgroundImage:
    "linear-gradient(to right, rgba(16, 185, 129, 1), rgba(147, 51, 234, 1), rgba(16, 185, 129, 1))",
  backgroundSize: "300% auto",
}

export default function TechnologiesSection(){
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              <span className="web3-dual-gradient-text-glow" style={gradientTextStyle}>
                Technology Stack
              </span>
            </h2>
            <p className="mb-8 md:mb-16 text-base md:text-lg text-gray-400">
              Powered by cutting-edge blockchain and IoT technologies
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <motion.div variants={fadeIn}>
              <DynamicGlowCard variant="emerald" className="h-full p-3 sm:p-4 md:p-6 lg:p-8">
                <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-emerald-400 glow-text flex flex-wrap items-center">
                  <div className="relative mr-3 mb-2 sm:mb-0">
                    <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                    <div className="relative flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg">
                      <Database className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                    </div>
                  </div>
                  <span>Blockchain Infrastructure</span>
                </h3>
                <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
                  Our platform is built on a zkRollup architecture, providing the perfect balance between transparency
                  and privacy while ensuring high throughput and low transaction costs.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-3 sm:p-4 backdrop-blur-sm">
                    <h4 className="mb-1 md:mb-2 font-semibold text-emerald-300 text-sm md:text-base">
                      ERC-1155 Token Standard
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Enables efficient batch tokenization of coffee with shared metadata and lower gas costs.
                    </p>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-3 sm:p-4 backdrop-blur-sm">
                    <h4 className="mb-1 md:mb-2 font-semibold text-emerald-300 text-sm md:text-base">
                      Smart Contracts
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Automate key processes like tokenization, collateralization, and insurance payouts.
                    </p>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-3 sm:p-4 backdrop-blur-sm">
                    <h4 className="mb-1 md:mb-2 font-semibold text-emerald-300 text-sm md:text-base">
                      IPFS Metadata Storage
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Decentralized storage for coffee batch data, ensuring immutability and accessibility.
                    </p>
                  </div>
                </div>
              </DynamicGlowCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <DynamicGlowCard variant="purple" className="h-full p-4 sm:p-6 md:p-8">
                <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-purple-300 purple-glow flex flex-wrap items-center">
                  <div className="relative mr-3 mb-2 sm:mb-0">
                    <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                    <div className="relative flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
                      <Cpu className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
                    </div>
                  </div>
                  <span>IoT & Oracle Integration</span>
                </h3>
                <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
                  Real-world data is securely brought on-chain through IoT devices and Chainlink oracles, ensuring
                  accurate verification of coffee reserves and conditions.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-3 sm:p-4 backdrop-blur-sm">
                    <h4 className="mb-1 md:mb-2 font-semibold text-emerald-300 text-sm md:text-base">
                      Proof of Reserve (PoR)
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Chainlink Functions verify that physical coffee reserves match tokenized representations.
                    </p>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-3 sm:p-4 backdrop-blur-sm">
                    <h4 className="mb-1 md:mb-2 font-semibold text-emerald-300 text-sm md:text-base">
                      Quality Monitoring
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      IoT sensors track parameters like temperature and humidity to ensure coffee quality.
                    </p>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-black/50 p-3 sm:p-4 backdrop-blur-sm">
                    <h4 className="mb-1 md:mb-2 font-semibold text-emerald-300 text-sm md:text-base">Price Feeds</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Real-time coffee market prices are brought on-chain for accurate valuation and trading.
                    </p>
                  </div>
                </div>
              </DynamicGlowCard>
            </motion.div>
          </div>
        </div>
    )
}
 