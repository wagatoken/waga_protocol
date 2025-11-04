"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Coffee, FileCheck, Coins, BarChart3, ShoppingBag, ArrowRight, Users, QrCode } from "lucide-react"
import { useDemoContext } from "@/context/demo-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui-components"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export default function DemoIntroduction() {
  const { goToNextStep } = useDemoContext()

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
       <Card className="mb-6 bg-muted">
        <CardHeader>
          <CardTitle className="text-3xl">
            Welcome to the WAGA Coffee Tokenization & Distribution Workflow Demo
          </CardTitle>
          <CardDescription className="text-base mt-4">
            This interactive demonstration showcases our Phase 1 MVP currently in development. You'll experience how we
            use blockchain technology to transform the coffee supply chain, with a specific focus on retail-grade
            roasted coffee bags, community-driven distribution, and 3PL integration for global fulfillment.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-muted/50 ">
              <CardHeader>
                <CardTitle className="text-lg">What is Coffee Tokenization?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Coffee Tokenization is a blockchain-based approach that brings transparency, traceability, and
                  financial empowerment to the coffee value chain. By tokenizing coffee reserves, we create a more
                  inclusive and sustainable ecosystem for all participants.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 border-muted">
              <CardHeader>
                <CardTitle className="text-lg">Phase 1 MVP Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our initial MVP focuses on retail coffee bags, enabling transparent tracking from producer to
                  consumer. The platform uses ERC-1155 tokens to represent physical coffee batches, with each retail bag
                  including a QR code for authenticity verification and traceability.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">The Coffee Tokenization & Distribution Workflow</h3>
            <motion.div className="space-y-4" variants={containerVariants}>
              <WorkflowStep
                number={1}
                title="Batch Creation"
                description="Coffee producers register retail coffee batches with detailed information about origin, variety, and roast profile."
                icon={<Coffee className="h-6 w-6" />}
              />

              <WorkflowStep
                number={2}
                title="Reserve Verification"
                description="Chainlink oracles verify that the physical coffee reserves match the batch information before tokenization."
                icon={<FileCheck className="h-6 w-6" />}
              />

              <WorkflowStep
                number={3}
                title="Token Minting"
                description="After verification, ERC-1155 tokens are minted to represent the retail coffee bags in the batch."
                icon={<Coins className="h-6 w-6" />}
              />

              <WorkflowStep
                number={4}
                title="Community Distribution"
                description="Community members become distributors by staking tokens, creating a decentralized global distribution network."
                icon={<Users className="h-6 w-6" />}
              />

              <WorkflowStep
                number={5}
                title="Inventory Management"
                description="The platform tracks inventory levels across the distribution network and triggers alerts when needed."
                icon={<BarChart3 className="h-6 w-6" />}
              />

              <WorkflowStep
                number={6}
                title="Token Redemption"
                description="Token holders can redeem their tokens for physical coffee, triggering the 3PL fulfillment process."
                icon={<ShoppingBag className="h-6 w-6" />}
              />

              <WorkflowStep
                number={7}
                title="QR Traceability"
                description="Consumers scan QR codes on coffee bags to verify authenticity and trace the complete journey from farm to cup."
                icon={<QrCode className="h-6 w-6" />}
              />
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button size="lg" onClick={goToNextStep} className="gap-2">
              Start the Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

function WorkflowStep({
  number,
  title,
  description,
  icon,
}: {
  number: number
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <motion.div variants={stepVariants}>
      <Card className="bg-muted border">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            {/* Step Number and Icon */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-semibold text-primary">{number}</span>
              </div>
              <div className="text-primary">{icon}</div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-forground">{title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
