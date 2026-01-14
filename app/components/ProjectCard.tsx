'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="relative overflow-hidden bg-white border border-slate-200 transition-all duration-500 hover:border-slate-300 hover:shadow-lg">
        {/* Project Image */}
        <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-slate-100">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Year */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.year}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 sm:p-8">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300 leading-tight">
              {project.title}
            </h3>

            <div className="space-y-1 text-sm text-slate-600 font-light">
              <p>{project.role}</p>
              <p className="text-slate-500">{project.location}</p>
            </div>
          </div>

          {/* Minimal arrow */}
          <div className="mt-4 sm:mt-6 flex justify-end">
            <div className="w-6 sm:w-8 h-px bg-slate-300 group-hover:bg-slate-600 group-hover:w-10 sm:group-hover:w-12 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;