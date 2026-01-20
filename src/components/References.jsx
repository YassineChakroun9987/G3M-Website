import React from 'react'
import { motion } from 'framer-motion'

const References = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.section
      id="references"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Références</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-g3mBlue to-g3mGold mx-auto" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="mx-auto max-w-4xl bg-gray-50 p-8 rounded-xl border border-gray-200"
        >
          <img 
            src="/refs.png" 
            alt="Références G3M" 
            className="mx-auto w-full object-contain" 
          />
          <p className="mt-6 text-gray-600 text-sm">
            Nos clients incluent des leaders régionaux et internationaux du secteur de l'assurance
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default References
