'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Name */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 leading-[0.9] tracking-tight">
              Ezekiel
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 leading-[0.9] tracking-tight">
              Oghojafor Ubor
            </h1>
          </div>

          {/* Title */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-light tracking-widest uppercase px-2">
              Architect & Designer
            </h2>

            {/* Divider */}
            <div className="w-16 sm:w-20 lg:w-24 h-px bg-slate-300 mx-auto"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 font-light leading-relaxed max-w-4xl mx-auto px-2">
            Context-driven architecture shaped by culture, craft, and clarity.
          </p>

          {/* CTA Buttons */}
          <div className="pt-8 sm:pt-10 lg:pt-12 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:items-center sm:justify-center">
            <button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-slate-900 hover:bg-slate-800 text-white font-light text-base sm:text-lg tracking-wide transition-all duration-300"
            >
              <span>View Work</span>
              <svg
                className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <a
              href="/Ezekiel-Oghojafor-Ubor-Resume.txt"
              download="Ezekiel-Oghojafor-Ubor-Resume.txt"
              className="group inline-flex items-center px-8 sm:px-10 lg:px-12 py-3 sm:py-4 border border-slate-300 hover:border-slate-600 text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 font-light text-base sm:text-lg tracking-wide transition-all duration-300"
            >
              <svg
                className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-8 bg-slate-400"></div>
      </div>
    </section>
  );
};

export default Hero;