
import { useState, useMemo } from "react";
import projectsData from "@/data/projects.json";
import { ProjectCard, SearchAndFilter, EmptyState, type Project } from "@/components";
import { Layout } from "@/layouts";

// Import static data
const PROJECTS: Project[] = projectsData.projects;
const ALL_TAGS: string[] = projectsData.technologies.sort();

function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter projects based on search query and selected tags
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => project.keywords.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  return (
    <Layout className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* SEO Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of web applications, mobile apps, and software solutions. 
            Built with modern technologies including React, Flutter, Python, and more.
          </p>
        </div>

        {/* Search and Filter Section */}
        <SearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          availableTags={ALL_TAGS}
          resultCount={filteredProjects.length}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && <EmptyState />}
      </div>
    </Layout>
  );
}


export default ProjectsPage;
