import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Project Not Found</h1>
          <Link to="/projects" className="mt-4 inline-flex items-center text-primary-600 hover:underline">
            <ArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Dummy chart data for visual effect
  const chartData = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 35 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 80 },
    { name: 'May', value: 95 },
    { name: 'Jun', value: 120 },
  ];

  return (
    <div className="bg-white dark:bg-dark-950 min-h-screen transition-colors duration-300">
        {/* Hero Header */}
      <div className="relative bg-gray-900 h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
             <img src={project.thumbnailUrl} alt={project.name} className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                <Link to="/projects" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors hover:-translate-x-1 transform duration-200">
                    <ArrowLeft size={20} className="mr-2" /> Back to Projects
                </Link>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in">
                    <div>
                        <div className="inline-block px-4 py-1.5 bg-primary-600 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wide shadow-lg">
                            {project.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">{project.name}</h1>
                        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">{project.shortDescription}</p>
                    </div>
                    <div className="shrink-0">
                         <button className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-3 rounded-xl font-bold shadow-xl transition-all hover:scale-105 flex items-center">
                            Live Demo <ExternalLink size={18} className="ml-2" />
                         </button>
                    </div>
                </div>
             </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
                
                {/* Challenge & Solution */}
                <section className="animate-slide-up">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span className="w-1 h-8 bg-primary-600 rounded-full mr-4"></span>
                        Challenge & Solution
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                        {project.fullDescription}
                    </p>
                </section>

                {/* Key Features Grid */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                         <span className="w-1 h-8 bg-primary-600 rounded-full mr-4"></span>
                         Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start p-4 bg-gray-50 dark:bg-dark-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                                <span className="ml-3 text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Tech Stack Tags */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span className="w-1 h-8 bg-primary-600 rounded-full mr-4"></span>
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-semibold shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </section>

                 {/* Gallery */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <span className="w-1 h-8 bg-primary-600 rounded-full mr-4"></span>
                        Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.galleryUrls.map((url, index) => (
                            <div key={index} className="group relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-dark-800">
                                <img src={url} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                {/* Metrics Card */}
                <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Project Impact</h3>
                    
                    <div className="space-y-8">
                        {project.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col border-b border-gray-100 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                                <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">{metric.label}</span>
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-700">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Growth Trajectory</h4>
                        <div className="h-32 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" hide />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                                        cursor={{fill: 'transparent'}}
                                    />
                                    <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 4, 4]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}