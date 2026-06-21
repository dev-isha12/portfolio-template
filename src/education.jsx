import React from 'react'
import { AcademicCapIcon, BookOpenIcon, BuildingLibraryIcon, ChartBarIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const Education = () => {
    const educationdata = [
        { id: 1, degree: "Lorem ipsum dolor sit", insitution: 'Lorem, ipsum dolor.', period: '2023-24', icon: AcademicCapIcon },
        { id: 2, degree: "Lorem ipsum dolor sit", insitution: 'Lorem, ipsum dolor.', period: '2025-26', icon: BookOpenIcon },
        { id: 3, degree: "Lorem ipsum dolor sit", insitution: 'Lorem, ipsum dolor.', period: '2026-27', icon: ChartBarIcon }
    ]

    const certification = [
        { name: "Lorem, ipsum", issuer: "sit", year: 2023, icon: TrophyIcon },
        { name: "Quasi, debitis", issuer: "consectetur", year: 2024, icon: TrophyIcon },
        { name: "harum incidunt", issuer: "amet", year: 2025, icon: TrophyIcon }
    ]

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.7 }
        }
    }

    const itemVariant = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    return (
        <div>
            <section id='education' className='min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16'>

                <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
                    <div className="theme-gradient-br h-96 w-96 blur-2xl opacity-40 rounded-full"></div>
                </div>

                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    className='container mx-auto px-6 relative z-10 max-w-5xl'
                >
                 
                    <motion.div variants={itemVariant} className='text-center mb-12'>
                        <div className='flex justify-center mb-4'>
                            <motion.div
                                animate={{ rotate: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <AcademicCapIcon className='theme-text w-12 h-12 text-cyan-400' />
                            </motion.div>
                        </div>
                        <h2 className='text-4xl font-bold text-white mb-4'>
                            <span className='theme-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                                Education
                            </span>
                        </h2>
                        <p className='text-gray-300 text-lg'>
                            My learning journey and certifications
                        </p>
                    </motion.div>

                   
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                       
                        <motion.div variants={containerVariant}>
                            <h3 className='theme-text text-2xl font-bold text-cyan-300 mb-6 text-center flex items-center justify-center gap-2'>
                                <BookOpenIcon className='w-6 h-6' />
                                Education
                            </h3>
                            <div className="space-y-4">
                                {educationdata.map((edu, index) => {
                                    const IconComponent = edu.icon
                                    return (
                                        <motion.div key={edu.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            viewport={{ once: false }}
                                            whileHover={{ scale: 1.02 }}
                                            className='theme-border theme-hover bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border transition-all duration-300 group'
                                        >
                                            <div className='flex items-center space-x-3'>
                                                <motion.div
                                                    className='theme-gradient p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300'
                                                    whileHover={{ rotate: 5 }}
                                                >
                                                    <IconComponent className='w-5 h-5 text-white' />
                                                </motion.div>
                                                <div className='flex-1'>
                                                    <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                                                    <p className='theme-text text-cyan-300 text-sm'>{edu.insitution}</p>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <ClockIcon className='w-3 h-3 text-gray-400' />
                                                        <span className='text-gray-400 px-2 py-1 rounded'>{edu.period}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>

                       
                        <motion.div variants={itemVariant}>
                            <h3 className='theme-text text-2xl font-bold text-cyan-300 mb-6 text-center flex items-center justify-center gap-2'>
                                <TrophyIcon className='w-6 h-6' />
                                Certifications
                            </h3>
                            <div className="space-y-4">
                                {certification.map((cert, index) => {
                                    const IconComponent = cert.icon;
                                    return (
                                        <motion.div key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: false }}
                                            whileHover={{ scale: 1.02 }}
                                            className='theme-border theme-hover bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border transition-all duration-300 group'
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <motion.div
                                                        className='theme-gradient p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300'
                                                        whileHover={{ rotate: 5 }}
                                                    >
                                                        <IconComponent className='w-5 h-5 text-white' />
                                                    </motion.div>
                                                    <div>
                                                        <h4 className='text-white font-semibold text-sm'>{cert.name}</h4>
                                                        <p className='theme-text text-cyan-300 text-xs'>{cert.issuer}</p>
                                                    </div>
                                                </div>
                                                <span className='text-gray-400 text-xs bg-gray-700/50 px-2 py-1 rounded'>
                                                    {cert.year}
                                                </span>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: false }}
                                className='theme-bg-soft theme-border mt-6 p-4 rounded-xl border text-center'
                            >
                                <div className='flex items-center justify-center gap-2'>
                                    <BuildingLibraryIcon className='theme-text w-5 h-5 text-cyan-400' />
                                    <p className='theme-text text-cyan-300 text-sm'>Always learning and growing</p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </motion.div>

            </section>
        </div>
    )
}

export default Education
