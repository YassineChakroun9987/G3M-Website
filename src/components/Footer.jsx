import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="py-6 text-center text-sm text-gray-500 bg-white border-t border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      © G3M Consulting — Tous droits réservés {currentYear}
    </motion.footer>
  )
}

export default Footer
