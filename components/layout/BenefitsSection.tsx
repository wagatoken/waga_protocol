"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function BenefitsSection() {
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
            duration: 8,
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
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-accent via-emerald-400 to-accent bg-clip-text text-transparent">
              Benefits for Stakeholders
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground text-pretty"
          >
            WAGA Protocol creates value across the entire coffee value chain
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div variants={fadeIn}>
            <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-800/40 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-accent">For Farmers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Access to fair pricing mechanisms and global markets
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Income stability through tokenized futures and decentralized insurance
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Direct loans and financial resources for operational needs
                  </p>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-purple-900">For Processors & Exporters</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-purple-500/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-800" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Liquidity for scaling operations and equipment upgrades
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-purple-500/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-800" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Enhanced traceability for compliance and market access
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-purple-500/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-800" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">Lower transaction fees and instant settlements</p>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-accent">For Consumers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Transparent sourcing with blockchain-verified records
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Ethical consumption through verified sustainable practices
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-emerald-800/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Direct connection to coffee producers through QR code scanning
                  </p>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-purple-800">For Governments & Regulators</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-purple-500/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-800" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Improved foreign currency reserves through transparent exports
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-purple-500/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-800" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">Transparent and efficient market oversight</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-purple-500/90 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-800" />
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Compliance with international trade standards and regulations
                  </p>
                </li>
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
