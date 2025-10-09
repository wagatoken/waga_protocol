"use client"

import type React from "react"
import { motion } from "framer-motion"
import DynamicGlowCard from "../dynamic-glow-card"

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

export default function Roadmap(){
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              <span className="web3-dual-gradient-text-glow" style={gradientTextStyle}>
                Development Roadmap
              </span>
            </h2>
            <p className="mb-8 md:mb-16 text-base md:text-lg text-gray-400">
              Our journey to transform the coffee value chain
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="roadmap-line hidden md:block"></div>

            <motion.div variants={staggerContainer} className="space-y-8 md:space-y-12">
              {[
                {
                  phase: "Phase 1: Initial Development",
                  timeline: "Q1-Q2 2025",
                  milestones: [
                    "MVP development completion",
                    "Utility token (WAGAToken) presale launch",
                    "WAGA Academy curriculum development",
                  ],
                  variant: "emerald",
                },
                {
                  phase: "Phase 2: Pilot & Feedback",
                  timeline: "Q2-Q4 2025",
                  milestones: [
                    "Launch pilot study with coffee producers",
                    "Integrate DeFi functionalities for liquidity pools",
                    "Community-driven campaigns to boost adoption",
                    "Collect data and feedback to refine the platform",
                  ],
                  variant: "purple",
                },
                {
                  phase: "Phase 3: Scaling & Optimization",
                  timeline: "Q1 2026",
                  milestones: [
                    "Implement learnings from pilot study",
                    "Advanced features like decentralized trade finance",
                    "Secure global partnerships with coffee industry stakeholders",
                    "Regional expansion marketing campaigns",
                  ],
                  variant: "emerald",
                },
                {
                  phase: "Phase 4: Full Platform Deployment",
                  timeline: "Q2 2026",
                  milestones: [
                    "Full-scale platform deployment globally",
                    "Continuous improvements based on user feedback",
                    "Expansion of WAGA Academy programs",
                    "Establishment of blockchain coffee standard",
                  ],
                  variant: "purple",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                >
                  <DynamicGlowCard
                    variant={item.variant as "emerald" | "purple"}
                    className="p-3 sm:p-4 md:p-6"
                    intensity={index % 2 === 0 ? "medium" : "high"}
                  >
                    <div className="roadmap-dot hidden md:block"></div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3
                        className={`text-lg sm:text-xl font-bold ${item.variant === "purple" ? "text-purple-300 purple-glow" : "text-emerald-400 glow-text"}`}
                      >
                        {item.phase}
                      </h3>
                      <span
                        className={`rounded-full ${item.variant === "purple" ? "bg-purple-800/60 text-purple-300" : "bg-emerald-800/60 text-emerald-300"} px-2 sm:px-3 py-0.5 sm:py-1 text-xs`}
                      >
                        {item.timeline}
                      </span>
                    </div>
                    <ul className="mt-3 md:mt-4 space-y-1.5 sm:space-y-2">
                      {item.milestones.map((milestone, i) => (
                        <li key={i} className="flex items-start">
                          <div
                            className={`mr-2 mt-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${item.variant === "purple" ? "bg-purple-400" : "bg-emerald-400"}`}
                          ></div>
                          <p className="text-gray-300 text-sm md:text-base">{milestone}</p>
                        </li>
                      ))}
                    </ul>
                  </DynamicGlowCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
    )
}
