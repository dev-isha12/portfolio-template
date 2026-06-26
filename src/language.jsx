import { ChatBubbleBottomCenterTextIcon, LanguageIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const languages = [
    { code: 'EN', name: 'English', level: 'Fluent', proficiency: 90, note: 'Clear writing and confident communication' },
    { code: 'HI', name: 'Hindi', level: 'Native', proficiency: 95, note: 'Natural everyday and professional conversations' },
    { code: 'FR', name: 'French', level: 'Learning', proficiency: 55, note: 'Growing vocabulary and basic conversation' },
    { code: 'ES', name: 'Spanish', level: 'Beginner', proficiency: 35, note: 'Exploring phrases, grammar, and pronunciation' }
]

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.14 }
    }
}

const itemVariant = {
    hidden: { y: 26, opacity: 0 },
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
            className='min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20'
        >
            <div className='theme-bg-soft absolute top-16 left-10 h-40 w-40 rounded-full blur-3xl opacity-70' />
            <div className='theme-bg-soft absolute bottom-16 right-10 h-56 w-56 rounded-full blur-3xl opacity-60' />

            <motion.div
                variants={containerVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, margin: '-60px' }}
                className='container mx-auto px-6 relative z-10 max-w-6xl'
            >
                <motion.div variants={itemVariant} className='grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center'>
                    <div>
                        <motion.div
                            animate={{ rotate: [0, -5, 5, 0], y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className='theme-bg-soft theme-border mb-5 w-16 h-16 rounded-3xl border flex items-center justify-center'
                        >
                            <LanguageIcon className='theme-text w-10 h-10' />
                        </motion.div>

                        <p className='theme-text font-sketch text-3xl mb-1'>words matter</p>
                        <h2 className='text-4xl md:text-6xl font-light text-gray-900'>
                            Languages I <span className='theme-heading text-transparent bg-clip-text'>Speak</span>
                        </h2>
                        <p className='text-gray-600 text-lg mt-5 leading-relaxed'>
                            Communication is part of good design too — these are the languages I use to connect, explain, and collaborate.
                        </p>

                        <div className='theme-border mt-8 bg-white rounded-3xl border border-gray-200/80 p-5 shadow-[0_18px_45px_rgba(17,24,39,0.06)]'>
                            <div className='flex items-center gap-3'>
                                <ChatBubbleBottomCenterTextIcon className='theme-text w-7 h-7' />
                                <div>
                                    <h3 className='font-medium text-gray-900'>Communication style</h3>
                                    <p className='text-gray-500 text-sm'>Simple, warm, and easy to understand.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-5'>
                        {languages.map((language, index) => (
                            <motion.article
                                key={language.code}
                                variants={itemVariant}
                                whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                                className='theme-border group relative overflow-hidden bg-white rounded-[1.75rem] border border-gray-200/80 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.07)]'
                            >
                                <div className='theme-bg-soft absolute -right-10 -top-10 h-28 w-28 rounded-full group-hover:scale-125 transition-transform duration-500' />
                                <div className='relative'>
                                    <div className='flex items-start justify-between gap-4 mb-8'>
                                        <div className='theme-gradient h-14 w-14 rounded-2xl text-white flex items-center justify-center font-semibold text-lg shadow-lg shadow-black/10'>
                                            {language.code}
                                        </div>
                                        <SparklesIcon className='theme-text w-5 h-5 opacity-70 group-hover:rotate-12 transition-transform' />
                                    </div>

                                    <h3 className='text-2xl font-medium text-gray-900'>{language.name}</h3>
                                    <p className='theme-text text-sm font-semibold mt-1'>{language.level}</p>
                                    <p className='text-gray-500 text-sm leading-relaxed mt-3 min-h-10'>{language.note}</p>

                                    <div className='mt-5'>
                                        <div className='flex items-center justify-between text-xs mb-2'>
                                            <span className='text-gray-500'>Proficiency</span>
                                            <span className='theme-text font-bold'>{language.proficiency}%</span>
                                        </div>
                                        <div className='h-2.5 bg-gray-100 rounded-full overflow-hidden'>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${language.proficiency}%` }}
                                                viewport={{ once: false }}
                                                transition={{ duration: 1, delay: index * 0.12, ease: 'easeOut' }}
                                                className='theme-gradient h-full rounded-full'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Language
