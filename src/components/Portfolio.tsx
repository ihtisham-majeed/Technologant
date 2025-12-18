/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "Shake Hub",
    category: "Full Stack / MERN",
    image:
      "https://zaheeralidev.vercel.app/_next/image?url=%2Fthumbnails%2Fshakehub.png&w=1920&q=75",
    description:
      "A high-performance full-stack milkshake ordering platform with a smooth UI built using MERN stack.",
    link: "https://shakehub.netlify.app/",
  },
  {
    title: "Nexus Dashboard",
    category: "React / Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description:
      "Enterprise-grade analytics platform processing millions of data points daily.",
  },
  {
    title: "Aura Brand Identity",
    category: "Design / Branding",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    description:
      "Complete visual identity overhaul for a luxury lifestyle brand.",
  },
  {
    title: "Vortex SaaS",
    category: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    description:
      "Project management tool for remote teams with real-time collaboration.",
  },
];

export default function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-black">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Works
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A showcase of our most ambitious projects and creative endeavors.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 hover:border-blue-600 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-200 hover:border-blue-600 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_48%] min-w-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 bg-gray-100 border border-gray-200">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                      <div className="p-3 rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {/* Category and View */}
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold tracking-wider text-gray-600 border border-gray-300 px-4 py-2 rounded-full uppercase w-fit bg-gray-50">
                        {project.category}
                      </span>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-600 border border-gray-300 px-4 py-2 rounded-full uppercase w-fit hover:text-blue-600 hover:border-blue-600 transition bg-gray-50"
                        >
                          <Globe size={13} />
                          View
                        </a>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
