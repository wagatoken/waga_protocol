"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

export default function Hero(){

    const router = useRouter();

    return(
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent leading-tight"
        >
          WAGA Protocol
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Empowering Ethiopian Coffee Cooperatives through Blockchain, DeFi, and Smart Contracts.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button 
            onClick={() => router.push('/explore')}
            className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
            Explore Platform
          </Button>
          <Button 
            onClick={() => router.push('/token-pre-sale')}
            className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-500/20 transition flex items-center gap-2">
            Token Pre-Sale <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </section>
    )
}