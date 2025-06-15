"use client"
import { motion } from "framer-motion"
import { MessageSquare, Users, Share2, Linkedin, Send, Twitter } from "lucide-react"
import Link from "next/link"
import ParticleBackground from "@/components/particle-background"
import HexagonGrid from "@/components/hexagon-grid"

const gradientTextStyle = {
  color: "transparent",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  backgroundImage:
    "linear-gradient(to right, rgba(16, 185, 129, 1), rgba(59, 130, 246, 1), rgba(147, 51, 234, 1), rgba(236, 72, 153, 1))",
  backgroundSize: "300% auto",
}

export default function CommunityComingSoon() {
  // Component state can be added here if needed for future features

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative bg-emerald-950">
      {/* Particle and Hexagon Backgrounds */}
      <ParticleBackground />
      <HexagonGrid className="opacity-30" />

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated blobs - Responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 rounded-full blur-2xl sm:blur-3xl bg-emerald-500/10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 rounded-full blur-2xl sm:blur-3xl bg-blue-500/10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 rounded-full blur-2xl sm:blur-3xl bg-purple-500/10 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 rounded-full blur-2xl sm:blur-3xl bg-pink-500/10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-6 sm:space-y-8 lg:space-y-12"
        >
          {/* Coming Soon Text - More responsive sizing */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight mt-8 sm:mt-12 lg:mt-16 leading-tight"
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
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Connect with coffee enthusiasts, farmers, and industry experts in our upcoming community forum.
            </p>

            {/* Feature Icons - Better responsive layout */}
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

          {/* Social Follow Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Follow Us Text */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">Stay Connected</h2>
              <p className="text-sm sm:text-base text-gray-400">Follow us for updates and behind-the-scenes content</p>
            </div>

            {/* Enhanced Social Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="https://www.linkedin.com/company/waga-token-official/?viewAsMember=true"
                className="group relative flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Follow on LinkedIn</span>
                </div>
              </Link>

              <Link
                href="https://t.me/wagatoken"
                className="group relative flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <Send className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Join Telegram</span>
                </div>
              </Link>

              <Link
                href="https://x.com/Wagatoken"
                className="group relative flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <Twitter className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Follow on X</span>
                </div>
              </Link>
            </div>

            {/* Development Progress */}
            <div className="max-w-md mx-auto"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs sm:text-sm text-gray-400 px-4"
          >
            ~~ Building something amazing for the coffee community ~~
          </motion.p>
        </motion.div>
      </main>

      {/* Footer - Better responsive spacing */}
    </div>
  )
}
