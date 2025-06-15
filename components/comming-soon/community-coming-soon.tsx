"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Users, Heart, Share2, Linkedin, Send, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ParticleBackground from "@/components/particle-background"
import HexagonGrid from "@/components/hexagon-grid"
import Web3Button from "@/components/web3-button"

const gradientTextStyle = { 
  color: "transparent",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  backgroundImage:
    "linear-gradient(to right, rgba(16, 185, 129, 1), rgba(59, 130, 246, 1), rgba(147, 51, 234, 1), rgba(236, 72, 153, 1))",
  backgroundSize: "300% auto",
}

export default function CommunityComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alreadyOnWaitlist, setAlreadyOnWaitlist] = useState(false);

  // Simulated waitlist for demo purposes
  const [waitlist, setWaitlist] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      if (waitlist.includes(email.trim().toLowerCase())) {
        setAlreadyOnWaitlist(true);
        setIsSubmitted(true);
      } else {
        setWaitlist((prev) => [...prev, email.trim().toLowerCase()]);
        setAlreadyOnWaitlist(false);
        setIsSubmitted(true);
        // Here you would typically send the email to your backend
        console.log("Email submitted:", email);
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative bg-emerald-950">
      {/* Particle and Hexagon Backgrounds */}
      <ParticleBackground />
      <HexagonGrid className="opacity-30" />
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl bg-emerald-500/10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl bg-blue-500/10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl bg-purple-500/10 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl bg-pink-500/10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Coming Soon Text */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mt-16"
            style={gradientTextStyle}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Coming Soon
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Connect with coffee enthusiasts, farmers, and industry experts in our upcoming community forum.
            </p>

            {/* Feature Icons */}
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-400">Community</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-400">Discussions</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-400">Knowledge</span>
              </div>
            </div>
          </motion.div>

          {/* Email Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2 justify-center items-center">
                <Input
                  type="email"
                  placeholder="Please enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 backdrop-blur-sm"
                  required
                />
                <Web3Button type="submit" variant="gradient" size="lg" className="w-full sm:w-auto px-6">
                  Notify Me
                </Web3Button>
              </form>
            ) : alreadyOnWaitlist ? (
              <div className="flex items-center justify-center space-x-2 text-yellow-400">
                <Heart className="w-5 h-5" />
                <span>You are already on the waitlist!</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-emerald-400">
                <Heart className="w-5 h-5" />
                <span>Thank you! We'll notify you when the forum launches.</span>
              </div>
            )}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-gray-400"
          >
            ~~ Notify me when Community Forum is launched ~~
          </motion.p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-center p-4 md:p-6 w-full">
        <div className="flex items-center space-x-4">
          <Link
            href="/linkedin"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
          </Link>
          <Link
            href="/telegram"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Send className="w-5 h-5 text-gray-400 group-hover:text-blue-300 transition-colors duration-300 relative z-10" />
          </Link>
          <Link
            href="/twitter"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 hover:border-gray-400/50 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
          </Link>
        </div>
      </footer>
    </div>
  )
}
