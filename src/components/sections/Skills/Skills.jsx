import { motion } from "framer-motion";
import { Brain, Monitor, Server, Calculator, Wrench } from "lucide-react";
import { skillCategories } from "../../../data/skillData";
import { SectionHeader } from "../../ui/SectionHeader";

const iconMap = { Brain, Monitor, Server, Calculator, Wrench };
const colorMap = {
  accent: { bar: "bg-accent", bg: "bg-accent-muted", text: "text-accent", border: "border-accent/20" },
  teal: { bar: "bg-teal", bg: "bg-teal-muted", text: "text-teal-700", border: "border-teal/20" },
  indigo: { bar: "bg-indigo-500", bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
  amber: { bar: "bg-amber-500", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  slate: { bar: "bg-slate-500", bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
};

function SkillBar({ name, level, color, index }) {
  const c = colorMap[color];
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-primary-700">{name}</span>
        <span className="text-xs text-primary-400 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${c.bar}`}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container-max">
        <SectionHeader
          tag="Skills"
          title="Technologies & expertise"
          subtitle="Actively building expertise in GenAI and agentic AI systems alongside production full-stack skills."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const Icon = iconMap[cat.icon];
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl border border-slate-100 card-shadow p-6 hover:card-shadow-hover transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${c.bg} ${c.text}`}>
                    {Icon && <Icon size={16} />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-900">{cat.label}</p>
                    <p className="text-xs text-primary-400">{cat.skills.length} skills</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill, idx) => (
                    <SkillBar key={skill.name} {...skill} color={cat.color} index={idx} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Learning banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-accent-muted to-teal-muted border border-accent/10 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-primary-900 mb-1">Currently Learning</p>
            <p className="text-xs text-primary-500">Expanding my AI/ML toolkit every week</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["LangChain", "OpenAI API", "Vector DBs", "HuggingFace", "FastAPI"].map((t) => (
              <span key={t} className="bg-white border border-accent/20 text-accent text-xs font-medium px-3 py-1.5 rounded-lg">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
