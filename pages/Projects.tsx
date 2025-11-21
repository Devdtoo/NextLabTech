import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Smartphone } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our diverse range of successful projects across multiple industries.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-12 space-y-8">
          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 dark:border-gray-700 rounded-2xl leading-5 bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow shadow-sm"
              placeholder="Search by name, tag, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
                onClick={() => setActiveCategory('All')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === 'All'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 border border-gray-200 dark:border-gray-700'
                }`}
            >
                All
            </button>
            {Object.values(ProjectCategory).filter(c => c !== 'All').map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="relative overflow-hidden h-56">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" /> {/* Skeleton loader placeholder effect */}
                  <img
                    src={project.thumbnailUrl}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                    onLoad={(e) => e.currentTarget.previousElementSibling?.remove()} // simple hack to remove skeleton on load
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400 shadow-sm border border-white/20">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 line-clamp-3 flex-grow">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-dark-700 text-gray-500 dark:text-gray-400 text-xs rounded-md font-medium">+{project.tags.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Key Metric</span>
                        <span className="font-bold text-gray-900 dark:text-white text-sm">{project.metrics[0].label}: {project.metrics[0].value}</span>
                    </div>
                    <Link
                        to={`/projects/${project.slug}`}
                        className="text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg font-medium text-sm inline-flex items-center transition-colors"
                    >
                        View Case <Smartphone size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white dark:bg-dark-800 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
            <Filter size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">No projects found</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">We couldn't find any projects matching your criteria.</p>
            <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('All')}}
                className="mt-6 px-6 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-100 transition-colors"
            >
                Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}