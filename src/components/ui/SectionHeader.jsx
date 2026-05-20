import { motion } from "framer-motion";

export function SectionHeader({ tag, title, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      {tag && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3">
          <span className="w-6 h-px bg-accent inline-block" />
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-1 mb-3">{title}</h2>
      {subtitle && <p className="text-primary-500 text-base max-w-xl leading-relaxed">{center ? subtitle : subtitle}</p>}
    </motion.div>
  );
}
