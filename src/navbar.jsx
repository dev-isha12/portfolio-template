import { useEffect, useRef, useState } from 'react'
import { HomeIcon, FolderIcon, LanguageIcon, EnvelopeIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', icon: HomeIcon, label: 'Home' },
  { id: 'skills', icon: BriefcaseIcon, label: 'Skills' },
  { id: 'education', icon: AcademicCapIcon, label: 'Education' },
  { id: 'work', icon: FolderIcon, label: 'Work' },
  { id: 'language', icon: LanguageIcon, label: 'Language' },
  { id: 'contact', icon: EnvelopeIcon, label: 'Contact' }
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isHovered, setIsHovered] = useState(false)
  const navigationTarget = useRef(null)

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPos = window.scrollY + window.innerHeight * 0.35

      sections.forEach(section => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id)
        }
      })
    }

    const handleScroll = () => {
      if (navigationTarget.current) {
        const target = document.getElementById(navigationTarget.current)
        const reachedTarget = target && Math.abs(target.getBoundingClientRect().top) < 3
        const reachedPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3

        if (reachedTarget || reachedPageEnd) {
          navigationTarget.current = null
        } else {
          return
        }
      }

      updateActiveSection()
    }

    const cancelNavigationLock = () => {
      navigationTarget.current = null
      updateActiveSection()
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', cancelNavigationLock, { passive: true })
    window.addEventListener('touchstart', cancelNavigationLock, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', cancelNavigationLock)
      window.removeEventListener('touchstart', cancelNavigationLock)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)

    if (element) {
      navigationTarget.current = sectionId
      setActiveSection(sectionId)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='fixed left-4 lg:left-20 top-[58%] -translate-y-1/2 z-50 hidden lg:block'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            boxShadow: isHovered
              ? '0 0 20px rgba(var(--theme-rgb), 0.6), 0 0 45px rgba(var(--theme-rgb), 0.35)'
              : '0 0 30px rgba(var(--theme-rgb), 0.4)'
          }}
          transition={{ duration: 0.4 }}
          className="theme-border bg-gray-800/90 backdrop-blur-xl rounded-full p-3 lg:p-4 border relative"
        >
          <motion.div
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.3 }}
            className='theme-bg-glow absolute inset-0 rounded-full blur-lg -z-10'
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
                      ? 'theme-gradient theme-shadow text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/60'
                  }`}
                  whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.92 }}
                >
                  <IconComponent className='w-5 h-5 lg:w-6 lg:h-6 relative z-10' />

                  {activeSection === item.id && (
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(var(--theme-rgb), 0.8)',
                          '0 0 20px rgba(var(--theme-rgb), 0.6)',
                          '0 0 10px rgba(var(--theme-rgb), 0.8)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className='theme-bg-glow absolute inset-0 rounded-full'
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
