import React from 'react'
import { motion } from 'framer-motion'
import hand from './assets/hand.png'
import reactIcon from './assets/react.svg'
import pythonIcon from './assets/python.png'
import viteIcon from './assets/vite.png'
import vIcon from './assets/v.png'

const Skills = () => {
    const skills = [
        { name: 'React', icon: reactIcon, level: 90 },
        { name: 'Python', icon: pythonIcon, level: 85 },
        { name: 'Vite', icon: viteIcon, level: 80 },
        { name: 'Vue', icon: vIcon, level: 75 },
    ]

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.3
            }
        }
    }

    const itemVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    }

    const positions = [
        { top: '-25%', left: '10%' },
        { top: '-35%', left: '45%' },
        { top: '-20%', left: '72%' },
        { top: '10%', left: '78%' },
    ]

    return (
        <section id='skills' className='min-h-screen flex items-center justify-center bg-gray-900 py-20 relative overflow-hidden'>
            <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
                <div className="theme-gradient-br h-96 w-96 blur-2xl opacity-40 rounded-full"></div>
            </div>

            <motion.div
                variants={containerVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false }}
                className='container mx-auto px-6 relative z-10'
            >
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16">

                  
                    <motion.div
                        variants={itemVariant}
                        className='lg:w-1/2 flex justify-center relative'
                    >
                        <div className="relative w-full max-w-md">
                            <motion.img
                                src={hand}
                                alt="robot hand"
                                className='w-full relative z-10 mt-20'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />

                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className='absolute z-20'
                                    style={positions[index]}
                                    animate={{
                                        y: [0, -12, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.5,
                                        ease: 'easeInOut'
                                    }}
                                >
                                    <motion.div
                                        className='theme-border bg-gray-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg border'
                                        whileHover={{
                                            scale: 1.2,
                                            boxShadow: '0 0 20px rgba(var(--theme-rgb), 0.6)'
                                        }}
                                    >
                                        <img src={skill.icon} alt={skill.name} className='w-16 h-16 object-contain' />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                  
                    <motion.div
                        variants={itemVariant}
                        className='lg:w-1/2 text-white'
                    >
                        <motion.h2
                            variants={itemVariant}
                            className='text-4xl md:text-5xl font-bold mb-6'
                        >
                            <span className='theme-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>My </span>
                            Skills
                        </motion.h2>

                        <motion.p variants={itemVariant} className='text-gray-400 mb-10 text-lg leading-relaxed'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non animi architecto asperiores est iste unde aspernatur tempora minus aliquid reiciendis suscipit dolorum enim, nisi doloremque.
                        </motion.p>

                        <div className='flex flex-col gap-6'>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariant}
                                    className='flex items-center gap-4'
                                >
                                    <img src={skill.icon} alt={skill.name} className='w-8 h-8 object-contain' />
                                    <span className='text-white w-20 text-sm'>{skill.name}</span>
                                    <div className='flex-1 bg-gray-700 rounded-full h-2'>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                            className='theme-gradient bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full'
                                        />
                                    </div>
                                    <span className='text-gray-400 text-sm w-10'>{skill.level}%</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}

export default Skills
