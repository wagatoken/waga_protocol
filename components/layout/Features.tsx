"use client"

import { motion } from "framer-motion"
import { Coffee, Shield, BarChart3, Leaf, Globe, Zap } from "lucide-react"

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

export default function FeaturesSection() {
  const features = [
    {
      icon: Coffee,
      title: "Tokenized Coffee Reserves",
      description: "Digitize coffee into traceable and tradable ERC-1155 tokens secured by real-world coffee batches.",
      accentColor: "bg-primary",
    },
    {
      icon: Shield,
      title: "Transparency & Traceability",
      description: "Track coffee batches from farm to cup, verifying ethical, quality, and sustainability parameters.",
      accentColor: "bg-accent",
    },
    {
      icon: BarChart3,
      title: "DeFi Integration",
      description: "Access community-funded liquidity pools and tokenized collateral for loans and trade finance.",
      accentColor: "bg-primary",
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Incentivize and reward sustainable farming practices through transparent verification.",
      accentColor: "bg-accent",
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Connect farmers directly with buyers worldwide through our decentralized marketplace.",
      accentColor: "bg-primary",
    },
    {
      icon: Zap,
      title: "WAGAToken Utility",
      description: "Access platform services, lower transaction costs, and earn rewards through our native token.",
      accentColor: "bg-accent",
    },
  ]

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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
          className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-primary">Key Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed"
          >
            Our platform combines blockchain technology with real-world coffee value chain solutions
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={fadeIn}>
                <div className="group relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-6">
                    <div className="relative inline-flex">
                      <div
                        className={`absolute inset-0 rounded-xl ${feature.accentColor}/20 opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}
                      />
                      <div
                        className={`relative flex h-14 w-14 items-center justify-center rounded-xl ${feature.accentColor} shadow-lg`}
                      >
                        <Icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
