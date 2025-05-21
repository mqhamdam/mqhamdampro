import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './project-card';
import { sampleProjects } from '../../data/projects'; // Adjust path as needed
import { Project } from '../../models/project.model';

const defaultProject: Project = sampleProjects[0]; // E-commerce Platform
const projectWithoutOptionalFields: Project = {
  id: 'test-2',
  name: 'Minimal Project',
  description: 'A project with only essential fields.',
  tags: ['Minimal', 'Test'],
  technologies: ['CoreTech'],
  dateAdded: '2023-01-01',
  // imageUrl, projectUrl, sourceCodeUrl, longDescription are intentionally omitted
};


describe('ProjectCard', () => {
  test('renders project name, description, and technologies', () => {
    render(<ProjectCard project={defaultProject} />);
    expect(screen.getByText(defaultProject.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProject.description)).toBeInTheDocument();
    defaultProject.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  test('renders project tags', () => {
    render(<ProjectCard project={defaultProject} />);
    defaultProject.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  test('renders "View Project" and "Source Code" links if URLs are provided', () => {
    render(<ProjectCard project={defaultProject} />);
    const viewProjectLink = screen.getByRole('link', { name: /View Project/i });
    const sourceCodeLink = screen.getByRole('link', { name: /Source Code/i });

    expect(viewProjectLink).toBeInTheDocument();
    expect(viewProjectLink).toHaveAttribute('href', defaultProject.projectUrl);
    expect(sourceCodeLink).toBeInTheDocument();
    expect(sourceCodeLink).toHaveAttribute('href', defaultProject.sourceCodeUrl);
  });

  test('does not render "View Project" link if projectUrl is missing', () => {
    render(<ProjectCard project={projectWithoutOptionalFields} />);
    expect(screen.queryByRole('link', { name: /View Project/i })).toBeNull();
  });

  test('does not render "Source Code" link if sourceCodeUrl is missing', () => {
    render(<ProjectCard project={projectWithoutOptionalFields} />);
    expect(screen.queryByRole('link', { name: /Source Code/i })).toBeNull();
  });

  test('renders project image with alt text if imageUrl is provided', () => {
    render(<ProjectCard project={defaultProject} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', defaultProject.imageUrl);
    expect(image).toHaveAttribute('alt', defaultProject.name);
  });

  test('renders placeholder if imageUrl is not provided', () => {
    render(<ProjectCard project={projectWithoutOptionalFields} />);
    // Check for the placeholder SVG. The SVG has a <path> element.
    // A more robust way might be to add a data-testid to the placeholder div.
    // For now, let's check that the image role is not present for the main project image.
    expect(screen.queryByRole('img', { name: projectWithoutOptionalFields.name })).toBeNull();
    // And we can check for the presence of the SVG path data if it's unique enough, or a test-id on the placeholder div
    const placeholderSvg = screen.getByRole('graphics-document'); // svgs often get this role implicitly
    expect(placeholderSvg).toBeInTheDocument(); 
  });

  test('renders all provided technologies and tags', () => {
    const projectWithManyItems: Project = {
        ...defaultProject,
        technologies: ["Tech1", "Tech2", "Tech3", "Tech4"],
        tags: ["TagA", "TagB", "TagC", "TagD"]
    };
    render(<ProjectCard project={projectWithManyItems} />);
    projectWithManyItems.technologies.forEach(tech => {
        expect(screen.getByText(tech)).toBeInTheDocument();
    });
    projectWithManyItems.tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

});
