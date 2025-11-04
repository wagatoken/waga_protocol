"use client"
import { motion } from "framer-motion"
import { Database, Cpu } from "lucide-react"
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

export default function TechnologiesSection() {
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
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">
              Technology Stack
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Powered by cutting-edge blockchain and IoT technologies
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn}>
            <DynamicGlowCard variant="emerald" className="h-full p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-accent/20 blur-sm" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-emerald-500 shadow-lg">
                    <Database className="h-5 w-5 text-background" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Blockchain Infrastructure</h3>
              </div>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our platform is built on a zkRollup architecture, providing the perfect balance between transparency and
                privacy while ensuring high throughput and low transaction costs.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-accent/20 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-background/60">
                  <h4 className="mb-2 font-semibold text-accent">ERC-1155 Token Standard</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enables efficient batch tokenization of coffee with shared metadata and lower gas costs.
                  </p>
                </div>
                <div className="rounded-xl border border-accent/20 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-background/60">
                  <h4 className="mb-2 font-semibold text-accent">Smart Contracts</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Automate key processes like tokenization, collateralization, and insurance payouts.
                  </p>
                </div>
                <div className="rounded-xl border border-accent/20 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-background/60">
                  <h4 className="mb-2 font-semibold text-accent">IPFS Metadata Storage</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Decentralized storage for coffee batch data, ensuring immutability and accessibility.
                  </p>
                </div>
              </div>
            </DynamicGlowCard>
          </motion.div>

          <motion.div variants={fadeIn}>
            <DynamicGlowCard variant="purple" className="h-full p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-purple-500/20 blur-sm" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
                    <Cpu className="h-5 w-5 text-background" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">IoT & Oracle Integration</h3>
              </div>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                Real-world data is securely brought on-chain through IoT devices and Chainlink oracles, ensuring
                accurate verification of coffee reserves and conditions.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-purple-500/20 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-background/60">
                  <h4 className="mb-2 font-semibold text-purple-400">Proof of Reserve (PoR)</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Chainlink Functions verify that physical coffee reserves match tokenized representations.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-500/20 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-background/60">
                  <h4 className="mb-2 font-semibold text-purple-400">Quality Monitoring</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    IoT sensors track parameters like temperature and humidity to ensure coffee quality.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-500/20 bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-background/60">
                  <h4 className="mb-2 font-semibold text-purple-400">Price Feeds</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Real-time coffee market prices are brought on-chain for accurate valuation and trading.
                  </p>
                </div>
              </div>
            </DynamicGlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
