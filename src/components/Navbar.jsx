import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white/80 backdrop-blur'
      } border-b border-gray-100`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <img src="../../public/logo.png" alt="G3M Consulting" className="h-10" />
        </motion.div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {['Présentation', 'Objectifs', 'Expertises', 'Références', 'Contact'].map(
            (item) => {
              const idMap = {
                'Présentation': 'presentation',
                'Objectifs': 'objectifs',
                'Expertises': 'domaines',
                'Références': 'references',
                'Contact': 'contact'
              }
              return (
                <motion.a
                  key={item}
                  href={`#${idMap[item]}`}
                  className={`relative group ${
                    item === 'Contact' ? 'text-g3mBlue font-semibold' : ''
                  }`}
                  whileHover={{ color: '#3B82C4' }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-g3mBlue group-hover:w-full transition-all duration-300" />
                </motion.a>
              )
            }
          )}
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar
