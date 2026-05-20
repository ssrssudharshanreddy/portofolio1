import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitFork, Link2, Send, CheckCircle } from "lucide-react";
import { profile } from "../../../data/profileData";
import { SectionHeader } from "../../ui/SectionHeader";
import { Button } from "../../ui/Button";

const contactInfo = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

export function Contact() {
  




  return (
    <section id="contact" className="bg-white section-padding">
      <div className="container-max">
        <SectionHeader
          tag="Contact"
          title="Let's work together"
          subtitle="Open to AI/ML internships, GenAI projects, and collaborations. Reach out anytime."
        />
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-base leading-relaxed text-primary-500">
              I'm actively seeking internship opportunities in AI/ML and GenAI engineering. Whether you have a role, a project idea, or just want to talk about agentic systems — I'd love to hear from you.
            </p>

            <div className="mb-8 space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 bg-slate-50 rounded-xl px-4 py-3.5">
                  <div className="flex items-center justify-center flex-shrink-0 rounded-lg w-9 h-9 bg-accent-muted">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-400 mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-sm font-medium transition-colors text-primary-800 hover:text-accent">{value}</a>
                      : <p className="text-sm font-medium text-primary-800">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-primary-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-all">
                <GitFork size={16} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all">
                <Link2 size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          
        </div>
      </div>
    </section>
  );
}
