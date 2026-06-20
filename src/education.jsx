import React from 'react'
import {AcademicCapIcon , BookOpenIcon , ChartBarIcon, TrophyIcon} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
const Education = () => {
    const educationdata = [
        {
            id: 1,
            degree: "Lorem ipsum dolor sit",
            insitution: 'Lorem, ipsum dolor.',
            period: '2023-24',
            icon: AcademicCapIcon
        },
        {
            id: 2,
            degree: "Lorem ipsum dolor sit",
            insitution: 'Lorem, ipsum dolor.',
            period: '2025-26',
            icon: BookOpenIcon
        },
        {
            id: 3,
            degree: "Lorem ipsum dolor sit",
            insitution: 'Lorem, ipsum dolor.',
            period: '2026-27',
            icon : ChartBarIcon
        }
    ]


    const certification = [
        {
            name: "Lorem, ipsum ",
            issuer: "sit",
            year: 2023,
            icon: TrophyIcon
        },
        {
            name: "Quasi, debitis",
            issuer: "consectetur",
            year: 2024,
            icon: TrophyIcon
        },
        {
            name: "harum incidunt",
            issuer: "amet",
            year: 2025,
            icon: TrophyIcon
        }
    ]


    const containerVariant = {
        hidden: {opacity:0},
        visible : {
            y:0,
            opacity:1,
            transition : {staggerChildren:0.7}
        }
    }
    const itemVariant = {
        hidden: { y:20 , opacity:0},
        visible : {
            y:0,
            opacity:1,
            transition : {duration:0.5}
        }
    }

    return (
        <div>
           <section id='education' className='min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16'>
            <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
                <div className="h-96 w-96  bg-linear-br from-[#0268b0] to-blue-500 blur-2xl opacity-40 rounded-full "></div>

            </div>
            <motion.div
            variants={containerVariant}
            initial = "hidden"
            whileInView = "visible"
            viewport={{
                once: false , margin: "-50px"
            }}
            className='container mx-auto px-6 relative z-10 max-w-4xl'
            
            
            
            
            
            
            
            
            >

                <motion.div
                variants={itemVariant}
                className='text-center mb-12'

                >
                    <div className='flex justify-center mb-4'
                    >
                        <motion.div
                        animate = {{
                            rotate: [0, -5 , 0]
                        }}

                        transition={{
                            duration:3 , repeat: Infinity
                        }}
                        
                        >
                            <AcademicCapIcon
                            className='w-12 h-12 text-cyan-400'/>

                        </motion.div>

                    </div>

                    <h2>
                        
                    </h2>

                </motion.div>

            </motion.div>

           </section>
        </div>
    )
}

export default Education