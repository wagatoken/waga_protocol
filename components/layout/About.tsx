"use client"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Package } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">

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
          className="absolute top-1/4 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/50 border border-emerald-800/10 mb-6">
            <Sparkles className="w-4 h-4 " />
            <span className="text-sm font-medium text-foreground">Our Mission</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary ">
              About WAGA Protocol
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Revolutionizing the coffee industry with a two-phase approach to blockchain integration
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* Vision Section */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</h3>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  WAGA Protocol envisions a future where smallholder farmers, cooperatives, roasters, and consumers
                  operate in a more inclusive, transparent, and sustainable coffee value chain.
                </p>
                <p>
                  By leveraging blockchain and DeFi technologies, we aim to create an ecosystem where all participants
                  thrive while contributing to the growth of a global, sustainable coffee industry.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="group border-2 border-foreground/20 hover:border-accent hover:bg-accent/5 transition-all bg-transparent"
              asChild
            >
              <Link href="#features">
                Learn more about our approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Two-Phase MVP Card */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-background to-purple-500/5 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 rounded-full bg-purple-500/20 blur-md" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Two-Phase MVP Deployment</h3>
                  <p className="text-sm text-muted-foreground">Strategic rollout for maximum impact</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="group rounded-xl border border-accent/30 bg-background/50 p-5 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent/5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-accent font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                        Retail Coffee Traceability
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A consumer-facing traceability solution for roasted coffee bags with QR code scanning and
                        blockchain verification.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl border border-purple-500/30 bg-background/50 p-5 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-accent font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                        Wholesale Export Tokenization
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A blockchain-based trade finance system for bulk coffee exports with DeFi integration and
                        tokenized assets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Launching Q2 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
