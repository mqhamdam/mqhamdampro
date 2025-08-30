import { CodeIcon } from "hugeicons-react";
import { SkillTag } from "./SkillTag";
import TechLogos from "@/utils/logos";

interface TechnologiesSectionProps {
  technologies: string[];
}

export function TechnologiesSection({ technologies }: TechnologiesSectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <CodeIcon size={28} className="text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">
          Technologies Used
        </h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <SkillTag
            key={tech}
            logo={TechLogos.getLogoByKeyword(tech)}
            tooltipMsg={tech}
            href="#"
          />
        ))}
      </div>
    </section>
  );
}