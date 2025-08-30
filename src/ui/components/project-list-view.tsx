import React from 'react';
import { Project } from '../../models/project.model';

interface ProjectListViewProps {
  projects: Project[];
  isLoading?: boolean;
}

const ProjectListView: React.FC<ProjectListViewProps> = ({ projects, isLoading }) => {
  if (isLoading) {
    return <p className="text-center text-gray-500 py-10">Loading projects...</p>;
  }

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-500 py-10">No projects found.</p>;
  }

  return (
    <div className="space-y-6 p-4 sm:p-6">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col sm:flex-row gap-4"
        >
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full sm:w-36 h-40 sm:h-auto object-cover rounded-md flex-shrink-0"
            />
          ) : (
            <div className="w-full sm:w-36 h-40 sm:h-32 bg-gray-100 flex items-center justify-center rounded-md text-gray-400 flex-shrink-0">
              {/* Simple SVG placeholder icon */}
              <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          )}
          <div className="flex-grow flex flex-col">
            <h3 className="text-xl font-semibold mb-1 text-gray-800">{project.name}</h3>
            <p className="text-gray-600 text-sm mb-2 flex-grow">{project.description}</p>
            
            <div className="mb-2">
              <span className="text-xs text-gray-500">
                Added on: {new Date(project.dateAdded).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold mb-1 text-gray-500 uppercase tracking-wider sr-only">Technologies:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-700 px-2 py-0.5 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className="mb-3">
                <h4 className="text-xs font-semibold mb-1 text-gray-500 uppercase tracking-wider sr-only">Tags:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-0.5 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-auto pt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
                >
                  View Project
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectListView;
