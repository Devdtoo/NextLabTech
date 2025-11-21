import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Zap, Smartphone, ShieldCheck, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../constants';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{description}</p>
  </div>
);

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => (
    <Link to={`/projects/${project.slug}`} className="group block relative overflow-hidden rounded-2xl h-[400px] shadow-md hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300" />
        <img 
            src={project.thumbnailUrl} 
            alt={project.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
            <span className="inline-block px-3 py-1 bg-primary-600/90 text-white text-xs font-semibold rounded-full mb-3 backdrop-blur-sm">
                {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{project.name}</h3>
            <p className="text-gray-200 text-sm line-clamp-2 mb-4 group-hover:text-white transition-colors">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {project.tags.slice(0,3).map(tag => (
                    <span key={tag} className="text-xs text-white/90 bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/20">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </Link>
)

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3); 

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-dark-950 py-20 lg:py-32">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                Apps that <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-500">move the world.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                NextLabTech delivers enterprise-grade mobile solutions. We specialize in high-performance architectures for ride-sharing, logistics, and fintech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  View Case Studies
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-700 text-lg font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-300">
                  Get in Touch
                </Link>
              </div>
            </div>
            
            {/* Abstract Phone Visualization */}
            <div className="relative hidden lg:block animate-slide-up">
                <div className="relative mx-auto bg-gray-800 border-gray-800 dark:border-gray-700 border-[12px] rounded-[2.5rem] h-[600px] w-[320px] shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-dark-900 relative flex flex-col">
                        {/* Mock UI Header */}
                        <div className="bg-primary-600 h-32 w-full p-6 flex flex-col justify-end shrink-0">
                             <div className="h-10 w-10 bg-white/20 rounded-full mb-4 animate-pulse"></div>
                             <div className="h-6 w-40 bg-white/20 rounded animate-pulse"></div>
                        </div>
                        {/* Mock UI Body */}
                        <div className="p-4 space-y-4 flex-1 overflow-hidden">
                            <div className="h-32 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-75"></div>
                            <div className="flex gap-4">
                                <div className="h-24 w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-100"></div>
                                <div className="h-24 w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-150"></div>
                            </div>
                            <div className="h-40 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-200"></div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-1/4 -right-4 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold">Uptime</p>
                            <p className="font-bold text-gray-900 dark:text-white">99.99%</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Work</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Highlights from our portfolio of 50+ shipped applications.</p>
                </div>
                <Link to="/projects" className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                    View All Projects <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-20 bg-white dark:bg-dark-950 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-xs bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">Our Stack</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Modern Technologies</h2>
            
            <div className="mt-12 flex flex-wrap justify-center gap-3">
                {['Android', 'Kotlin', 'Jetpack Compose', 'Flutter', 'Dart', 'Firebase', 'GraphQL', 'AWS', 'Node.js', 'Google Maps', 'WebRTC', 'Socket.IO', 'Redis'].map((tech) => (
                    <span key={tech} className="px-5 py-2 rounded-lg text-sm font-semibold bg-gray-50 dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-500 hover:text-primary-600 transition-colors cursor-default select-none">
                        {tech}
                    </span>
                ))}
            </div>
          </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Startups Choose Us</h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">We bridge the gap between freelance agility and enterprise reliability.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard 
                    icon={<Smartphone size={24} />}
                    title="Native Excellence"
                    description="Deep expertise in the Android ecosystem, ensuring your app utilizes the latest platform features."
                />
                <FeatureCard 
                    icon={<Layers size={24} />}
                    title="Scalable Architecture"
                    description="We build with Clean Architecture and SOLID principles, making your codebase maintainable for years."
                />
                <FeatureCard 
                    icon={<Zap size={24} />}
                    title="High Performance"
                    description="Obsessive about frame rates and memory usage. 60fps animations are our baseline standard."
                />
                <FeatureCard 
                    icon={<ShieldCheck size={24} />}
                    title="Reliable Delivery"
                    description="Agile methodology with clear, transparent milestones. We ship on time, every time."
                />
            </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to build?</h2>
            <p className="text-primary-100 text-xl mb-10">Let's discuss your mobile strategy and how we can help you scale.</p>
            <Link to="/contact" className="inline-block bg-white text-primary-600 font-bold px-10 py-4 rounded-xl shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                Start Your Project
            </Link>
        </div>
      </section>
    </div>
  );
}