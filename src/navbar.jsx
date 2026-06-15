import React, { useState, useEffect } from 'react'
import { HomeIcon, FolderIcon, LanguageIcon, EnvelopeIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isHovered, setIsHovered] = useState(false)

  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'skills', icon: BriefcaseIcon, label: 'Skills' },
    { id: 'education', icon: AcademicCapIcon, label: 'Education' },
    { id: 'work', icon: FolderIcon, label: 'Work' },
    { id: 'langauge', icon: LanguageIcon, label: 'Language' },
    { id: 'contact', icon: EnvelopeIcon, label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPos = window.scrollY + 100

      sections.forEach(section => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='fixed left-4 lg:left-20 top-1/2 -translate-y-1/2 z-50 hidden lg:block'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            boxShadow: isHovered
              ? '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(6, 182, 212, 0.4), 0 0 60px rgba(59, 130, 246, 0.3)'
              : '0 0 30px rgba(59, 130, 246, 0.4), 0 0 50px rgba(6, 182, 212, 0.2)'
          }}
          transition={{ duration: 0.4 }}
          className="bg-gray-800/90 backdrop-blur-xl rounded-full p-3 lg:p-4 border border-blue-500/20 relative"
        >
          <motion.div
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/20 blur-lg -z-10'
          />

          <div className='flex flex-col space-y-3 lg:space-y-4'>
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group p-2 lg:p-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/60'
                  }`}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className='w-5 h-5 lg:w-6 lg:h-6 relative z-10' />

                  {activeSection === item.id && (
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(59, 130, 246, 0.8)',
                          '0 0 20px rgba(59, 130, 246, 0.6)',
                          '0 0 10px rgba(59, 130, 246, 0.8)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='absolute inset-0 rounded-full bg-blue-500/30'
                    />
                  )}

                  <div className="absolute left-full ml-3 px-2 py-1 lg:px-3 lg:py-2 bg-gray-900/95 text-white text-xs lg:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-700 shadow-xl">
                    {item.label}
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                  </div>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Navbar