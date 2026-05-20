import { motion } from "framer-motion";

export function Card({ children, className = "", hover = true, onClick }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      onClick={onClick}
      className={`bg-white rounded-2xl border border-slate-100 card-shadow ${hover ? "hover:card-shadow-hover cursor-pointer" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
