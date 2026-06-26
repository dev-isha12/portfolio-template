import { useState } from 'react'
import { motion } from 'framer-motion'
import { BoltIcon, CodeBracketSquareIcon, CursorArrowRaysIcon, SparklesIcon } from '@heroicons/react/24/outline'
import reactIcon from './assets/react.svg'
import pythonIcon from './assets/python.png'
import viteIcon from './assets/vite.png'
import vIcon from './assets/v.png'

const skills = [
    { name: 'React', icon: reactIcon, level: 90, label: 'Interfaces', detail: 'Components, hooks, UI flows', accent: 'from-sky-400 to-cyan-500' },
    { name: 'Python', icon: pythonIcon, level: 85, label: 'Logic', detail: 'Problem solving and scripting', accent: 'from-yellow-400 to-blue-500' },
    { name: 'Vite', icon: viteIcon, level: 80, label: 'Tooling', detail: 'Fast builds and dev workflow', accent: 'from-violet-500 to-amber-400' },
    { name: 'Vue', icon: vIcon, level: 75, label: 'Frontend', detail: 'Reactive UI foundations', accent: 'from-emerald-400 to-teal-500' }
]

const highlights = [
    { icon: CodeBracketSquareIcon, title: 'Clean code', text: 'Simple structure, readable components.' },
    { icon: CursorArrowRaysIcon, title: 'Smooth UI', text: 'Hover states, motion, and responsive details.' },
    { icon: BoltIcon, title: 'Fast builds', text: 'Performance-focused frontend setup.' }
]

const SkillCard = ({ skill, itemVariant, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.article
            variants={itemVariant}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className='theme-border group relative min-h-64 overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white p-5 shadow-[0_20px_55px_rgba(17,24,39,0.08)]'
        >
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${skill.accent}`} />
            <div className='theme-bg-soft absolute -right-14 -top-14 h-36 w-36 rounded-full transition-transform duration-500 group-hover:scale-125' />
            <div className='absolute right-5 top-5 text-5xl font-semibold text-gray-100 select-none'>
                0{index + 1}
            </div>

            <div className='relative z-10 flex h-full flex-col justify-between'>
                <div className='flex items-start justify-between gap-4'>
                    <motion.div
                        animate={{ rotate: isHovered ? [0, -7, 7, 0] : 0, scale: isHovered ? 1.08 : 1 }}
                        transition={{ duration: 0.45 }}
                        className='theme-bg-soft theme-border flex h-16 w-16 items-center justify-center rounded-3xl border'
                    >
                        <img src={skill.icon} alt={skill.name} className='h-10 w-10 object-contain' />
                    </motion.div>

                    <div className='relative h-16 w-16'>
                        <svg className='h-full w-full -rotate-90' viewBox='0 0 100 100'>
                            <circle cx='50' cy='50' r='42' stroke='rgba(17,24,39,0.08)' strokeWidth='8' fill='none' />
                            <motion.circle
                                cx='50'
                                cy='50'
                                r='42'
                                stroke='var(--theme-primary)'
                                strokeWidth='8'
                                strokeLinecap='round'
                                fill='none'
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: skill.level / 100 }}
                                animate={{ pathLength: isHovered ? 1 : skill.level / 100 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.9, ease: 'easeOut' }}
                            />
                        </svg>
                        <span className='theme-text absolute inset-0 flex items-center justify-center text-sm font-bold'>
                            {skill.level}%
                        </span>
                    </div>
                </div>

                <div className='mt-8'>
                    <p className='theme-text text-xs font-bold uppercase tracking-[0.28em]'>{skill.label}</p>
                    <h3 className='mt-2 text-2xl font-medium text-gray-900'>{skill.name}</h3>
                    <p className='mt-2 text-sm leading-relaxed text-gray-500'>{skill.detail}</p>
                </div>
            </div>
        </motion.article>
    )
}

const Skills = () => {
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    }

    const itemVariant = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.55,
                ease: 'easeOut'
            }
        }
    }

    return (
        <section id='skills' className='min-h-screen flex items-center justify-center bg-white py-20 relative overflow-hidden'>
            <div className='theme-bg-soft absolute -left-28 top-24 h-72 w-72 rounded-full blur-3xl opacity-70' />
            <div className='theme-bg-soft absolute right-0 bottom-10 h-56 w-56 rounded-full blur-3xl opacity-50' />

            <motion.div
                variants={containerVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, margin: '-50px' }}
                className='container mx-auto px-6 relative z-10 max-w-6xl'
            >
                <div className='grid lg:grid-cols-[0.9fr_1.1fr] items-center gap-10 lg:gap-14'>
                    <div className='text-gray-900'>
                        <motion.div variants={itemVariant} className='theme-bg-soft theme-border mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2'>
                            <SparklesIcon className='theme-text h-4 w-4' />
                            <span className='theme-text text-sm font-semibold'>Skill stack</span>
                        </motion.div>

                        <motion.h2 variants={itemVariant} className='text-4xl md:text-6xl font-light leading-tight'>
                            Tools I use to make ideas <span className='theme-heading text-transparent bg-clip-text'>feel real</span>
                        </motion.h2>

                        <motion.p variants={itemVariant} className='mt-6 text-gray-600 text-lg leading-relaxed'>
                            I focus on clean frontend foundations, thoughtful interactions, and code that is easy to keep improving.
                        </motion.p>

                        <motion.div variants={itemVariant} className='mt-8 grid gap-3'>
                            {highlights.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.title} className='theme-border flex items-center gap-4 rounded-2xl border border-gray-200/70 bg-white/85 p-4 shadow-[0_12px_35px_rgba(17,24,39,0.05)]'>
                                        <span className='theme-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl'>
                                            <Icon className='h-5 w-5 text-white' />
                                        </span>
                                        <div>
                                            <h3 className='font-medium text-gray-900'>{item.title}</h3>
                                            <p className='text-sm text-gray-500'>{item.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-5'>
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                                itemVariant={itemVariant}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Skills
