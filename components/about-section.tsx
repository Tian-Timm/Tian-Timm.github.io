"use client";

import { useState } from "react";
import type { SVGProps } from "react";
import { Github, Linkedin, Youtube, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.901 1.153h3.68l-8.035 9.182L24 22.846h-7.406l-5.8-7.585-6.64 7.585H.47l8.595-9.823L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.493h2.04L6.486 3.24H4.298L17.61 20.646Z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Github, href: "https://github.com/Tian-Timm", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/max-hou-239a97381/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/Davidgoggins666", label: "X" },
  { icon: Youtube, href: "https://www.youtube.com/@maxhou2061", label: "YouTube" },
];

const skills: string[] = [];

export function AboutSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hyt206157@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <>
      <section id="about" className="border-t border-border px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img src="/about-profile.jpg" alt="Yuntian Hou" className="h-full w-full object-cover" />
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-primary">About Me</p>
              <h2 className="mb-8 text-3xl font-light tracking-tight text-foreground md:text-4xl">The story so far</h2>

              <div className="space-y-6 text-muted-foreground">
                <p className="text-pretty text-lg leading-relaxed">
                  I am a fourth-year undergraduate student at Peking University with a background in history. Much of my work grows out of questions about how systems-data, infrastructure, and institutions-shape everyday life, especially in cities where lived experience often exceeds what official representations record.
                </p>
                <p className="text-pretty leading-relaxed">
                  My training in historical and archival research has influenced how I approach contemporary systems. I tend to pay attention to how information is produced, organized, and constrained over time, and how institutional decisions leave lasting traces in data and infrastructure. This background shapes how I think about present-day information systems and their limits.
                </p>
                <p className="text-pretty leading-relaxed">
                  My interests developed through moving between different urban environments. During my exchange in Tokyo, spending extended time navigating the city made me more attentive to everyday infrastructure and public space-how routines emerge, how movement is guided, and how systems are felt through daily use. Across my work, I use research, design, and media-based methods to examine these conditions and their consequences.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Based in Beijing</span>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {skills.length > 0 && (
            <div className="mt-20">
              <p className="mb-6 text-sm font-medium text-foreground">Skills & Tools</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/30 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="border-t border-border px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mb-10 text-3xl font-light tracking-tight text-foreground md:text-4xl">
            Get in touch
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">Email</p>
              <a
                href="mailto:hyt206157@gmail.com"
                className="text-lg text-foreground transition-colors hover:text-primary"
              >
                hyt206157@gmail.com
              </a>
              <div className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-secondary/30"
                  onClick={handleCopyEmail}
                >
                  {emailCopied ? "Copied" : "Copy Email"}
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <p className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">Resume</p>
              <p className="mb-6 text-sm text-muted-foreground">Download my latest CV in PDF format.</p>
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                asChild
              >
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Yuntian Hou</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
