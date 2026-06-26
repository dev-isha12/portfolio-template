import {
    AcademicCapIcon,
    BookOpenIcon,
    BuildingLibraryIcon,
    CalendarDaysIcon,
    CheckBadgeIcon,
    SparklesIcon,
    TrophyIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const educationData = [
    {
        id: 1,
        degree: 'Lorem ipsum dolor sit',
        institution: 'Lorem, ipsum dolor.',
        period: '2023 — 2024',
        focus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: AcademicCapIcon
    },
    {
        id: 2,
        degree: 'Consectetur adipiscing elit',
        institution: 'Sed do eiusmod.',
        period: '2025 — 2026',
        focus: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
        icon: BookOpenIcon
    },
    {
        id: 3,
        degree: 'Tempor incididunt ut labore',
        institution: 'Ut enim minim.',
        period: '2026 — 2027',
        focus: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        icon: SparklesIcon
    }
]

const certifications = [
    { name: 'Lorem, ipsum', issuer: 'Dolor sit', year: 2023 },
    { name: 'Quasi, debitis', issuer: 'Consectetur', year: 2024 },
    { name: 'Harum incidunt', issuer: 'Amet elit', year: 2025 }
]

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.14 }
    }
}

const itemVariant = {
    hidden: { y: 28, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: 'easeOut' }
    }
}

const Education = () => {
    return (
        <section id='education' className='min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20'>
            <div className='theme-bg-soft absolute -top-28 -right-28 h-72 w-72 rounded-full blur-3xl opacity-70' />
            <div className='theme-bg-soft absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl opacity-60' />

            <motion.div
                variants={containerVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, margin: '-50px' }}
                className='container mx-auto px-6 relative z-10 max-w-6xl'
            >
                <motion.div variants={itemVariant} className='text-center mb-12'>
                    <motion.div
                        animate={{ y: [0, -6, 0], rotate: [0, -4, 4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className='theme-bg-soft theme-border mx-auto mb-5 w-16 h-16 rounded-3xl border flex items-center justify-center'
                    >
                        <AcademicCapIcon className='theme-text w-9 h-9' />
                    </motion.div>

                    <p className='theme-text font-sketch text-3xl mb-1'>learning timeline</p>
                    <h2 className='text-4xl md:text-6xl font-light text-gray-900'>
                        Education & <span className='theme-heading text-transparent bg-clip-text'>Growth</span>
                    </h2>
                    <p className='text-gray-600 text-lg mt-4 max-w-2xl mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </motion.div>

                <div className='grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start'>
                    <motion.div variants={itemVariant} className='relative'>
                        <div className='absolute left-6 top-8 bottom-8 w-px theme-gradient opacity-30 hidden sm:block' />

                        <div className='space-y-5'>
                            {educationData.map((edu, index) => {
                                const Icon = edu.icon
                                return (
                                    <motion.article
                                        key={edu.id}
                                        initial={{ opacity: 0, x: -28 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                                        whileHover={{ y: -5, scale: 1.01 }}
                                        className='group relative sm:pl-16'
                                    >
                                        <div className='theme-gradient absolute left-0 top-6 hidden sm:flex h-12 w-12 rounded-2xl items-center justify-center shadow-lg shadow-black/10 group-hover:rotate-6 transition-transform'>
                                            <Icon className='w-6 h-6 text-white' />
                                        </div>

                                        <div className='theme-border bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200/80 p-6 shadow-[0_18px_50px_rgba(17,24,39,0.07)] overflow-hidden'>
                                            <div className='theme-bg-soft absolute right-0 top-0 h-24 w-24 rounded-bl-full opacity-70' />
                                            <div className='relative flex flex-col md:flex-row md:items-start md:justify-between gap-4'>
                                                <div>
                                                    <div className='flex items-center gap-2 mb-2'>
                                                        <span className='theme-bg-soft theme-text px-3 py-1 rounded-full text-xs font-semibold'>
                                                            0{index + 1}
                                                        </span>
                                                        <span className='text-gray-500 text-xs uppercase tracking-[0.25em]'>
                                                            Education
                                                        </span>
                                                    </div>
                                                    <h3 className='text-xl md:text-2xl font-medium text-gray-900'>
                                                        {edu.degree}
                                                    </h3>
                                                    <p className='theme-text mt-1 font-medium'>{edu.institution}</p>
                                                    <p className='text-gray-600 mt-3 leading-relaxed'>{edu.focus}</p>
                                                </div>

                                                <div className='theme-border bg-white rounded-2xl px-4 py-3 border text-sm text-gray-600 flex items-center gap-2 shrink-0'>
                                                    <CalendarDaysIcon className='theme-text w-4 h-4' />
                                                    {edu.period}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                )
                            })}
                        </div>
                    </motion.div>

                    <motion.aside
                        variants={itemVariant}
                        className='theme-border bg-white/95 rounded-[2rem] border border-gray-200/80 p-6 md:p-7 shadow-[0_22px_60px_rgba(17,24,39,0.08)] sticky top-8'
                    >
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='theme-gradient w-12 h-12 rounded-2xl flex items-center justify-center'>
                                <TrophyIcon className='w-6 h-6 text-white' />
                            </div>
                            <div>
                                <h3 className='text-2xl font-medium text-gray-900'>Certifications</h3>
                                <p className='text-gray-500 text-sm'>Small wins, steady progress.</p>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    whileHover={{ x: 5 }}
                                    className='theme-border group bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-200/70 p-4 transition-colors'
                                >
                                    <div className='flex items-start justify-between gap-4'>
                                        <div className='flex gap-3'>
                                            <CheckBadgeIcon className='theme-text w-6 h-6 shrink-0 mt-0.5 group-hover:scale-110 transition-transform' />
                                            <div>
                                                <h4 className='text-gray-900 font-medium'>{cert.name}</h4>
                                                <p className='text-gray-500 text-sm'>{cert.issuer}</p>
                                            </div>
                                        </div>
                                        <span className='theme-bg-soft theme-text text-xs font-semibold px-2.5 py-1 rounded-full'>
                                            {cert.year}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className='theme-bg-soft rounded-3xl p-5 mt-6 text-center'>
                            <BuildingLibraryIcon className='theme-text w-7 h-7 mx-auto mb-2' />
                            <p className='theme-text font-sketch text-2xl'>lorem ipsum</p>
                            <p className='text-gray-600 text-sm mt-1'>
                                Dolor sit amet, consectetur elit.
                            </p>
                        </div>
                    </motion.aside>
                </div>
            </motion.div>
        </section>
    )
}

export default Education
