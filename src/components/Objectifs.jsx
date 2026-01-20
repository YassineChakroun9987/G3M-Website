import React from 'react'
import { motion } from 'framer-motion'

const Objectifs = () => {
  const objectives = [
    {
      title: 'Expertise actuarielle',
      description: 'Proposer aux compagnies une équipe d\'actuaires consultants pragmatiques et pédagogues.',
      icon: '📊'
    },
    {
      title: 'Analyse des risques',
      description: 'Garantir un haut niveau d\'expertise dans l\'analyse et la maîtrise des risques.',
      icon: '🎯'
    },
    {
      title: 'Accompagnement global',
      description: 'Fournir une gamme complète de services pour accompagner les besoins des clients.',
      icon: '🤝'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    hover: {
      y: -12,
      boxShadow: '0 25px 50px rgba(59, 130, 196, 0.2)',
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.section
      id="objectifs"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Objectifs</h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-g3mBlue via-g3mGold to-g3mBlue mx-auto rounded-full"
            layoutId="divider"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative p-8 rounded-2xl bg-white border border-gray-200 cursor-pointer group overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-g3mBlue/5 to-g3mGold/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              {/* Icon with animation */}
              <motion.div
                className="relative w-16 h-16 bg-gradient-to-br from-g3mBlue/20 to-g3mGold/20 rounded-xl mb-6 flex items-center justify-center text-3xl"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 10,
                  background: 'linear-gradient(to bottom right, rgba(59, 130, 196, 0.3), rgba(245, 179, 53, 0.3))'
                }}
              >
                {obj.icon}
              </motion.div>

              <h3 className="relative font-bold text-xl mb-3 text-g3mDark group-hover:text-g3mBlue transition-colors">
                {obj.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {obj.description}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-g3mBlue to-g3mGold w-0 group-hover:w-full"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Objectifs
