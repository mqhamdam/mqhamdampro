import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Layout } from "@/layouts";
import {
  SEOHead,
  LoadingSpinner,
  ProjectHero,
  TechnologiesSection,
  FeaturesSection,
  ProjectGallery,
  type Project,
} from "@/components";
import { ArrowLeft01Icon } from "hugeicons-react";
import { Divider } from "antd";
import projectsData from "@/data/projects.json";

const PROJECTS: Project[] = projectsData.projects;

export function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and find project
    const projectId = parseInt(id || "0", 10);
    const foundProject = PROJECTS.find((p) => p.id === projectId);

    setTimeout(() => {
      setProject(foundProject || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-500 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <ArrowLeft01Icon size={20} />
            Back to Projects
          </a>
        </div>
      </Layout>
    );
  }


  return (
    <Layout>
      {/* SEO Head */}
      <SEOHead
        title={`${project.title} - Hamdam's Portfolio`}
        description={project.description}
        keywords={project.keywords}
        image={project.image}
        url={`https://mqhamdam.pro/projects/${project.id}`}
        type="article"
      />

      {/* Hero Section */}
      <ProjectHero project={project} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Technologies Used */}
        <TechnologiesSection technologies={project.keywords} />

        {/* Project Features */}
        {project.key_features && project.key_features.length > 0 && (
          <FeaturesSection features={project.key_features} />
        )}

        {/* Technical Highlights */}
        {/* <TechnicalHighlights highlights={technicalHighlights} /> */}

        {/* Project Gallery/Screenshots */}
        {project.image_gallery && project.image_gallery.length > 0 && (
          <ProjectGallery images={project.image_gallery} />
        )}

        {/* Related Projects */}
        <section>
          <Divider>
            <h2 className="text-2xl font-bold text-gray-900">More Projects</h2>
          </Divider>
          <div className="text-center pt-8">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
            >
              View All Projects
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ProjectDetailsPage;
