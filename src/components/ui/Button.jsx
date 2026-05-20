import { motion } from "framer-motion";

export function Button({ children, variant = "primary", size = "md", href, onClick, className = "", icon, ...props }) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-dark focus:ring-accent shadow-sm hover:shadow-md hover:-translate-y-0.5",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white focus:ring-accent",
    ghost: "text-primary-600 hover:text-accent hover:bg-accent-muted",
    teal: "bg-teal text-white hover:bg-teal-600 focus:ring-teal shadow-sm hover:shadow-md hover:-translate-y-0.5",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>{icon && icon}{children}</a>;
  return <motion.button whileTap={{ scale: 0.97 }} onClick={onClick} className={cls} {...props}>{icon && icon}{children}</motion.button>;
}
