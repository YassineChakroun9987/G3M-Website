import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('YOUR_PUBLIC_KEY_HERE')
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // EmailJS parameters
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      to_email: 'contact@g3mconsulting.com'
    }

    emailjs
      .send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', templateParams)
      .then(
        (response) => {
          setSubmitted(true)
          setFormState({ name: '', email: '', message: '' })
          setTimeout(() => setSubmitted(false), 3000)
        },
        (error) => {
          setError('Erreur lors de l\'envoi. Veuillez réessayer.')
          console.error('EmailJS error:', error)
        }
      )
  }

  return (
    <motion.section
      id="contact"
      className="py-24 bg-gradient-to-br from-g3mDark via-g3mDark to-blue-900 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 196, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(245, 179, 53, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 196, 0.3) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Nous Contacter</h2>
          
          <motion.div variants={itemVariants} className="space-y-8">
            {[
              {
                icon: '📍',
                title: 'Adresse',
                content: 'Access immo, Rue Lac Loch Ness, Tunis'
              },
              {
                icon: '📞',
                title: 'Téléphone',
                content: '+216 36 318 115',
                href: 'tel:+21636318115'
              },
              {
                icon: '✉️',
                title: 'Email',
                content: 'contact@g3mconsulting.com',
                href: 'mailto:contact@g3mconsulting.com'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-14 h-14 bg-g3mGold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-g3mGold/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                </motion.div>
                <div>
                  <p className="font-semibold text-lg mb-2">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} className="text-g3mGold hover:text-g3mGold/80 transition text-base">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-base">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-g3mGold focus:bg-white/15 transition backdrop-blur-sm"
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-g3mGold focus:bg-white/15 transition backdrop-blur-sm"
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formState.message}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-g3mGold focus:bg-white/15 transition backdrop-blur-sm resize-none"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-g3mGold to-yellow-500 text-g3mDark px-6 py-4 rounded-lg font-bold text-lg shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px rgba(245, 179, 53, 0.4)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            {submitted ? '✓ Message envoyé!' : 'Envoyer'}
          </motion.button>
        </motion.form>
      </div>

      {/* Embedded map */}
      <motion.div
        variants={itemVariants}
        className="mt-16 w-full max-w-7xl mx-auto px-6 relative z-10"
      >
        <motion.iframe
          className="w-full h-96 rounded-2xl border-2 border-white/20"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1596.641159384898!2d10.247086411608189!3d36.835714139317176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d36.8357356!2d10.2469764!4m3!3m2!1d36.8357141!2d10.247014!5e0!3m2!1sen!2stn!4v1768912839219!5m2!1sen!2stn"
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
    </motion.section>
  )
}

export default Contact
