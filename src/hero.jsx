import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profile from './assets/profile.png'

const texts = ['Web Developer', 'UI/UX Designer']

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
  }, [displayText, isDeleting, currentIndex, currentText])


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const playProfileSound = () => {
    const audio = new Audio('/click-sound.mp4')
    audio.volume = 0.8

    const stopAudio = () => {
      audio.pause()
      audio.removeEventListener('timeupdate', checkTime)
    }

    const checkTime = () => {
      if (audio.currentTime >= 22) {
        stopAudio()
      }
    }

    audio.addEventListener('timeupdate', checkTime)

    const startPlayback = () => {
      audio.currentTime = 19
      audio.play().then(() => {
        // 3000ms is exactly 3 seconds (from 19s to 22s)
        setTimeout(stopAudio, 3000)
      }).catch(err => {
        console.warn("Audio playback failed or was blocked by browser autoplay policy:", err)
      })
    }

    if (audio.readyState >= 1) {
      startPlayback()
    } else {
      audio.addEventListener('loadedmetadata', startPlayback, { once: true })
    }
  }

  const handleProfileClick = () => {
    playProfileSound()
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
    <section id='home' className='min-h-screen flex items-center justify-center bg-white relative overflow-hidden'>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className='container mx-auto px-6 text-center relative z-10'>

       
        <motion.div variants={itemVariant} className='mb-8 h-56 relative z-25 flex justify-center items-center'>
          {!isScrolled && (
            <div className="relative">
              {/* "Play me!" Arrow Indicator */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -6, 0]
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "easeInOut"
                  },
                  duration: 0.5,
                  delay: 0.8
                }}
                className="absolute -left-36 top-8 hidden md:flex items-center space-x-1 rotate-[-15deg] pointer-events-none select-none theme-text"
              >
                <span className="font-sketch text-2xl font-normal tracking-wide">
                  play me!
                </span>
                <svg className="w-14 h-10 opacity-80" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
                  {/* Smooth curved hand-drawn arrow pointing down-right */}
                  <path d="M10,38 Q48,12 85,26" />
                  <path d="M85,26 L72,21" />
                  <path d="M85,26 L76,38" />
                </svg>
              </motion.div>

              <motion.div
                layoutId="profile-avatar"
                whileHover={{ scale: 1.05 }}
                onClick={handleProfileClick}
                className='theme-shadow w-56 h-56 mx-auto cursor-pointer rounded-full'
              >
                <img src={profile} alt="Devisha"
                  className='w-full h-full object-cover rounded-full transition-all duration-300' />
              </motion.div>
            </div>
          )}
        </motion.div>

       
        <motion.h1 variants={itemVariant}
          className='text-5xl md:text-7xl font-light text-gray-900 mb-6'>
          Hi, I'm <span className='font-sketch theme-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-650 to-indigo-650'>Devisha</span>
        </motion.h1>

      
        <motion.div variants={itemVariant} className='h-16 mb-6 mt-8'>
          <motion.h2 className='text-xl md:text-2xl text-gray-700 font-light'>
            I'm a {' '}
            <span className='theme-text theme-border border-r-2'>
              {displayText}
            </span>
          </motion.h2>
        </motion.div>

        
        <motion.p variants={itemVariant}
          className='text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light'>
          I design clean user interfaces and write simple, structured code. I love crafting minimal, high-performance web products that feel alive.
        </motion.p>

        {isScrolled && (
          <motion.div
            layoutId="profile-avatar"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='fixed top-5 right-6 z-[60] w-14 h-14 cursor-pointer rounded-full border-2 border-white shadow-md'
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          >
            <img src={profile} alt="Devisha"
              className='w-full h-full object-cover rounded-full' />
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Hero
