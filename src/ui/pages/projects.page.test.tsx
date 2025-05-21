import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectsPage from './projects.page'; // Assuming this is the correct path
import { sampleProjects } from '../../data/projects'; 
import { BrowserRouter } from 'react-router-dom';

// Mock react-helmet-async
vi.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  HelmetProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock ProjectGridView and ProjectListView
vi.mock('../components/project-grid-view', () => ({
  default: ({ projects, isLoading }: { projects: any[], isLoading: boolean }) => (
    <div data-testid="project-grid-view">
      {isLoading && <div>Loading...</div>}
      {projects.map(p => <div key={p.id} data-testid={`project-item-${p.id}`}>{p.name}</div>)}
    </div>
  ),
}));

vi.mock('../components/project-list-view', () => ({
  default: ({ projects, isLoading }: { projects: any[], isLoading: boolean }) => (
    <div data-testid="project-list-view">
      {isLoading && <div>Loading...</div>}
      {projects.map(p => <div key={p.id} data-testid={`project-item-${p.id}`}>{p.name}</div>)}
    </div>
  ),
}));

describe('ProjectsPage', () => {
  const renderProjectsPage = () => {
    render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    // Ensures a clean state for each test by resetting mocks or any other setup
    // For example, if we were manipulating sampleProjects (which we aren't directly here, but good practice)
  });

  test('should filter projects by search term (name)', async () => {
    renderProjectsPage();
    const searchInput = screen.getByPlaceholderText(/Name, description.../i);
    
    // Using a project name from the sample data
    const projectToFind = sampleProjects.find(p => p.name === 'E-commerce Platform');
    const partialName = 'E-commerce';

    await userEvent.type(searchInput, partialName);

    expect(screen.getByTestId(`project-item-${projectToFind!.id}`)).toHaveTextContent(projectToFind!.name);

    // Check that another project not matching the term is not present
    const projectToNotFind = sampleProjects.find(p => p.name === 'Personal Portfolio Website');
    if (projectToNotFind) {
      expect(screen.queryByTestId(`project-item-${projectToNotFind.id}`)).toBeNull();
    }
  });

  test('should filter projects by search term (description)', async () => {
    renderProjectsPage();
    const searchInput = screen.getByPlaceholderText(/Name, description.../i);
    
    const projectToFind = sampleProjects.find(p => p.description.includes('full-featured e-commerce'));
    const partialDescription = 'full-featured';

    await userEvent.type(searchInput, partialDescription);

    expect(screen.getByTestId(`project-item-${projectToFind!.id}`)).toHaveTextContent(projectToFind!.name);

    const projectToNotFind = sampleProjects.find(p => !p.description.includes(partialDescription));
    if (projectToNotFind) {
         expect(screen.queryByTestId(`project-item-${projectToNotFind.id}`)).toBeNull();
    }
  });
  
  test('should filter by a single tag', async () => {
    renderProjectsPage();
    const tagToSelect = 'React'; // Assuming 'React' is a tag in sampleProjects
    const tagButton = screen.getByRole('button', { name: tagToSelect });

    await userEvent.click(tagButton);

    const projectsWithTag = sampleProjects.filter(p => p.tags.includes(tagToSelect));
    const projectsWithoutTag = sampleProjects.filter(p => !p.tags.includes(tagToSelect));

    projectsWithTag.forEach(p => {
      expect(screen.getByTestId(`project-item-${p.id}`)).toBeInTheDocument();
    });
    projectsWithoutTag.forEach(p => {
      if (screen.queryByTestId(`project-item-${p.id}`)) { // Some might already be filtered by default view
         expect(screen.queryByTestId(`project-item-${p.id}`)).toBeNull();
      }
    });
  });

  test('should sort projects by name (A-Z)', async () => {
    renderProjectsPage();
    const sortSelect = screen.getByLabelText(/Sort by/i);
    await userEvent.selectOptions(sortSelect, 'name-asc');

    // The mocked views render projects in the order they receive them.
    // We need to check if the first project displayed matches the first project in a manually sorted list.
    const sortedProjects = [...sampleProjects].sort((a, b) => a.name.localeCompare(b.name));
    
    const renderedProjectElements = screen.getAllByTestId(/project-item-/);
    expect(renderedProjectElements[0]).toHaveTextContent(sortedProjects[0].name);
    expect(renderedProjectElements[1]).toHaveTextContent(sortedProjects[1].name);
    // Can check the last one too
    expect(renderedProjectElements[renderedProjectElements.length - 1]).toHaveTextContent(sortedProjects[sortedProjects.length -1].name);
  });
  
  test('should toggle view mode and reflect in button state', async () => {
    renderProjectsPage();
    const listButton = screen.getByRole('button', { name: /List/i });
    const gridButton = screen.getByRole('button', { name: /Grid/i });

    // Initial state check (Grid is default)
    expect(gridButton).toHaveClass('bg-indigo-600'); // Active class
    expect(listButton).not.toHaveClass('bg-indigo-600');

    await userEvent.click(listButton);
    expect(listButton).toHaveClass('bg-indigo-600');
    expect(gridButton).not.toHaveClass('bg-indigo-600');
    expect(screen.getByTestId('project-list-view')).toBeInTheDocument();
    expect(screen.queryByTestId('project-grid-view')).toBeNull();


    await userEvent.click(gridButton);
    expect(gridButton).toHaveClass('bg-indigo-600');
    expect(listButton).not.toHaveClass('bg-indigo-600');
    expect(screen.getByTestId('project-grid-view')).toBeInTheDocument();
    expect(screen.queryByTestId('project-list-view')).toBeNull();
  });

  test('should filter by multiple tags (AND logic)', async () => {
    renderProjectsPage();
    const tag1 = 'React'; 
    const tag2 = 'E-commerce'; // Choose tags that appear together in at least one project

    await userEvent.click(screen.getByRole('button', { name: tag1 }));
    await userEvent.click(screen.getByRole('button', { name: tag2 }));

    const projectsWithBothTags = sampleProjects.filter(p => p.tags.includes(tag1) && p.tags.includes(tag2));
    const projectsWithoutBothTags = sampleProjects.filter(p => !(p.tags.includes(tag1) && p.tags.includes(tag2)));

    projectsWithBothTags.forEach(p => {
      expect(screen.getByTestId(`project-item-${p.id}`)).toBeInTheDocument();
    });
    projectsWithoutBothTags.forEach(p => {
      expect(screen.queryByTestId(`project-item-${p.id}`)).toBeNull();
    });
  });

  test('should clear selected tags', async () => {
    renderProjectsPage();
    const tagToSelect = 'React';
    await userEvent.click(screen.getByRole('button', { name: tagToSelect }));
    
    // Ensure the tag is selected and filtering is applied
    const projectWithTag = sampleProjects.find(p => p.tags.includes(tagToSelect));
    expect(screen.getByTestId(`project-item-${projectWithTag!.id}`)).toBeInTheDocument();

    const clearButton = screen.getByRole('button', { name: /Clear all tags/i });
    await userEvent.click(clearButton);

    // After clearing, all projects should be visible (or at least the one we checked for)
    // and potentially others that were filtered out by the tag selection.
    // A simple check is that more projects are now visible.
    const allProjectItems = screen.getAllByTestId(/project-item-/);
    // Default view shows all sample projects (6 in this case)
    expect(allProjectItems.length).toBe(sampleProjects.length); 
  });

  test('should sort projects by name (Z-A)', async () => {
    renderProjectsPage();
    const sortSelect = screen.getByLabelText(/Sort by/i);
    await userEvent.selectOptions(sortSelect, 'name-desc');
    
    const sortedProjects = [...sampleProjects].sort((a, b) => b.name.localeCompare(a.name));
    const renderedProjectElements = screen.getAllByTestId(/project-item-/);
    
    expect(renderedProjectElements[0]).toHaveTextContent(sortedProjects[0].name);
    expect(renderedProjectElements[renderedProjectElements.length - 1]).toHaveTextContent(sortedProjects[sortedProjects.length-1].name);
  });

  test('should sort projects by date (Oldest First)', async () => {
    renderProjectsPage();
    const sortSelect = screen.getByLabelText(/Sort by/i);
    await userEvent.selectOptions(sortSelect, 'date-asc');
    
    const sortedProjects = [...sampleProjects].sort((a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime());
    const renderedProjectElements = screen.getAllByTestId(/project-item-/);

    expect(renderedProjectElements[0]).toHaveTextContent(sortedProjects[0].name);
    expect(renderedProjectElements[renderedProjectElements.length - 1]).toHaveTextContent(sortedProjects[sortedProjects.length-1].name);
  });
  
  test('should sort projects by date (Newest First - default)', async () => {
    renderProjectsPage();
    // Default is 'date-desc'
    const sortSelect = screen.getByLabelText(/Sort by/i);
    await userEvent.selectOptions(sortSelect, 'date-desc'); // Explicitly select for clarity
    
    const sortedProjects = [...sampleProjects].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
    const renderedProjectElements = screen.getAllByTestId(/project-item-/);

    expect(renderedProjectElements[0]).toHaveTextContent(sortedProjects[0].name);
    expect(renderedProjectElements[renderedProjectElements.length - 1]).toHaveTextContent(sortedProjects[sortedProjects.length-1].name);
  });

});
