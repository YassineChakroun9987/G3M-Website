import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Domaines = () => {
  const [activeTab, setActiveTab] = useState(0)

  const domains = [
    {
      title: 'Actuariat Produit',
      items: [
        'Etude de marché et élaboration d\'un Business Plan',
        'Conception et Tarification de produits',
        'Suivi de sinistralité et assainissement de portefeuille',
        'Analyse de rentabilité et de performance par produit',
        'Optimisation de la segmentation par Centre de Profit',
        'Etablissement et/ou contrôle des procédures de collecte des données',
        'Validation des données et analyse de cohérence',
        'Evaluation, audit et estimation de Provisions Techniques et Mathématiques (Approche déterministe & stochastique)',
        'Etablissement des comptes de résultats',
        'Tests d\'adéquation des réserves',
        'Assistance Actuarielle lors de l\'inventaire (automatisation, reporting, inventaire Annuel/Semestriel/Trimestriel)',
        'Expertise Actuarielle dans le cadre de projets de fusion/acquisition en Assurance Vie, non Vie',
        'Calcul de marge de Solvabilité'
      ]
    },
    {
      title: 'Réassurance/Rétrocession',
      items: [
        'Optimisation de la couverture de Réassurance',
        'Traitement des cumuls des expositions par risque et par événement',
        'Tarification de traités de Réassurance en Excédent de sinistres et des proportionnels',
        'Automatisation de la production des comptes de Réassurance',
        'Calcul des anticipations de comptes (Pipelines)',
        'Paramétrage des Risques CAT'
      ]
    },
    {
      title: 'Gestion des Risques / ERM',
      items: [
        'Evaluation, maîtrise et mesure de l\'impact des risques',
        'Assistance dans l\'élaboration de la cartographie et registre des risques',
        'Identification des risques Majeurs',
        'Evaluation et modélisation des besoins en capital pour chaque module de risques',
        'Conformité réglementaire Solvabilité II',
        'Stress testing et analyse de scénarios'
      ]
    },
    {
      title: 'Autres Services',
      items: [
        'Revue des outils de tarification et de provisionnement',
        'Formations sur tous les domaines d\'expertise actuariels (à la carte, ateliers de travail, séminaires)',
        'Evaluation des engagements en matière d\'indemnités de fin de carrière IAS 19',
        'Expertise actuarielle générale',
        'Conseil stratégique en assurance'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const tabVariants = {
    inactive: { opacity: 0.6, scale: 0.95 },
    active: {
      opacity: 1,
      scale: 1,
      boxShadow: '0 0 0 3px rgba(59, 130, 196, 0.3)'
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 30, rotateY: 90 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
    exit: { 
      opacity: 0, 
      x: -30, 
      rotateY: -90,
      transition: { duration: 0.3 } 
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  }

  return (
    <motion.section
      id="domaines"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Domaines d'Intervention
          </h2>
           <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-g3mBlue via-g3mGold to-g3mBlue mx-auto rounded-full"
          />
          <br />
          <p>L’équipe G3M consulting offre une panoplie de services tant diversifies afin de répondre  aux attentes de ses clients en proposants des solutions adaptées aux nouvelles  exigences  et critères de rentabilité du secteur de l’assurance et de la réassurance.    Les compétences confirmées en techniques Actuarielles, et la connaissance acquise  des aspects   réglementaires et comptables de notre équipe nous permettent d’intervenir sur l’ensemble des domaines suivants :</p>
         
        </motion.div>

        {/* Tabbed Interface */}
        <div className="flex gap-4 mb-12 flex-wrap justify-center">
          {domains.map((domain, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              variants={tabVariants}
              initial={index === 0 ? 'active' : 'inactive'}
              animate={activeTab === index ? 'active' : 'inactive'}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === index
                  ? 'bg-gradient-to-r from-g3mBlue to-blue-600 text-white shadow-lg'
                  : 'bg-white border-2 border-gray-300 text-g3mDark hover:border-g3mBlue'
              }`}
            >
              {domain.title}
            </motion.button>
          ))}
        </div>

        {/* Content Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white p-10 md:p-14 rounded-2xl border-2 border-gray-200 shadow-xl"
          >
            <motion.h3 
              className="text-3xl font-bold mb-8 text-g3mDark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {domains[activeTab].title}
            </motion.h3>
            <ul className="space-y-4">
              {domains[activeTab].items.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-4 group"
                >
                  <motion.span 
                    className="text-g3mBlue font-bold text-2xl mt-0.5 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-700 text-lg group-hover:text-g3mBlue transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Domaines
