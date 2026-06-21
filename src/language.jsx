import { LanguageIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const languages = [
    { code: 'US', name: 'English', level: 'Fluent', proficiency: 90 },
    { code: 'FR', name: 'French', level: 'Intermediate', proficiency: 70 },
    { code: 'ES', name: 'Spanish', level: 'Intermediate', proficiency: 65 },
    { code: 'DE', name: 'German', level: 'Basic', proficiency: 40 }
]

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.16 }
    }
}

const itemVariant = {
    hidden: { y: 24, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: 'easeOut' }
    }
}

const Language = () => {
    return (
        <section
            id='language'
            className='min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden py-20'
        >
            <div className='absolute inset-0 pointer-events-none'>
                <div className='theme-bg-glow absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 blur-3xl rounded-full' />
                <div className='theme-bg-soft absolute bottom-10 right-10 h-64 w-64 blur-3xl rounded-full' />
            </div>

            <motion.div
                variants={containerVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, margin: '-60px' }}
                className='container mx-auto px-6 relative z-10 max-w-4xl'
            >
                <motion.div variants={itemVariant} className='text-center mb-10'>
                    <div className='flex justify-center mb-4'>
                        <motion.div
                            animate={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className='theme-bg-soft theme-border p-3 rounded-2xl border'
                        >
                            <LanguageIcon className='theme-text w-10 h-10 text-cyan-400' />
                        </motion.div>
                    </div>

                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='theme-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                            Languages
                        </span>
                    </h2>
                    <p className='text-gray-300 text-lg'>
                        The languages I speak and my proficiency level in each.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariant}
                    className='theme-border theme-shadow relative bg-gray-800/45 backdrop-blur-xl border rounded-2xl p-5 md:p-8'
                >
                    <div className='theme-bg-soft absolute -inset-px rounded-2xl blur-md -z-10' />

                    <div className='space-y-4'>
                        {languages.map((language, index) => (
                            <motion.div
                                key={language.code}
                                variants={itemVariant}
                                whileHover={{ x: 5, scale: 1.01 }}
                                className='theme-hover group bg-gray-700/55 hover:bg-gray-700/75 border border-white/5 rounded-xl p-4 md:p-5 transition-colors duration-300'
                            >
                                <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6'>
                                    <div className='flex items-center gap-4 sm:w-52'>
                                        <div className='theme-border theme-hover w-11 h-11 shrink-0 rounded-lg bg-gray-800/70 border flex items-center justify-center text-gray-300 font-bold text-sm transition-colors'>
                                            {language.code}
                                        </div>
                                        <div>
                                            <h3 className='text-white font-semibold'>
                                                {language.name}
                                            </h3>
                                            <p className='theme-text text-cyan-400 text-xs mt-0.5'>
                                                {language.level}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex-1 flex items-center gap-4'>
                                        <div className='flex-1 h-2 bg-gray-900/60 rounded-full overflow-hidden'>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${language.proficiency}%` }}
                                                viewport={{ once: false }}
                                                transition={{
                                                    duration: 1,
                                                    delay: index * 0.15,
                                                    ease: 'easeOut'
                                                }}
                                                className='theme-gradient theme-shadow h-full rounded-full'
                                            />
                                        </div>
                                        <span className='theme-text w-10 text-right text-cyan-300 text-sm font-semibold'>
                                            {language.proficiency}%
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Language
