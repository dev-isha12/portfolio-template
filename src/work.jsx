import {
    ArrowTopRightOnSquareIcon,
    CodeBracketIcon,
    FolderIcon,
    SparklesIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const projects = [
    {
        id: 1,
        title: 'Modern E-Commerce Platform',
        desc: 'A responsive shopping experience with product discovery, a smooth cart flow, and a clean checkout journey.',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        demo: '#',
        code: '#',
        color: 'from-blue-600 via-blue-500 to-cyan-400'
    },
    {
        id: 2,
        title: 'Task Management App',
        desc: 'A focused workspace for organizing projects, tracking progress, and keeping everyday tasks moving.',
        tags: ['Vue.js', 'Firebase', 'CSS3'],
        demo: '#',
        code: '#',
        color: 'from-emerald-600 via-teal-500 to-cyan-400'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        desc: 'A data-rich weather experience with live forecasts, location search, and easy-to-read visual insights.',
        tags: ['React', 'REST API', 'Chart.js'],
        demo: '#',
        code: '#',
        color: 'from-violet-600 via-blue-500 to-cyan-400'
    },
    {
        id: 4,
        title: 'Fitness Tracking App',
        desc: 'A mobile-first fitness companion for planning workouts, logging activity, and celebrating consistency.',
        tags: ['React Native', 'Redux', 'Firebase'],
        demo: '#',
        code: '#',
        color: 'from-orange-500 via-rose-500 to-pink-500'
    },
    {
        id: 5,
        title: 'Social Media Dashboard',
        desc: 'An analytics dashboard that turns engagement data into clear, useful, and actionable visual stories.',
        tags: ['Vue.js', 'D3.js', 'Express'],
        demo: '#',
        code: '#',
        color: 'from-cyan-500 via-blue-500 to-indigo-600'
    },
    {
        id: 6,
        title: 'Activity Explorer',
        desc: 'An interactive map-based experience for discovering routes, reviewing sessions, and comparing performance.',
        tags: ['React Native', 'Mapbox', 'Node.js'],
        demo: '#',
        code: '#',
        color: 'from-pink-500 via-purple-500 to-indigo-600'
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
    return (
        <section
            id='work'
            className='min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden py-20'
        >
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-24 right-12 md:right-64 h-96 w-96 bg-gradient-to-br from-[#0268b0] to-blue-500 blur-3xl opacity-30 rounded-full' />
                <div className='absolute bottom-16 -left-32 h-72 w-72 bg-cyan-500/10 blur-3xl rounded-full' />
            </div>

            <motion.div
                variants={containerVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, margin: '-50px' }}
                className='container mx-auto px-6 relative z-10 max-w-5xl'
            >
                <motion.div variants={itemVariant} className='text-center mb-12'>
                    <div className='flex justify-center mb-4'>
                        <motion.div
                            animate={{ rotate: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className='p-3 rounded-2xl bg-blue-500/10 border border-blue-400/20'
                        >
                            <FolderIcon className='w-10 h-10 text-cyan-400' />
                        </motion.div>
                    </div>

                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        Featured{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                            Projects
                        </span>
                    </h2>
                    <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                        A selection of things I have designed, built, and learned from.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariant}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            variants={itemVariant}
                            whileHover={{ y: -7 }}
                            className='group bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-blue-500/20 hover:border-cyan-400/50 overflow-hidden flex flex-col transition-colors duration-300 shadow-lg shadow-black/10'
                        >
                            <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                <div className='absolute inset-0 bg-gray-950/30 transition-colors duration-300 group-hover:bg-gray-950/10' />
                                <div className='absolute -right-8 -bottom-12 h-32 w-32 rounded-full border-[18px] border-white/10' />
                                <div className='absolute top-4 left-4 flex items-center gap-2 text-white/80 text-xs font-medium tracking-widest uppercase'>
                                    <SparklesIcon className='w-4 h-4' />
                                    Project {String(index + 1).padStart(2, '0')}
                                </div>
                                <span className='absolute right-4 bottom-1 text-7xl font-bold text-white/15 select-none'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className='p-5 flex flex-col flex-1'>
                                <h3 className='text-white font-semibold text-lg mb-2 group-hover:text-cyan-300 transition-colors'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-400 text-sm leading-relaxed mb-5 flex-1'>
                                    {project.desc}
                                </p>

                                <div className='flex flex-wrap gap-2 mb-5'>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className='text-xs bg-gray-700/60 text-gray-300 px-2.5 py-1 rounded-full border border-white/5'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex items-center gap-3 pt-4 border-t border-white/5'>
                                    <a
                                        href={project.demo}
                                        aria-label={`View live demo of ${project.title}`}
                                        className='flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white text-sm py-2.5 rounded-lg transition-all font-medium'
                                    >
                                        Live demo
                                        <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                                    </a>
                                    <a
                                        href={project.code}
                                        aria-label={`View source code for ${project.title}`}
                                        className='inline-flex items-center justify-center p-2.5 border border-white/10 hover:border-cyan-400/40 text-gray-300 hover:text-cyan-300 rounded-lg transition-colors'
                                    >
                                        <CodeBracketIcon className='w-5 h-5' />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Work
