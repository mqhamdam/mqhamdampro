import { CodeIcon } from "hugeicons-react";

interface TechnologiesSectionProps {
  technologies: string[];
}

export function TechnologiesSection({
  technologies,
}: TechnologiesSectionProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <CodeIcon size={28} className="text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">Technologies Used</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {/* Chip 5x5 No skillTag */}
        {technologies.map((tech) => (
          <div
            key={tech}
            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
