import { Github01Icon, CallInternal02Icon } from "hugeicons-react";
import type { Project } from "./ProjectCard";

interface ProjectActionButtonsProps {
  project: Project;
}

export function ProjectActionButtons({ project }: ProjectActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
        >
          <CallInternal02Icon size={20} />
          Live Demo
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium"
        >
          <Github01Icon size={20} />
          View Code
        </a>
      )}
    </div>
  );
}