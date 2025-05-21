import React from 'react';
import { Project } from '../../models/project.model';
import ProjectCard from './project-card';

interface ProjectGridViewProps {
  projects: Project[];
  isLoading?: boolean;
}

const ProjectGridView: React.FC<ProjectGridViewProps> = ({ projects, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-500">Loading projects...</p>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-500">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGridView;
