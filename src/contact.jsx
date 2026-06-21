import {
    ArrowUpIcon,
    EnvelopeIcon,
    HeartIcon,
    MapPinIcon,
    PhoneIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const contactDetails = [
    {
        label: 'yourname@gmail.com',
        href: 'mailto:yourname@gmail.com',
        icon: EnvelopeIcon
    },
    {
        label: '+91 00000 00000',
        href: 'tel:+910000000000',
        icon: PhoneIcon
    },
    {
        label: 'India',
        icon: MapPinIcon
    }
]

const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Languages', id: 'language' },
    { label: 'Contact', id: 'contact' }
]

const Contact = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <section
            id='contact'
            className='theme-border min-h-[55vh] flex items-center justify-center bg-gray-900 relative overflow-hidden py-20 border-b'
        >
            <div className='absolute inset-0 pointer-events-none'>
                <div className='theme-bg-glow absolute left-1/2 top-0 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl' />
                <div className='absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl' />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className='container mx-auto px-6 relative z-10 text-center max-w-4xl'
            >
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-9'>
                    {contactDetails.map((detail) => {
                        const Icon = detail.icon
                        const content = (
                            <>
                                <span className='theme-bg-soft theme-border w-9 h-9 rounded-lg border flex items-center justify-center'>
                                    <Icon className='theme-text w-4 h-4 text-cyan-400' />
                                </span>
                                <span>{detail.label}</span>
                            </>
                        )

                        return detail.href ? (
                            <motion.a
                                key={detail.label}
                                href={detail.href}
                                whileHover={{ y: -3 }}
                                className='theme-hover flex items-center gap-2.5 text-gray-300 text-sm transition-colors'
                            >
                                {content}
                            </motion.a>
                        ) : (
                            <motion.div
                                key={detail.label}
                                whileHover={{ y: -3 }}
                                className='theme-hover flex items-center gap-2.5 text-gray-300 text-sm transition-colors'
                            >
                                {content}
                            </motion.div>
                        )
                    })}
                </div>

                <h2 className='theme-text text-cyan-400 text-lg font-semibold mb-5'>
                    Quick Navigation
                </h2>

                <div className='flex flex-wrap justify-center gap-3 mb-10'>
                    {quickLinks.map((link) => (
                        <motion.button
                            key={link.id}
                            type='button'
                            onClick={() => scrollToSection(link.id)}
                            whileHover={{ y: -3, scale: 1.04 }}
                            whileTap={{ scale: 0.95 }}
                            className='theme-hover px-4 py-2 bg-gray-800/80 text-gray-300 text-sm rounded-lg border border-white/5 transition-colors'
                        >
                            {link.label}
                        </motion.button>
                    ))}
                </div>

                <div className='text-gray-500 text-sm'>
                    <p className='flex items-center justify-center gap-1.5'>
                        © 2026 Devisha. All rights reserved.
                        <HeartIcon className='theme-text w-4 h-4 text-cyan-400' />
                    </p>
                    <p className='theme-text mt-2 text-cyan-400/80'>
                        Portfolio for new projects
                    </p>
                </div>
            </motion.div>

            <motion.button
                type='button'
                onClick={() => scrollToSection('home')}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label='Back to top'
                className='theme-gradient theme-shadow absolute right-6 bottom-6 md:right-10 md:bottom-8 w-11 h-11 rounded-full text-white flex items-center justify-center'
            >
                <ArrowUpIcon className='w-5 h-5' />
            </motion.button>
        </section>
    )
}

export default Contact
