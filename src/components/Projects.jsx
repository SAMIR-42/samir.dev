import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiCalendar, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'ParikshaHub – Anti-Cheat Online MCQ Exam System',
        date: 'February 2026',
        description:
            'Conduct MCQ exams with anti-cheat protection, per-question timers, and instant results. Perfect for teachers, institutes and training programs.',
        features: [
            'Anti-Cheat Protection',
            'Per Question Timer',
            'Instant Results',
        ],
        techs: [ 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySql', 'REST APIs'],
        live: 'https://parikshahub.app/',
        gradient: 'from-indigo-500 to-violet-600',
        techBadge: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300',
    },
    {
        title: 'UI Vault – UI Component Showcase Platform',
        date: 'March 2025',
        description:
            'Developed a platform to create and showcase reusable UI components (buttons, forms, loaders, etc)',
        features: [
            'Helps developers quickly access and reuse ready-made UI code',
            'Search and filter functionality',
            'Implemented live preview using iframe for instant component visualization',
        ],
        techs: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySql'],
        live: 'https://uivault.onrender.com/',
        gradient: 'from-violet-500 to-purple-600',
        techBadge: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    },

    {
    title: 'Face Reveal – AI Face Analysis Platform',
    date: 'June 2026',
    description:
        'An AI-powered face analysis platform that provides personality insights, facial feature analysis, and premium unlocked reports through a modern user experience.',
    features: [
        'Face Detection & Analysis',
        'Premium Unlock System',
        'Modern Interactive UI',
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySql'],
    live: 'https://facereveal.onrender.com/',
    gradient: 'from-pink-500 to-rose-600',
    techBadge: 'bg-pink-500/10 border-pink-500/25 text-pink-300',
    },

    {
    title: 'MS-CIT Institute Management System',
    date: 'January 2026',
    description:
        'A comprehensive institute management platform designed to streamline student enrollment, course management, fee tracking, attendance, and examination records through an intuitive admin dashboard.',
    features: [
        'Student & Admission Management',
        'Attendance & Fee Tracking',
        'Course & Exam Management',
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySql'],
    live: 'https://mscit-institute.onrender.com/',
    gradient: 'from-cyan-500 to-blue-600',
    techBadge: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300',
},

    {
    title: 'NeedFund – Medical Crowdfunding Platform',
    date: 'April 2025',
    description:
        'A concept crowdfunding platform where verified individuals in need can share their stories and receive community donation through a transparent interface',
    features: [
        'Patient Listing',
        'Donation Flow',
        'Progress Tracking',
    ],
    techs: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://need-fund.onrender.com/',
    gradient: 'from-emerald-500 to-teal-600',
    techBadge: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',
    },


]

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [showAllProjects, setShowAllProjects] = useState(false)

    const visibleProjects = showAllProjects ? projects : projects.slice(0, 2)
    return (
        <section id="work" className="py-24 section-light">
            <div className="max-w-5xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">What I've Built</span>
                    <h2 className="text-4xl font-extrabold text-white mt-2">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                        Highlighted projects demonstrating my full-stack development capabilities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {visibleProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(0,0,0,0.5)' }}
                            className="glass-dark rounded-2xl overflow-hidden flex flex-col"
                        >
                            {/* Card header banner */}
                            <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                            <div className="p-7 flex flex-col flex-1 gap-4">
                                {/* Title + GitHub icon */}
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                                    <a
                                        href={project.live || project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={project.live ? `${project.title} Live Demo` : `${project.title} GitHub`}
                                        className="flex-shrink-0 p-2 rounded-full bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-400 text-slate-400 transition-all duration-200"
                                    >
                                        {project.live ? <FiExternalLink size={18} /> : <FiGithub size={18} />}
                                    </a>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <FiCalendar size={12} />
                                    {project.date}
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                                <ul className="space-y-1.5">
                                    {project.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/5">
                                    {project.techs.map((t) => (
                                        <span
                                            key={t}
                                            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${project.techBadge}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                       </div>

                {projects.length > 2 && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setShowAllProjects(!showAllProjects)}
                            className="px-6 py-3 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300"
                        >
                            {showAllProjects ? 'Show Less' : 'Explore More'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
