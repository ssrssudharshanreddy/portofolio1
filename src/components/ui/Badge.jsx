const colors = {
  accent: "bg-accent-muted text-accent border-accent/20",
  teal: "bg-teal-muted text-teal-700 border-teal/20",
  indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  slate: "bg-slate-100 text-slate-600 border-slate-200",
  green: "bg-green-50 text-green-600 border-green-200",
};

export function Badge({ children, color = "slate", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg border ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
