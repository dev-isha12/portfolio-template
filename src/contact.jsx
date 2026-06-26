import {
    ArrowUpIcon,
    ChatBubbleLeftRightIcon,
    EnvelopeIcon,
    HeartIcon,
    MapPinIcon,
    PaperAirplaneIcon,
    PhoneIcon,
    SparklesIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const contactDetails = [
    {
        label: 'yourname@gmail.com',
        title: 'Email',
        href: 'mailto:yourname@gmail.com',
        icon: EnvelopeIcon
    },
    {
        label: '+91 00000 00000',
        title: 'Phone',
        href: 'tel:+910000000000',
        icon: PhoneIcon
    },
    {
        label: 'India',
        title: 'Location',
        icon: MapPinIcon
    }
]

const socialLinks = ['LinkedIn', 'GitHub', 'Instagram']

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
            className='theme-border min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20 border-b border-gray-200/80'
        >
            <div className='theme-bg-soft absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-70' />
            <div className='theme-bg-soft absolute bottom-10 right-12 h-44 w-44 rounded-full blur-3xl opacity-60' />

            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className='container mx-auto px-6 relative z-10 max-w-6xl'
            >
                <div className='theme-border relative overflow-hidden rounded-[2.25rem] border border-gray-200/80 bg-white shadow-[0_25px_80px_rgba(17,24,39,0.10)]'>
                    <div className='theme-gradient absolute inset-x-0 top-0 h-1.5' />
                    <div className='theme-bg-soft absolute -right-20 -top-20 h-60 w-60 rounded-full' />

                    <div className='grid lg:grid-cols-[1.05fr_0.95fr] gap-0'>
                        <div className='relative p-8 md:p-12'>
                            <motion.div
                                animate={{ y: [0, -6, 0], rotate: [0, -4, 4, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className='theme-bg-soft theme-border mb-6 w-16 h-16 rounded-3xl border flex items-center justify-center'
                            >
                                <ChatBubbleLeftRightIcon className='theme-text w-9 h-9' />
                            </motion.div>

                            <p className='theme-text font-sketch text-3xl mb-1'>let’s create something</p>
                            <h2 className='text-4xl md:text-6xl font-light text-gray-900 leading-tight'>
                                Have an idea? <span className='theme-heading text-transparent bg-clip-text'>Say hello.</span>
                            </h2>
                            <p className='text-gray-600 text-lg leading-relaxed mt-6 max-w-xl'>
                                I’m open to portfolio feedback, creative web projects, and frontend collaborations that need a clean, lively interface.
                            </p>

                            <div className='mt-8 flex flex-wrap gap-3'>
                                <a
                                    href='mailto:yourname@gmail.com'
                                    className='theme-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-medium shadow-lg shadow-black/10 hover:scale-105 active:scale-95 transition-transform'
                                >
                                    <PaperAirplaneIcon className='w-5 h-5' />
                                    Send message
                                </a>
                                <button
                                    type='button'
                                    onClick={() => scrollToSection('work')}
                                    className='theme-border inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-gray-700 font-medium hover:scale-105 active:scale-95 transition-transform'
                                >
                                    <SparklesIcon className='theme-text w-5 h-5' />
                                    View projects
                                </button>
                            </div>
                        </div>

                        <div className='theme-bg-soft relative p-8 md:p-12 lg:border-l border-gray-200/70'>
                            <div className='space-y-4'>
                                {contactDetails.map((detail, index) => {
                                    const Icon = detail.icon
                                    const content = (
                                        <>
                                            <span className='theme-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg shadow-black/10'>
                                                <Icon className='w-5 h-5 text-white' />
                                            </span>
                                            <span>
                                                <span className='block text-sm text-gray-500'>{detail.title}</span>
                                                <span className='block text-gray-900 font-medium'>{detail.label}</span>
                                            </span>
                                        </>
                                    )

                                    return detail.href ? (
                                        <motion.a
                                            key={detail.label}
                                            href={detail.href}
                                            initial={{ opacity: 0, x: 18 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: index * 0.08, duration: 0.45 }}
                                            whileHover={{ x: 6, scale: 1.01 }}
                                            className='theme-border flex items-center gap-4 rounded-3xl border border-gray-200/80 bg-white p-4 shadow-[0_14px_35px_rgba(17,24,39,0.06)]'
                                        >
                                            {content}
                                        </motion.a>
                                    ) : (
                                        <motion.div
                                            key={detail.label}
                                            initial={{ opacity: 0, x: 18 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: index * 0.08, duration: 0.45 }}
                                            whileHover={{ x: 6, scale: 1.01 }}
                                            className='theme-border flex items-center gap-4 rounded-3xl border border-gray-200/80 bg-white p-4 shadow-[0_14px_35px_rgba(17,24,39,0.06)]'
                                        >
                                            {content}
                                        </motion.div>
                                    )
                                })}
                            </div>

                            <div className='mt-7'>
                                <p className='text-gray-500 text-sm mb-3'>Find me around the web</p>
                                <div className='flex flex-wrap gap-2'>
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link}
                                            href='#'
                                            className='theme-border theme-hover rounded-full border border-gray-200/80 bg-white px-4 py-2 text-sm text-gray-600 transition-colors'
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-gray-100 px-8 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500'>
                        <p className='flex items-center justify-center gap-1.5'>
                            © 2026 Devisha. Made with
                            <HeartIcon className='theme-text w-4 h-4 fill-current' />
                        </p>
                        <p className='text-xs'>Portfolio for new projects</p>
                    </div>
                </div>
            </motion.div>

            <motion.button
                type='button'
                onClick={() => scrollToSection('home')}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label='Back to top'
                className='theme-gradient theme-shadow fixed right-6 bottom-6 md:right-10 md:bottom-8 z-50 w-11 h-11 rounded-full text-white flex items-center justify-center cursor-pointer'
            >
                <ArrowUpIcon className='w-5 h-5' />
            </motion.button>
        </section>
    )
}

export default Contact
