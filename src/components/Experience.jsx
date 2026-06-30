import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const experiences = [
    {
        company: 'ParikshaHub',
        role: 'Full-Stack Web Application Project',
        duration: '2025 – 2026',
        type: 'Project Experience',
        points: [
            'Built an online MCQ exam platform with teacher and student workflows.',
            'Implemented backend logic using Node.js, Express, MySQL, sessions and REST APIs.',
            'Added exam-focused features like timers, result calculation and anti-cheat logic.',
        ],
        color: 'from-blue-500 to-indigo-600',
        badge: 'bg-blue-500/10 border-blue-500/25 text-blue-300',
    },
    {
        company: 'UI Vault',
        role: 'Reusable UI Component Platform',
        duration: '2025',
        type: 'Project Experience',
        points: [
            'Developed a platform to showcase reusable UI components with live preview.',
            'Worked on responsive frontend design, search/filter functionality and backend routes.',
            'Improved practical understanding of full-stack development and deployment.',
        ],
        color: 'from-violet-500 to-purple-600',
        badge: 'bg-violet-500/10 border-violet-500/25 text-violet-300',
    },
]
export default function Experience() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="experience" className="py-24 section-tinted">
            <div className="max-w-4xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">What I've Practiced</span>
<h2 className="text-4xl font-extrabold text-white mt-2">
    Practical <span className="gradient-text">Experience</span>
</h2>
                </motion.div>

                <div className="space-y-6">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}
                            className="glass-dark rounded-2xl overflow-hidden"
                        >
                            <div className={`h-1.5 bg-gradient-to-r ${exp.color}`} />
                            <div className="p-7">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-md`}>
                                            <FiBriefcase className="text-white" size={18} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg leading-tight">{exp.company}</h3>
                                            <p className="text-sm text-indigo-400 font-medium">{exp.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1.5">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${exp.badge}`}>{exp.type}</span>
                                        <div className="flex items-center gap-1 text-xs text-slate-500">
                                            <FiCalendar size={11} />
                                            {exp.duration}
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {exp.points.map((pt) => (
                                        <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
