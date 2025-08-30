import { ArrowLeft01Icon } from "hugeicons-react";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectActionButtons } from "./ProjectActionButtons";
import type { Project } from "./ProjectCard";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const fallback = parent.querySelector('.image-fallback');
      if (fallback) {
        (fallback as HTMLElement).style.display = 'flex';
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft01Icon size={20} />
            Back to Projects
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {project.title}
              </h1>
              {project.featured && (
                <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Project Meta */}
            <ProjectMeta project={project} />

            {/* Action Buttons */}
            <ProjectActionButtons project={project} />
          </div>

          {/* Project Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-96 object-cover"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="image-fallback absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 hidden items-center justify-center">
                    <h3 className="text-white text-2xl font-bold text-center px-6">
                      {project.title}
                    </h3>
                  </div>
                </>
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center px-6">
                    {project.title}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}