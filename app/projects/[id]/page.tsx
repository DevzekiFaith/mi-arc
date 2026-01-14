import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectById } from '../../data/projects';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  // Group images by type for better organization
  const plans = project.images.filter(img => img.type === 'plan');
  const sections = project.images.filter(img => img.type === 'section');
  const elevations = project.images.filter(img => img.type === 'elevation');
  const renders = project.images.filter(img => img.type === 'render');
  const sitePhotos = project.images.filter(img => img.type === 'site');

  const imageGroups = [
    { title: 'Plans', images: plans },
    { title: 'Sections', images: sections },
    { title: 'Elevations', images: elevations },
    { title: 'Renders', images: renders },
    { title: 'Site Photos', images: sitePhotos },
  ].filter(group => group.images.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            <Link href="/" className="text-base sm:text-lg font-light tracking-wider text-slate-900 hover:text-slate-700 transition-colors">
              <span className="hidden sm:inline">E.O. Ubor</span>
              <span className="sm:hidden">E.O.</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-4 sm:px-6 py-2 text-sm font-light text-slate-700 hover:text-slate-900 transition-colors"
            >
              ← Back to Work
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Project Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
                    {project.title}
                  </h1>
                  <div className="w-10 sm:w-12 h-px bg-slate-400"></div>
                </div>
                <div className="space-y-2 text-sm sm:text-base text-slate-600 font-light">
                  <p><span className="text-slate-900 font-normal">Role:</span> {project.role}</p>
                  <p><span className="text-slate-900 font-normal">Location:</span> {project.location}</p>
                  <p><span className="text-slate-900 font-normal">Year:</span> {project.year}</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-64 sm:h-72 lg:h-96 overflow-hidden bg-slate-100">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
          {imageGroups.map((group) => (
            <div key={group.title} className="space-y-8 sm:space-y-12">
              <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
                {group.title}
              </h2>
                <div className="w-10 sm:w-12 h-px bg-slate-400"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {group.images.map((image, index) => (
                  <div key={index} className="space-y-3 sm:space-y-4">
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-sm text-slate-600 font-light leading-relaxed px-2 sm:px-0">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
              Explore More Work
            </h2>
            <div className="w-10 sm:w-12 h-px bg-slate-400 mx-auto"></div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 sm:px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-light text-sm tracking-wider uppercase transition-all duration-300"
              >
                <span>View All Work</span>
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
              </Link>
              <Link
                href="/#footer"
                className="inline-flex items-center px-6 sm:px-8 py-3 border border-slate-300 hover:border-slate-600 text-slate-700 hover:text-slate-900 font-light text-sm tracking-wider uppercase transition-all duration-300"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;