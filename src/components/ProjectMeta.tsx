import { Calendar03Icon, UserIcon, CheckmarkCircle01Icon } from "hugeicons-react";
import type { Project } from "./ProjectCard";

interface ProjectMetaProps {
  project: Project;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div className="flex flex-wrap gap-6 mb-8">
      <div className="flex items-center gap-2 text-gray-600">
        <Calendar03Icon size={20} />
        <span>
          {project.startDate} - {project.endDate}
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <UserIcon size={20} />
        <span>Solo Project</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <CheckmarkCircle01Icon size={20} className="text-green-500" />
        <span className="capitalize">{project.status}</span>
      </div>
    </div>
  );
}