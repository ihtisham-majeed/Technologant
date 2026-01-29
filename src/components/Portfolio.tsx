"use client";

import Image from "next/image";
import { Globe } from "lucide-react";
import { FiGithub } from "react-icons/fi"; // For source button

interface Portfolio {
  title: string;
  desc: string;
  tech: string[];
  live: string;
  thumbnail: string;
}

const projects: Portfolio[] = [
  {
    title: "Shake Hub",
    desc: "A full-stack milkshake ordering platform with a smooth UI built using React, Tailwind CSS, and Framer Motion. Backend uses Node.js, Express, and MongoDB for authentication, product management, and orders.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    live: "https://shakehub.netlify.app/",
    thumbnail: "/thumbnails/shakehub.png",
  },
  {
    title: "Apex Presentation",
    desc: "A full-stack presentation builder app that allows users to create, edit, and share presentations online. Built with React, Tailwind CSS, and Framer Motion. Node.js, Express, MongoDB backend for user management.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    live: "https://apexpresentation.netlify.app/",
    thumbnail: "/thumbnails/apex.png",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white dark:bg-[#0f0f0f]" id="portfolio">
      <div className="w-11/12 md:w-4/5 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-black dark:text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Work
            </span>
          </h2>
          <span className="block h-0.5 w-28 bg-indigo-600 rounded-full mx-auto"></span>
        </div>

        <div className="grid sm:grid-cols-2 gap-15">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#0f0f0f] border border-gray-100 dark:border-white/10 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-56 bg-gray-100 dark:bg-white/5">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {p.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm grow">
                  {p.desc}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="bg-indigo-50 text-indigo-700 dark:bg-white/5 dark:text-indigo-300 px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
