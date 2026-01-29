"use client";

export default function About() {
  return (
    <section
      className="
        py-24 px-6
        bg-white dark:bg-[#0f0f0f]
      "
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-black dark:text-white text-center">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
            About
          </span>
        </h2>

        <span className="block h-0.5 w-28 bg-linear-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-12"></span>

        <div
          className="
            text-left space-y-6 text-lg leading-relaxed font-light mb-12
            text-slate-700 dark:text-slate-400
            bg-white/80 dark:bg-transparent
           
          "
        >
          <p>
            Technologant is a modern software company delivering end-to-end
            digital solutions for startups and growing businesses. We build
            powerful applications using the{" "}
            <span className="text-slate-900 dark:text-white font-medium">
              MERN Stack
            </span>
            , create conversion focused{" "}
            <span className="text-slate-900 dark:text-white font-medium">
              Shopify stores
            </span>
            , and develop fully customized{" "}
            <span className="text-slate-900 dark:text-white font-medium">
              WordPress websites
            </span>
            .
          </p>

          <p>
            We also design high-performance{" "}
            <span className="text-slate-900 dark:text-white font-medium">
              mobile applications
            </span>
            , implement advanced{" "}
            <span className="text-slate-900 dark:text-white font-medium">
              SEO strategies
            </span>
            , and handle complex{" "}
            <span className="text-slate-900 dark:text-white font-medium">
              API integrations
            </span>{" "}
            to ensure seamless connectivity across platforms.
          </p>

          <p>
            At Technologant, we focus on performance, scalability, and user
            experience. Every project is built with precision, transparency, and
            long-term value in mind.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div className="border-l-2 border-indigo-600/80 dark:border-indigo-600 pl-4">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
              2+
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Projects Delivered
            </p>
          </div>

          <div className="border-l-2 border-indigo-600/80 dark:border-indigo-600 pl-4">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
              2+
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Global Clients
            </p>
          </div>

          <div className="border-l-2 border-indigo-600/80 dark:border-indigo-600 pl-4">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
              24/7
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
