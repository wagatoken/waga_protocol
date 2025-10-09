"use client"

import React from "react"
import { motion } from "framer-motion"
import { Coffee, Shield, BarChart3, Leaf, Globe, Zap } from "lucide-react"
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

export default function FeaturesSection(){
  const features = [
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
          <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg">
            <Coffee className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </div>
        </div>
      ),
      title: "Tokenized Coffee Reserves",
      description:
        "Digitize coffee into traceable and tradable ERC-1155 tokens secured by real-world coffee batches.",
      variant: "emerald" as const,
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-sm"></div>
          <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
            <Shield className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </div>
        </div>
      ),
      title: "Transparency & Traceability",
      description:
        "Track coffee batches from farm to cup, verifying ethical, quality, and sustainability parameters.",
      variant: "purple" as const,
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
          <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg">
            <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </div>
        </div>
      ),
      title: "DeFi Integration",
      description:
        "Access community-funded liquidity pools and tokenized collateral for loans and trade finance.",
      variant: "emerald" as const,
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-sm"></div>
          <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
            <Leaf className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </div>
        </div>
      ),
      title: "Sustainable Farming",
      description: "Incentivize and reward sustainable farming practices through transparent verification.",
      variant: "purple" as const,
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm"></div>
          <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg">
            <Globe className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </div>
        </div>
      ),
      title: "Global Marketplace",
      description: "Connect farmers directly with buyers worldwide through our decentralized marketplace.",
      variant: "emerald" as const,
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-sm"></div>
          <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
            <Zap className="h-5 w-5 md:h-6 md:w-6 text-black" />
          </div>
        </div>
      ),
      title: "WAGAToken Utility",
      description:
        "Access platform services, lower transaction costs, and earn rewards through our native token.",
      variant: "purple" as const,
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
          <span className="web3-dual-gradient-text-glow" style={gradientTextStyle}>
            Key Features
          </span>
        </h2>
        <p className="mb-8 md:mb-16 text-base md:text-lg text-gray-400">
          Our platform combines blockchain technology with real-world coffee value chain solutions
        </p>
      </div>

      <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <motion.div key={index} variants={fadeIn}>
            <DynamicGlowCard variant={feature.variant} className="h-full p-4 sm:p-6" intensity="medium">
              <div className="mb-3 md:mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-lg md:text-xl font-bold text-emerald-300 glow-text">{feature.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
            </DynamicGlowCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}