import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitFork, X, ChevronRight, Zap } from "lucide-react";
import { projects } from "../../../data/projectData";
import { SectionHeader } from "../../ui/SectionHeader";
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";

const colorMap = {
  accent: { border: "border-accent/20", badge: "accent", dot: "bg-accent", header: "from-accent-muted to-white" },
  teal: { border: "border-teal/20", badge: "teal", dot: "bg-teal", header: "from-teal-muted to-white" },
  indigo: { border: "border-indigo-200", badge: "indigo", dot: "bg-indigo-500", header: "from-indigo-50 to-white" },
};

function ProjectModal({ project, onClose }) {
  const c = colorMap[project.color];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl card-shadow w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-6 bg-gradient-to-br ${c.header} rounded-t-3xl border-b border-slate-100`}>
          <div className="flex justify-between items-start">
            <div>
              <Badge color={c.badge} className="mb-3">{project.type}</Badge>
              <h3 className="text-xl font-bold text-primary-900">{project.title}</h3>
              <p className="text-sm text-primary-500 mt-1">{project.subtitle}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100 text-primary-400 transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="p-6 space-y-5">
          <div>
            <h4 className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">Problem</h4>
            <p className="text-sm text-primary-600 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">Solution</h4>
            <p className="text-sm text-primary-600 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">Impact</h4>
            <p className="text-sm text-primary-600 leading-relaxed">{project.impact}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-primary-600">
                  <ChevronRight size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-slate-50 border border-slate-200 text-primary-600 text-xs font-medium px-3 py-1.5 rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button href={project.demo} size="sm">
              <ExternalLink size={14} /> Live Demo
            </Button>
            <Button href={project.github} variant="outline" size="sm">
              <GitFork size={14} /> GitHub
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const c = colorMap[project.color];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.55 }}
        whileHover={{ y: -5 }}
        onClick={() => setOpen(true)}
        className={`bg-white rounded-2xl border ${c.border} card-shadow hover:card-shadow-hover cursor-pointer overflow-hidden group`}
      >
        <div className={`h-2 bg-gradient-to-r from-${project.color === 'accent' ? 'accent' : project.color === 'teal' ? 'teal' : 'indigo-500'} to-transparent`} />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${c.dot}`} />
              <Badge color={c.badge}>{project.status}</Badge>
            </div>
            <span className="text-xs text-primary-300 font-mono">0{project.id}</span>
          </div>
          <h3 className="text-lg font-bold text-primary-900 mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
          <p className="text-xs text-primary-400 mb-3">{project.subtitle}</p>
          <p className="text-sm text-primary-500 leading-relaxed mb-5 line-clamp-2">{project.problem}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="bg-slate-50 border border-slate-200 text-primary-500 text-xs px-2.5 py-1 rounded-lg">{t}</span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs text-primary-400 px-2.5 py-1">+{project.tech.length - 4} more</span>
            )}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex gap-3">
              <a href={project.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                className="text-primary-400 hover:text-accent transition-colors">
                <GitFork size={16} />
              </a>
              <a href={project.demo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
                className="text-primary-400 hover:text-accent transition-colors">
                <ExternalLink size={16} />
              </a>
            </div>
            <span className="text-xs text-accent font-medium group-hover:gap-2 flex items-center gap-1">
              View details <ChevronRight size={12} />
            </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader
          tag="Projects"
          title="Featured work"
          subtitle="All three projects are production-deployed, open-source, and solving real problems."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a href={projects[0].github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-accent transition-colors">
            <GitFork size={16} /> View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
