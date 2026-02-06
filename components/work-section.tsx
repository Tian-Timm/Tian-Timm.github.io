"use client";

import { ArrowUpRight, Github, Map, Film, Database, Search, BarChart3, ScrollText } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function WorkSection() {
  return (
    <section id="work" className="bg-background py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-light tracking-tight text-foreground md:text-4xl">
          Selected Works
        </h2>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 auto-rows-min">
          
          {/* --- Row 1 --- */}
          
          {/* Card 1: Narrative & Voice (Video) - Spans full width */}
          <Link
            href="https://www.youtube.com/watch?v=11W8Q4qrQfs"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-muted/30 border border-border/50 md:col-span-3 aspect-video md:aspect-auto min-h-[420px]"
          >
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
               <img 
                 src="/project-1-doc.jpg" 
                 alt="Walking the Beijing Commute" 
                 className="h-full w-full object-cover opacity-80"
               />
            </div>
            
            {/* YouTube Play Overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <img
                src="/youtube_logo_icon_168737.svg"
                alt="YouTube"
                className="h-14 w-14 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="mb-2 flex gap-2">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-none">Embodied Documentary</Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-none">Urban Inquiry</Badge>
                </div>
                <h3 className="text-2xl font-medium text-white drop-shadow-sm">Walking the Beijing Commute</h3>
              </div>
            </div>
          </Link>

          {/* --- Row 2 --- */}

          {/* Card 3: The Anchor (PKU Emotion Map) - Spans Full Width */}
          <Link
            href="https://pku-affective-map.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-muted/30 border border-border/50 md:col-span-3 h-[500px]"
          >
             {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
               <img 
                  src="/project-2-map.png" 
                 alt="PKU Affective Map" 
                 className="h-full w-full object-cover"
               />
              <Map className="absolute h-24 w-24 text-white/30" />
            </div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
               <div className="max-w-3xl transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge className="bg-primary text-primary-foreground border-none">Participatory Mapping</Badge>
                  <Badge variant="outline" className="text-white border-white/30">Civic Media</Badge>
                  <Badge variant="outline" className="text-white border-white/30">Data Systems</Badge>
                </div>
                <h3 className="mb-2 text-3xl font-medium text-white md:text-4xl">PKU Affective Map</h3>
                <p className="text-lg text-white/80">A Participatory Mapping System of Lived Campus Experience</p>
              </div>
            </div>
          </Link>

          {/* --- Row 3 --- */}

          {/* Card 4: Aesthetics (Tokyo Street) - Spans 1 col */}
          <Link
            href="/photobook-tokyo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-muted/30 border border-border/50 md:col-span-1 min-h-[400px]"
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
               <img 
                 src="/project-3-photo.jpg" 
                 alt="Tokyo Street Photography" 
                 className="h-full w-full object-cover"
               />
            </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
             
             <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-2xl font-medium text-white mb-1">Tokyo Street Photography</h3>
                <span className="text-sm text-white/80 uppercase tracking-wider">Visual Research</span>
             </div>
          </Link>

          {/* Card 5: Open Source Tools - Spans 2 cols */}
          <div className="rounded-2xl bg-card border border-border/50 p-6 md:col-span-2 flex flex-col">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-light text-foreground">Open Source Experiments</h3>
                <p className="text-muted-foreground mt-1">Tools and visualizations available on GitHub</p>
              </div>
              <Github className="h-6 w-6 text-foreground" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
              
              <Link href="https://scholarscout-forphd.streamlit.app/" className="group flex flex-col rounded-xl bg-secondary/30 overflow-hidden transition-all hover:bg-secondary/50 border border-transparent hover:border-primary/20 hover:shadow-sm">
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src="/tool-1.png" 
                    alt="ScholarScout"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Search className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground text-sm">ScholarScout</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Academic Crawler</p>
                  </div>
                  <div className="flex items-center justify-end">
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-50 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </Link>

              <Link href="https://tian-timm.github.io/Entropy-Mirror/" className="group flex flex-col rounded-xl bg-secondary/30 overflow-hidden transition-all hover:bg-secondary/50 border border-transparent hover:border-primary/20 hover:shadow-sm">
                 <div className="relative h-32 overflow-hidden">
                  <img 
                    src="/tool-2.gif" 
                    alt="Entropy Mirror"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="h-4 w-4 text-indigo-500" />
                      <h4 className="font-medium text-foreground text-sm">Entropy Mirror</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">p5.js Visualization</p>
                  </div>
                   <div className="flex items-center justify-end">
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-50 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </Link>

              <Link href="https://github.com/Tian-Timm/Heart-Disease-Risk-Analysis-Data-Mining" className="group flex flex-col rounded-xl bg-secondary/30 overflow-hidden transition-all hover:bg-secondary/50 border border-transparent hover:border-primary/20 hover:shadow-sm">
                 <div className="relative h-32 overflow-hidden">
                  <img 
                    src="/tool-3.png" 
                    alt="Heart Disease Data Mining"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                       <Database className="h-4 w-4 text-red-500" />
                      <h4 className="font-medium text-foreground text-sm">Heart Disease Data Mining</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Python Analysis</p>
                  </div>
                   <div className="flex items-center justify-end">
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-50 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </Link>

              <Link href="https://the-bias-detective.streamlit.app/" className="group flex flex-col rounded-xl bg-secondary/30 overflow-hidden transition-all hover:bg-secondary/50 border border-transparent hover:border-primary/20 hover:shadow-sm">
                 <div className="relative h-32 overflow-hidden">
                  <img 
                    src="/tool-4.png" 
                    alt="The Bias Detective"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <ScrollText className="h-4 w-4 text-amber-600" />
                      <h4 className="font-medium text-foreground text-sm">The Bias Detective</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">LLM App</p>
                  </div>
                   <div className="flex items-center justify-end">
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-50 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
