import { GitFork, Link2, Mail, Heart } from "lucide-react";
import { profile } from "../../../data/profileData";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-max px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-gradient mb-1">{profile.initials}</p>
            <p className="text-sm text-primary-400">{profile.title}</p>
            <p className="text-xs text-primary-500 mt-0.5">{profile.availability}</p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { href: profile.github, Icon: GitFork },
              { href: profile.linkedin, Icon: Link2 },
              { href: `mailto:${profile.email}`, Icon: Mail },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-primary-800 text-primary-400 hover:text-white hover:bg-primary-700 transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-500">
          <p>© 2025 {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Built with <Heart size={12} className="text-red-400" /> React · Vite · TailwindCSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
