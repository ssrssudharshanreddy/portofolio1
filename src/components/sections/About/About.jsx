import { motion } from "framer-motion";
import { GraduationCap, MapPin, Target, Zap } from "lucide-react";
import { profile } from "../../../data/profileData";
import { SectionHeader } from "../../ui/SectionHeader";

const highlights = [
  { icon: Zap, label: "3 Production Projects", sub: "All live · All open-source", color: "text-accent bg-accent-muted" },
  { icon: GraduationCap, label: "CGPA 3.7/4.0 ", sub: profile.university, color: "text-teal bg-teal-muted" },
  { icon: MapPin, label: "Allagadda, AP", sub: "Available Remote / India", color: "text-indigo-500 bg-indigo-50" },
  { icon: Target, label: "AI/ML Focus", sub: "GenAI · Agentic AI · LLMs", color: "text-amber-600 bg-amber-50" },
];

export function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-max">
        <SectionHeader tag="About Me" title="Who I am &amp; what I build" />

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-base leading-relaxed text-primary-600">
              {profile.about}
            </p>
            <p className="mb-8 text-base leading-relaxed text-primary-600">
              My background in mathematical optimization — gradient vectors, Hessian matrices, KKT conditions — gives me a foundation that most frontend-only students lack. I'm actively expanding into <span className="font-medium text-accent">LangChain, prompt engineering, and LLM-powered agentic pipelines</span>.
            </p>
            <div className="flex items-start gap-3 p-5 border bg-accent-muted/50 border-accent/10 rounded-2xl">
              <Target size={20} className="text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed text-primary-600">
                <span className="font-semibold text-primary-900">Career Goal: </span>
                {profile.goal}
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, sub, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 transition-all bg-white border border-slate-100 rounded-2xl card-shadow hover:card-shadow-hover"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                  <Icon size={18} />
                </div>
                <p className="text-sm font-semibold text-primary-900 mb-0.5">{label}</p>
                <p className="text-xs text-primary-400">{sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
