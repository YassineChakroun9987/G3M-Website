import React from 'react'
import { motion } from 'framer-motion'
import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.4,
      transition: { duration: 2.5, ease: 'easeInOut' }
    }
  }

  return (
    <section className="pt-32 pb-32 bg-gradient-to-br from-g3mBlue/8 via-white to-white relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82C4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F5B335" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3B82C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5B335" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3B82C4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F5B335" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82C4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F5B335" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 0 250 Q 150 100 300 200 T 600 180 T 900 220 T 1200 150"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M 0 400 Q 200 300 400 350 T 800 380 T 1200 320"
          stroke="url(#gradient2)"
          strokeWidth="2.5"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        />
        <motion.path
          d="M 0 550 Q 150 480 350 520 T 750 500 T 1200 540"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              Société de Conseil<br />
              en{' '}
              <span className="bg-gradient-to-r from-g3mBlue via-g3mGold to-g3mBlue bg-clip-text text-transparent animate-pulse">
                Actuariat
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed font-medium"
            >
              Mesurer vos risques.<br />Minimiser leurs impacts.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#domaines"
                className="bg-gradient-to-r from-g3mBlue to-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir nos expertises
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 border-g3mBlue text-g3mBlue px-8 py-4 rounded-lg font-semibold bg-white/40 backdrop-blur-sm"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Nous contacter
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT ANIMATION BOX */}
          <motion.div
            className="hidden md:block relative h-96 group"
            style={{ perspective: '1200px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front: Lottie */}
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-g3mBlue/20 to-g3mGold/10 [backface-visibility:hidden]">
                <DotLottiePlayer
                  src="/marketinganalytics.lottie"
                  autoplay
                  loop
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              {/* Back: Big logo + name */}
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-g3mBlue to-blue-900 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="h-full w-full flex flex-col items-center justify-center gap-6 p-10">
                  <img src="/logo.png" alt="G3M Consulting" className="h-28 w-auto drop-shadow-xl" />
                  <div className="text-center">
                    <div className="text-3xl font-bold tracking-wide">G3M Consulting</div>
                    <div className="mt-2 text-sm uppercase tracking-[0.3em] text-white/70">
                      Actuariat • Conseil
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
