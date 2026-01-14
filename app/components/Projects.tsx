'use client';

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight px-2">
              Selected Work
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-px bg-slate-400 mx-auto"></div>
            <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed px-4">
              A curated selection of architectural projects spanning cultural institutions,
              residential complexes, and sustainable developments.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Minimal CTA */}
        <div className="text-center mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-slate-200">
          <p className="text-slate-600 mb-6 sm:mb-8 font-light px-4">
            Interested in discussing your project?
          </p>
          <button
            onClick={() => {
              const footerSection = document.getElementById('footer');
              footerSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-6 sm:px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-light text-sm tracking-wider uppercase transition-all duration-300"
          >
            <span>Start a Conversation</span>
            <svg
              className="ml-2 sm:ml-3 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;