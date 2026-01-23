import { motion } from 'framer-motion';
import { LayoutGrid, Box, Rocket, Terminal, Github, Star, Search, Globe, Filter, ArrowUpRight, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

const PROJECT_STATS = [
    { label: "Total Repos", value: "30", icon: <Layers className="w-4 h-4" /> },
    { label: "Completion", value: "100%", icon: <Zap className="w-4 h-4" /> },
    { label: "Type Safety", value: "Verified", icon: <ShieldCheck className="w-4 h-4" /> }
];

export default function App() {
    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <div className="min-h-screen nexus-gradient">
            {/* Background Grid */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-24 border-b border-white/5 bg-black/50 backdrop-blur-3xl z-50 px-8">
                <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-nexus rounded-2xl flex items-center justify-center text-black shadow-lg shadow-nexus/20">
                            <Box className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-white uppercase tracking-tighter italic">Nexus<span className="text-nexus not-italic">Hub</span></h1>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Master Repository Gallery</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
                        <Search className="w-4 h-4 text-slate-500" />
                        <input type="text" placeholder="Search the nexus..." className="bg-transparent border-none outline-none text-xs text-white uppercase tracking-widest font-black w-64" />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex gap-4">
                            {[<Github className="w-5 h-5" />, <Globe className="w-5 h-5" />, <Star className="w-5 h-5" />].map((icon, i) => (
                                <button key={i} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-all">{icon}</button>
                            ))}
                        </div>
                        <button className="px-8 py-3 bg-nexus text-black font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl shadow-nexus/10">
                            Launch Explorer
                        </button>
                    </div>
                </div>
            </header>

            <main className="pt-40 pb-20 max-w-7xl mx-auto px-8">
                {/* Intro */}
                <section className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] uppercase text-nexus mb-8"
                    >
                        Ultimate Portfolio Rebuild Completed
                    </motion.div>
                    <h2 className="text-6xl md:text-[8rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-12 italic">
                        30 REPOS. <br /> ONE <span className="text-nexus not-italic">NEXUS.</span>
                    </h2>

                    <div className="flex justify-center gap-12">
                        {PROJECT_STATS.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="flex items-center justify-center gap-2 text-slate-600 group-hover:text-nexus transition-colors mb-2">
                                    {stat.icon}
                                    <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                                </div>
                                <div className="text-3xl font-black text-white uppercase italic">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery Interface */}
                <section className="bg-white/5 border border-white/10 rounded-[3rem] p-8 lg:p-12 overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-white/5 pb-12">
                        <div className="flex gap-4">
                            {['All', 'Frontend', 'Backend', 'Tools', 'AI'].map(f => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`category-pill ${activeFilter === f ? 'bg-nexus text-black border-nexus' : ''}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 text-slate-500">
                            <Filter className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Sort by Relevance</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-black/40 border border-white/5 rounded-3xl p-8 group cursor-pointer hover:border-nexus/50 transition-all duration-500 h-[400px] flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-nexus group-hover:text-black transition-all">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-slate-700 group-hover:text-nexus group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 block">Repository 2{i + 1}</span>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic group-hover:text-nexus">Nexus Node {i + 1}</h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400">Advanced full-stack orchestration with automated deployment and premium UI components.</p>
                                </div>
                                <div className="flex gap-2">
                                    {['React', 'TS', 'Vite'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-black text-slate-600 uppercase tracking-widest border border-white/5">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-nexus transition-all shadow-2xl">
                            Load Full Gallery (30)
                        </button>
                    </div>
                </section>

                {/* Technical Footer Section */}
                <section className="mt-32 grid md:grid-cols-2 gap-20">
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 mb-8 border-l-2 border-nexus pl-6">Technical Architecture</h3>
                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <Terminal className="w-8 h-8 text-nexus/40" />
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">System-wide TypeScript implementation ensuring 100% type safety across the entire repository ecosystem.</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <Cpu className="w-8 h-8 text-nexus/40" />
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">High-performance Vite builds optimized for edge deployment with immediate hydration cycles.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-600 mb-8 border-l-2 border-nexus pl-6">Deployment status</h3>
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-6">
                            {[
                                { label: "Production Nodes", value: "30/30", color: "text-emerald-500" },
                                { label: "Security Audit", value: "PASSED", color: "text-nexus" },
                                { label: "Uptime Protocol", value: "99.9% ACTIVE", color: "text-slate-400" }
                            ].map((d, i) => (
                                <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                    <span className="text-slate-500">{d.label}</span>
                                    <span className={d.color}>{d.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Final Footer */}
            <footer className="border-t border-white/5 py-16 px-8 mt-20 text-center opacity-40">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4">Nexus Hub Systems • MK Deployment Engine</p>
                <div className="text-[9px] font-bold text-slate-700 uppercase tracking-widest leading-loose">
                    ALL SYSTEMS OPERATIONAL • REPO_ARCHITECTURE_V3 • 2026 MK_MODERNIZATION_PROJECT
                </div>
            </footer>
        </div>
    );
}
