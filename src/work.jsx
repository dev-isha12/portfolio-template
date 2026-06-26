import { useEffect, useRef, useState } from 'react'
import {
    ArrowTopRightOnSquareIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    FolderIcon,
    RocketLaunchIcon,
    SparklesIcon
} from '@heroicons/react/24/outline'
import { motion, animate } from 'framer-motion'

const projects = [
    {
        id: 1,
        title: 'Modern E-Commerce Platform',
        desc: 'A responsive shopping experience with product discovery, a smooth cart flow, and a clean checkout journey.',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        demo: '#',
        code: '#',
        color: 'from-blue-600 via-blue-500 to-cyan-400',
        metric: 'Shopping UI'
    },
    {
        id: 2,
        title: 'Task Management App',
        desc: 'A focused workspace for organizing projects, tracking progress, and keeping everyday tasks moving.',
        tags: ['Vue.js', 'Firebase', 'CSS3'],
        demo: '#',
        code: '#',
        color: 'from-emerald-600 via-teal-500 to-cyan-400',
        metric: 'Productivity'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        desc: 'A data-rich weather experience with live forecasts, location search, and easy-to-read visual insights.',
        tags: ['React', 'REST API', 'Chart.js'],
        demo: '#',
        code: '#',
        color: 'from-violet-600 via-blue-500 to-cyan-400',
        metric: 'Live data'
    },
    {
        id: 4,
        title: 'Fitness Tracking App',
        desc: 'A mobile-first fitness companion for planning workouts, logging activity, and celebrating consistency.',
        tags: ['React Native', 'Redux', 'Firebase'],
        demo: '#',
        code: '#',
        color: 'from-orange-500 via-rose-500 to-pink-500',
        metric: 'Mobile-first'
    },
    {
        id: 5,
        title: 'Social Media Dashboard',
        desc: 'An analytics dashboard that turns engagement data into clear, useful, and actionable visual stories.',
        tags: ['Vue.js', 'D3.js', 'Express'],
        demo: '#',
        code: '#',
        color: 'from-cyan-500 via-blue-500 to-indigo-600',
        metric: 'Analytics'
    },
    {
        id: 6,
        title: 'Activity Explorer',
        desc: 'An interactive map-based experience for discovering routes, reviewing sessions, and comparing performance.',
        tags: ['React Native', 'Mapbox', 'Node.js'],
        demo: '#',
        code: '#',
        color: 'from-pink-500 via-purple-500 to-indigo-600',
        metric: 'Maps'
    }
]

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
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

