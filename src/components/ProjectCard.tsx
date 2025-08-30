interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  keywords: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  status: string;
  startDate: string;
  endDate: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
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
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full">
      {/* Project Image or Fallback */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden flex-shrink-0">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={handleImageError}
              loading="lazy"
            />
            {/* Fallback for when image fails to load */}
            <div className="image-fallback absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 hidden items-center justify-center">
              <h3 className="text-white text-xl font-bold text-center px-4">
                {project.title}
              </h3>
            </div>
          </>
        ) : (
          /* Default fallback when no image provided */
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold text-center px-4">
              {project.title}
            </h3>
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {project.title}
        </h2>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Keywords/Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.keywords.slice(0, 4).map(keyword => (
            <span
              key={keyword}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
            >
              {keyword}
            </span>
          ))}
          {project.keywords.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
              +{project.keywords.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons - Pushed to bottom */}
        <div className="flex gap-2 mt-auto">
          {/* Details Button - Always present */}
          <a
            href={`/projects/${project.id}`}
            className="flex-1 bg-gray-900 text-white text-center py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Details
          </a>
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export type { Project };