import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profile from './assets/profile.png'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ['Web Developer', 'UI/UX Designer']
  const currentText = texts[currentIndex]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => {
          setIsDeleting(true)
        }, 1000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      } else {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        )
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex])

  const scrollToSmooth = () => {
    const element = document.getElementById('skills')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  }

  const itemVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id='home' className='min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-64 left-96 w-80 h-80 bg-blue-500/20 rounded-full blur-xl"></div>
      </div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className='container mx-auto px-6 text-center relative z-10'>

       
        <motion.div variants={itemVariant} className='mb-8'>
          <motion.div whileHover={{ scale: 1.05 }} className='w-56 h-56 mx-auto'>
            <img src={profile} alt=""
              className='w-full h-full object-cover rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300' />
          </motion.div>
        </motion.div>

       
        <motion.h1 variants={itemVariant}
          className='text-5xl md:text-7xl font-bold text-white mb-6'>
          Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>Devisha</span>
        </motion.h1>

      
        <motion.div variants={itemVariant} className='h-16 mb-6 mt-8'>
          <motion.h2 className='text-3xl md:text-4xl text-gray-200 font-light'>
            I'm a {' '}
            <span className='text-cyan-300 border-r-2 border-cyan-300'>
              {displayText}
            </span>
          </motion.h2>
        </motion.div>

        
        <motion.p variants={itemVariant}
          className='text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, provident praesentium expedita, sint quaerat neque maiores debitis odit ipsa, fugiat nobis architecto omnis quia dolore aut deleniti excepturi recusandae enim!
        </motion.p>

       
        <motion.div variants={itemVariant}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <motion.button
            onClick={scrollToSmooth}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'>
            View My Work
          </motion.button>

          
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero