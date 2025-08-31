import {
  Calendar03Icon,
  UserIcon,
  CheckmarkCircle01Icon,
  OfficeIcon,
} from "hugeicons-react";
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
        {project.isPersonal ? <UserIcon size={20} /> : <OfficeIcon size={20} />}
        <span>
          {project.isPersonal
            ? "Personal (Funded, Charity, Open Source) Project"
            : "Career (Commercial) Project"}
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <CheckmarkCircle01Icon size={20} className="text-green-500" />
        <span className="capitalize">{project.status}</span>
      </div>
    </div>
  );
}
