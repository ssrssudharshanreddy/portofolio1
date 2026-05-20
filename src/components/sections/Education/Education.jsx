import { motion } from "framer-motion";
import { GraduationCap, Star, BookOpen, Code } from "lucide-react";
import { profile } from "../../../data/profileData";
import { SectionHeader } from "../../ui/SectionHeader";

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Web Technologies",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
];

const selfLearning = [
  { label: "Generative AI", status: "Active" },
  { label: "Agentic Systems", status: "Active" },
  { label: "LangChain", status: "Learning" },
  { label: "Prompt Engineering", status: "Active" },
  { label: "Machine Learning Fundamentals", status: "Learning" },
];

export function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50">
      <div className="container-max">
        <SectionHeader tag="Education" title="Academic background" />
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-slate-100 card-shadow p-7"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent-muted flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary-900 text-base">{profile.degree}</h3>
                <p className="text-sm text-primary-500 mt-0.5">{profile.university}</p>
                <p className="text-xs text-primary-400 mt-0.5">{profile.partnership}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-primary-400 mb-1">CGPA</p>
                <p className="text-2xl font-bold text-gradient">{profile.cgpa}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-primary-400 mb-1">Batch</p>
                <p className="text-lg font-bold text-primary-800">{profile.batch}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen size={12} /> Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="text-xs bg-slate-50 border border-slate-200 text-primary-600 px-3 py-1.5 rounded-lg">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Self-learning card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-100 card-shadow p-7"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-muted flex items-center justify-center flex-shrink-0">
                <Code size={22} className="text-teal" />
              </div>
              <div>
                <h3 className="font-bold text-primary-900 text-base">Self-Directed Learning</h3>
                <p className="text-sm text-primary-500 mt-0.5">AI/ML & Engineering Focus</p>
                <p className="text-xs text-primary-400 mt-0.5">Beyond the classroom</p>
              </div>
            </div>

            <p className="text-sm text-primary-500 leading-relaxed mb-5">
              Actively pursuing hands-on learning in Generative AI and agentic systems through project-based development — all three portfolio projects were built during the first year of university.
            </p>

            <div className="space-y-2.5">
              {selfLearning.map(({ label, status }) => (
                <div key={label} className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3">
                  <span className="text-sm text-primary-700 font-medium">{label}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                    status === "Active" ? "bg-teal-muted text-teal-700" : "bg-accent-muted text-accent"
                  }`}>{status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
