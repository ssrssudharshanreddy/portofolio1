import { motion } from "framer-motion";
import { ArrowDown, GitFork, Link2, Mail, Sparkles } from "lucide-react";
import { profile } from "../../../data/profileData";
import { Button } from "../../ui/Button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const stats = [
  { num: "3", label: "Live Projects" },
  { num: "9.25", label: "CGPA / 10" },
  { num: "5+", label: "Technologies" },
];

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 section-padding bg-gradient-to-br from-slate-50 via-white to-accent-muted/30">
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-semibold text-accent mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              {profile.status}
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-primary-900 mb-6">
              {profile.shortName}
              <br />
              <span className="text-gradient">Sudharshan</span>
              <br />
              Reddy
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="text-lg text-primary-500 leading-relaxed mb-4 max-w-lg">
              {profile.title}
            </motion.p>

            <motion.p {...fadeUp(0.35)} className="text-base text-primary-400 leading-relaxed mb-10 max-w-lg">
              {profile.tagline}
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-10">
              <Button href="#projects" size="lg">
                View Projects
              </Button>
              <Button href={`mailto:${profile.email}`} variant="outline" size="lg">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-primary-500 hover:text-accent hover:border-accent/30 transition-all shadow-sm">
                <GitFork size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-primary-500 hover:text-accent hover:border-accent/30 transition-all shadow-sm">
                <Link2 size={18} />
              </a>
              <a href={`mailto:${profile.email}`}
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-primary-500 hover:text-accent hover:border-accent/30 transition-all shadow-sm">
                <Mail size={18} />
              </a>
              <span className="text-sm text-primary-400 ml-1">{profile.email}</span>
            </motion.div>
          </div>

          {/* RIGHT — Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl border border-slate-100 card-shadow p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-teal flex items-center justify-center text-white font-bold text-lg">
                    {profile.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900 text-sm">{profile.name}</p>
                    <p className="text-xs text-primary-400">{profile.university}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-slate-50 rounded-2xl p-4 text-center">
                      <p className="text-2xl font-bold text-gradient mb-0.5">{s.num}</p>
                      <p className="text-xs text-primary-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {["React · Firebase · Vercel", "Python · SciPy · Optimization", "GenAI · Agentic AI · LLMs"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
                      <Sparkles size={14} className="text-accent flex-shrink-0" />
                      <span className="text-xs font-medium text-primary-600 font-mono">{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-primary-400">{profile.batch}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal bg-teal-muted px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" /> Available now
                  </span>
                </div>
              </div>

              {/* Decorative blobs */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-muted rounded-full blur-2xl opacity-60 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-muted rounded-full blur-2xl opacity-60 -z-10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-xs text-primary-400 hover:text-accent transition-colors">
            <span>Scroll to explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