const Work = () => {
    const scrollRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 5)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
        }
    }

    useEffect(() => {
        const el = scrollRef.current
        if (el) {
            el.addEventListener('scroll', checkScroll)
            // Initial check
            setTimeout(checkScroll, 100)
            window.addEventListener('resize', checkScroll)
        }
        return () => {
            if (el) {
                el.removeEventListener('scroll', checkScroll)
            }
            window.removeEventListener('resize', checkScroll)
        }
    }, [])

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollAmount = clientWidth
            const target = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount
            animate(scrollLeft, target, {
                type: 'spring',
                stiffness: 70,
                damping: 18,
                mass: 0.8,
                onUpdate: (latest) => {
                    if (scrollRef.current) {
                        scrollRef.current.scrollLeft = latest
                    }
                }
            })
        }
    }

    return (
        <section
            id='work'
            className='min-h-screen flex items-center justify-center bg-white relative overflow-hidden py-20'
        >
            <div className='theme-bg-soft absolute top-10 right-10 h-64 w-64 rounded-full blur-3xl opacity-70' />
            <div className='theme-bg-soft absolute bottom-16 left-6 h-48 w-48 rounded-full blur-3xl opacity-60' />

            <motion.div
                variants={containerVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, margin: '-50px' }}
                className='container mx-auto px-6 relative z-10 max-w-5xl'
            >
                <motion.div variants={itemVariant} className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
                    <div className='text-left'>
                        <div className='flex items-center gap-4 mb-4'>
                            <motion.div
                                animate={{ y: [0, -6, 0], rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className='theme-bg-soft theme-border p-4 rounded-3xl border'
                            >
                                <FolderIcon className='theme-text w-9 h-9' />
                            </motion.div>
                            <span className='theme-text font-sketch text-3xl'>selected builds</span>
                        </div>

                        <h2 className='text-4xl md:text-6xl font-light text-gray-900 mb-4'>
                            Featured{' '}
                            <span className='theme-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-650 to-indigo-650 font-normal'>
                                Projects
                            </span>
                        </h2>
                        <p className='text-gray-650 text-lg max-w-2xl'>
                            A selection of things I have designed, built, and learned from.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className='flex items-center gap-3 self-center md:self-end'>
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className='theme-border bg-white text-gray-800 p-3.5 rounded-full shadow-[0_14px_35px_rgba(17,24,39,0.08)] border border-gray-200/85 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100'
                            aria-label="Scroll left"
                        >
                            <ChevronLeftIcon className="w-5 h-5 stroke-[2.5]" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className='theme-border bg-white text-gray-800 p-3.5 rounded-full shadow-[0_14px_35px_rgba(17,24,39,0.08)] border border-gray-200/85 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100'
                            aria-label="Scroll right"
                        >
                            <ChevronRightIcon className="w-5 h-5 stroke-[2.5]" />
                        </button>
                    </div>
                </motion.div>

                <div className='relative group/carousel'>
                    <motion.div
                        ref={scrollRef}
                        variants={containerVariant}
                        className='flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth'
                    >
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                variants={itemVariant}
                                initial={{ opacity: 0.7, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, root: scrollRef, margin: '0px -40px' }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                whileHover={{ y: -7 }}
                                className='theme-border theme-hover group bg-white backdrop-blur-lg rounded-[2rem] border border-gray-200/80 overflow-hidden flex flex-col transition-colors duration-300 shadow-[0_22px_60px_rgba(17,24,39,0.08)] w-[300px] sm:w-[420px] lg:w-[455px] shrink-0 snap-start'
                            >
                                <div className={`h-52 bg-gradient-to-br ${project.color} relative overflow-hidden shrink-0`}>
                                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.18))]' />
                                    <div className='absolute -right-8 -bottom-12 h-40 w-40 rounded-full border-[22px] border-white/10 group-hover:scale-110 transition-transform duration-500' />
                                    <div className='absolute -left-10 top-10 h-28 w-28 rounded-full bg-white/10 blur-xl' />
                                    <div className='absolute top-5 left-5 flex items-center gap-2 text-white/90 text-xs font-medium tracking-widest uppercase'>
                                        <SparklesIcon className='w-4 h-4' />
                                        Project {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className='absolute bottom-5 left-5 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20'>
                                        {project.metric}
                                    </div>
                                    <span className='absolute right-5 bottom-2 text-8xl font-semibold text-white/20 select-none'>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <div className='p-6 flex flex-col flex-1 min-w-0 justify-between'>
                                    <div>
                                        <h3 className='theme-hover text-gray-900 font-medium text-xl mb-2 transition-colors'>
                                            {project.title}
                                        </h3>
                                        <p className='text-gray-600 text-sm leading-relaxed mb-5'>
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className='flex flex-wrap gap-2 mb-5'>
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className='theme-border text-xs bg-white text-gray-600 px-3 py-1 rounded-full border border-gray-200/70'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='flex items-center justify-between gap-3 pt-4 border-t border-gray-100 mt-auto'>
                                        <a
                                            href={project.demo}
                                            aria-label={`View live demo of ${project.title}`}
                                            className='theme-gradient inline-flex items-center justify-center gap-1.5 text-white text-sm px-4 py-2 rounded-full transition-all font-medium cursor-pointer shadow-lg shadow-black/10'
                                        >
                                            Live
                                            <ArrowTopRightOnSquareIcon className='w-3.5 h-3.5' />
                                        </a>
                                        <div className='theme-bg-soft theme-text flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold'>
                                            <RocketLaunchIcon className='w-4 h-4' />
                                            Case study
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Work
