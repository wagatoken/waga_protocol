"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const roadmapPhases = [
  {
    phase: "Phase 1: Initial Development",
    timeline: "Q1-Q2 2025",
    milestones: [
      "MVP development completion",
      "Utility token (WAGAToken) presale launch",
      "WAGA Academy curriculum development",
    ],
    color: "accent",
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
    color: "purple",
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
    color: "accent",
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
    color: "purple",
  },
]

export default function Roadmap() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-primary">
              Development Roadmap
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our journey to transform the coffee value chain
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-purple-500/50 to-accent/50 hidden md:block" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {roadmapPhases.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`relative md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                }`}
              >
                <div className="roadmap-dot hidden md:block">
                </div>

                <Card
                  className={`p-6 border-2 transition-all hover:scale-[1.02] ${
                    item.color === "purple"
                      ? "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
                      : "border-emerald-500/90 bg-emerald-500/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <h3
                      className={`text-xl md:text-2xl font-bold ${
                        item.color === "purple" ? "text-purple-400" : "text-accent"
                      }`}
                    >
                      {item.phase}
                    </h3>
                    <Badge
                      variant="secondary"
                      className={`${
                        item.color === "purple"
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                          : "bg-emerald-600/20 text-accent border-emerald-500/30 "
                      } border`}
                    >
                      {item.timeline}
                    </Badge>
                  </div>

                  <ul className="space-y-3">
                    {item.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <CheckCircle2
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors ${
                            item.color === "purple"
                              ? "text-purple-400 group-hover:text-purple-300"
                              : "text-accent group-hover:text-emerald-400"
                          }`}
                        />
                        <p className="text-foreground/80 leading-relaxed">{milestone}</p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
