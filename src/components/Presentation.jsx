import React from 'react'
import { motion } from 'framer-motion'

const Presentation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <motion.section
      id="presentation"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Présentation</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-g3mBlue to-g3mGold mx-auto mb-8" />
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-lg">
          <strong className="text-g3mBlue">G3M Consulting</strong> est un cabinet de conseil spécialisé en actuariat,
          mesure et gestion des risques en assurance et réassurance.
          Le cabinet réunit un groupe de professionnels ayant servi dans des compagnies
          d'assurance et de réassurance de réputation régionale et internationale,
          diplômés de grandes écoles d'actuariat européennes et canadiennes.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default Presentation
