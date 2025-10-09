"use client"

import type React from "react"
import { motion } from "framer-motion"
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

export default function BenefitsSection(){
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              <span className="web3-dual-gradient-text-glow" style={gradientTextStyle}>
                Benefits for Stakeholders
              </span>
            </h2>
            <p className="mb-8 md:mb-16 text-base md:text-lg text-gray-400">
              WAGA Protocol creates value across the entire coffee value chain
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <motion.div variants={fadeIn}>
              <DynamicGlowCard variant="purple" className="h-full p-3 sm:p-4 md:p-6 lg:p-8">
                <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-purple-300 purple-glow">For Farmers</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Access to fair pricing mechanisms and global markets
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Income stability through tokenized futures and decentralized insurance
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Direct loans and financial resources for operational needs
                    </p>
                  </li>
                </ul>
              </DynamicGlowCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <DynamicGlowCard variant="emerald" className="h-full p-4 sm:p-6 md:p-8">
                <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-emerald-400 glow-text">
                  For Processors & Exporters
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Liquidity for scaling operations and equipment upgrades
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Enhanced traceability for compliance and market access
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">Lower transaction fees and instant settlements</p>
                  </li>
                </ul>
              </DynamicGlowCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <DynamicGlowCard variant="purple" className="h-full p-4 sm:p-6 md:p-8">
                <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-purple-300 purple-glow">
                  For Consumers
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Transparent sourcing with blockchain-verified records
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Ethical consumption through verified sustainable practices
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Direct connection to coffee producers through QR code scanning
                    </p>
                  </li>
                </ul>
              </DynamicGlowCard>
            </motion.div>

            <motion.div variants={fadeIn}>
              <DynamicGlowCard variant="emerald" className="h-full p-4 sm:p-6 md:p-8">
                <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-emerald-400 glow-text">
                  For Governments & Regulators
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Improved foreign currency reserves through transparent exports
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">Transparent and efficient market oversight</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 md:mr-4 mt-1 relative">
                      <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
                      <div className="relative flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-emerald-800">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">
                      Compliance with international trade standards and regulations
                    </p>
                  </li>
                </ul>
              </DynamicGlowCard>
            </motion.div>
          </div>
        </div>
    )
}
