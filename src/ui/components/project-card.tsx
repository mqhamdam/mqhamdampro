import React from 'react';
import { Project } from '../../models/project.model';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
      {project.imageUrl ? (
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-48 object-cover rounded-t-lg mb-4" 
        />
      ) : (
        <div data-testid="image-placeholder" className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-t-lg mb-4">
          {/* Simple SVG placeholder icon */}
          <svg className="w-16 h-16 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow">{project.description}</p>
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold mb-1 text-gray-500 uppercase tracking-wider">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold mb-1 text-gray-500 uppercase tracking-wider">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="flex justify-start items-center gap-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              View Project
            </a>
          )}
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
