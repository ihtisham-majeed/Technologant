"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ShoppingBag,
  Palette,
  Search,
  Globe,
  Database,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "MERN Stack",
    description:
      "Full-cycle development using MongoDB, Express, React, and Node.js for scalable web apps.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "WordPress",
    description:
      "Custom themes and high-performance plugins tailored to your brand's unique needs.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Shopify",
    description:
      "Conversion-focused e-commerce stores with seamless payment integration.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "User-centric interfaces and memorable brand identities that stand out.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO",
    description:
      "Data-driven strategies to dominate search rankings and drive organic traffic.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "API Integration",
    description:
      "Seamless connection of third-party services and complex backend systems.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-black">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine technical precision with creative vision to deliver
              digital products that perform.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-500 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight className="text-blue-600" />
              </div>

              <div className="mb-6 p-4 rounded-xl bg-blue-50 w-fit text-blue-600 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
