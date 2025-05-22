import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Project } from '../../models/project.model';
import { sampleProjects } from '../../data/projects';
import ProjectGridView from '../components/project-grid-view';
import ProjectListView from '../components/project-list-view';

// Helper to get all unique tags
const getAllUniqueTags = (projects: Project[]): string[] => {
  const allTagsSet = new Set<string>();
  projects.forEach(project => {
    (project.tags || []).forEach(tag => allTagsSet.add(tag));
  });
  return Array.from(allTagsSet).sort();
};

const ProjectsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('date-desc');
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  useEffect(() => {
    setIsLoading(true); 
    const timer = setTimeout(() => {
      setAllTags(getAllUniqueTags(sampleProjects));
      setIsLoading(false); 
    }, 50); 
    return () => clearTimeout(timer); 
  }, []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredAndSortedProjects = useMemo(() => {
    let projects = [...sampleProjects];

    // Filter by search term
    if (searchTerm.trim()) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      projects = projects.filter(p =>
        p.name.toLowerCase().includes(lowerSearchTerm) ||
        p.description.toLowerCase().includes(lowerSearchTerm) ||
        (p.longDescription && p.longDescription.toLowerCase().includes(lowerSearchTerm))
      );
    }

    // Filter by tags (AND logic)
    if (selectedTags.length > 0) {
      projects = projects.filter(p =>
        selectedTags.every(tag => (p.tags || []).includes(tag))
      );
    }

    // Sort
    switch (sortOption) {
      case 'name-asc':
        projects.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        projects.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'date-asc':
        projects.sort((a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime());
        break;
      case 'date-desc':
      default:
        projects.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
    }
    return projects;
  }, [searchTerm, selectedTags, sortOption]);

  return (
    <>
      <Helmet>
        <title>My Projects | Portfolio</title>
        <meta name="description" content="Explore a curated collection of my web development projects, showcasing skills in React, Node.js, TypeScript, and more. Filter by technology, search by name, and sort by date or title." />
      </Helmet>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Filter and Sort Controls Section */}
        <div className="mb-8 p-4 sm:p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
          {/* Search Input */}
          <div className="lg:col-span-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Projects</label>
            <input
              type="text"
              id="search"
              placeholder="Name, description..."
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Sort Options */}
          <div className="lg:col-span-1">
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
            <select
              id="sort"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="date-desc">Date (Newest First)</option>
              <option value="date-asc">Date (Oldest First)</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="lg:col-span-1 flex justify-center md:justify-end items-center space-x-2 pt-4 md:pt-0">
             <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                  ${viewMode === 'grid' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
             >Grid</button>
             <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                  ${viewMode === 'list' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}
             >List</button>
          </div>
        </div>
        
        {/* Tag Filters */}
        {allTags.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Filter by Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors duration-150 ease-in-out
                    ${selectedTags.includes(tag)
                      ? 'bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-300 hover:border-gray-400'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <button 
                onClick={() => setSelectedTags([])}
                className="mt-3 text-xs text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                Clear all tags
              </button>
            )}
          </div>
        )}
      </div>

      {/* Project Display Area */}
      <div>
        {viewMode === 'grid' ? (
          <ProjectGridView projects={filteredAndSortedProjects} isLoading={isLoading} />
        ) : (
          <ProjectListView projects={filteredAndSortedProjects} isLoading={isLoading} />
        )}
      </div>
    </div>
    </>
  );
};

export default ProjectsPage;
