import React, { useState, useEffect, useMemo } from 'react';
import { 
  Menu, X, Moon, Sun, Smartphone, Github, Twitter, Linkedin, 
  ArrowRight, Layers, Zap, ShieldCheck, TrendingUp, Search, 
  Filter, ExternalLink, CheckCircle, Award, Briefcase, Code, 
  Coffee, Mail, Phone, MapPin, Send, Loader2, AlertCircle, CheckCircle2, ChevronRight
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PROJECTS, TEAM } from './constants';
import { ProjectCategory, Project } from './types';

// --- Components ---

const Navbar = ({ darkMode, toggleTheme }: { darkMode: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'projects' },
    // { name: 'Team', id: 'team' }, // removed "Team" from header per request
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <Smartphone size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              NextLab<span className="text-primary-600">Tech</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-gray-500 dark:text-gray-400">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-gray-800 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2 shadow-xl">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-800 hover:text-primary-600"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const chartData = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 35 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 80 },
    { name: 'May', value: 95 },
    { name: 'Jun', value: 120 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="bg-white dark:bg-dark-900 w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden animate-slide-up">
        
        <div className="relative h-64 sm:h-80 shrink-0">
          <img src={project.thumbnailUrl} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 text-left">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-2">{project.name}</h2>
            <p className="text-gray-200 text-sm sm:text-lg max-w-2xl line-clamp-2">{project.shortDescription}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-12 no-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Layers size={20} className="text-primary-600 mr-2" /> Challenge & Solution
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Zap size={20} className="text-primary-600 mr-2" /> Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start p-3 bg-gray-50 dark:bg-dark-800 rounded-lg border border-gray-100 dark:border-gray-700">
                      <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                      <span className="ml-3 text-sm text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">Impact Metrics</h4>
                <div className="space-y-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 h-32 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 4, 4]} />
                      <Tooltip 
                        cursor={{fill: 'transparent'}}
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center">
                Visit Live Site <ExternalLink size={16} className="ml-2" />
              </button>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Visual Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.galleryUrls.map((url, index) => (
                <div key={index} className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 dark:bg-dark-800 shadow-md">
                  <img src={url} alt={`Gallery ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full text-left">
    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{description}</p>
  </div>
);

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // EmailJS configuration (filled from user)
  const EMAILJS_SERVICE_ID = 'service_6uoqu1r';
  const EMAILJS_TEMPLATE_ID = 'template_8kqwjaq';
  const EMAILJS_PUBLIC_KEY = 'L6CdG8-4T1VpRe7MC';

  useEffect(() => {
    try {
      // initialize EmailJS (optional when passing public key to send, but helps debugging)
      // this makes SDK ready and will surface init-time errors in console
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (emailjs as any).init && (emailjs as any).init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized');
    } catch (initErr) {
      console.error('EmailJS init error', initErr);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || !formData.email) return;
    setStatus('submitting');
    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
            user_email: formData.email,
            reply_to: formData.email,
          message: formData.message
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS send response', res);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err: any) {
      console.error('emailjs send error', err);
      // surface error to user and keep logs for debugging
      alert('Failed to send message — check console and EmailJS dashboard for details.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

    if (status === 'success') {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-gray-500 mt-2">We'll get back to you shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500 outline-none transition-all"
                    placeholder="John Doe" 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500 outline-none transition-all"
                    placeholder="john@example.com" 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..." 
                />
            </div>
            <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-70 flex justify-center items-center"
            >
                {status === 'submitting' ? <Loader2 className="animate-spin" /> : 'Send Message'}
            </button>
        </form>
    );
};

// --- Main App Component ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen font-sans bg-gray-50 dark:bg-dark-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 selection:bg-primary-500 selection:text-white">
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 text-xs font-bold uppercase tracking-wider">
                Top 1% Android Engineering Team
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Apps that <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-500">move the world.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                We architect high-concurrency, mission-critical mobile solutions for fintech, logistics, and social platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1"
                >
                  View Case Studies <ArrowRight className="ml-2" size={20} />
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-700 text-lg font-medium rounded-xl bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-slide-up">
              <div className="relative mx-auto bg-gray-900 border-gray-800 dark:border-gray-700 border-[12px] rounded-[2.5rem] h-[600px] w-[320px] shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500 z-10">
                <div className="w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-dark-900 relative flex flex-col">
                    <div className="bg-primary-600 h-32 w-full p-6 flex flex-col justify-end shrink-0">
                         <div className="h-10 w-10 bg-white/20 rounded-full mb-4 animate-pulse"></div>
                         <div className="h-6 w-40 bg-white/20 rounded animate-pulse"></div>
                    </div>
                    <div className="p-4 space-y-4 flex-1">
                        <div className="h-32 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-75"></div>
                        <div className="flex gap-4">
                            <div className="h-24 w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-100"></div>
                            <div className="h-24 w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="absolute top-1/3 -right-8 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce z-20">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600">
                        <TrendingUp size={20} />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-gray-500 uppercase font-bold">Uptime</p>
                        <p className="font-bold text-gray-900 dark:text-white">99.99%</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-dark-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Engineering Excellence</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">We bridge the gap between freelance agility and enterprise reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<Smartphone size={24} />} title="Native First" description="Deep expertise in Android ecosystem, utilizing the latest Jetpack libraries." />
            <FeatureCard icon={<Layers size={24} />} title="Clean Arch" description="We build with Clean Architecture and SOLID principles for long-term maintainability." />
            <FeatureCard icon={<Zap size={24} />} title="60 FPS" description="Obsessive about frame rates and memory usage. Performance is not an afterthought." />
            <FeatureCard icon={<ShieldCheck size={24} />} title="Secure" description="Bank-grade security implementation for fintech and healthcare applications." />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Our Portfolio</h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our diverse range of successful projects.
            </p>
          </div>

          <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between bg-white dark:bg-dark-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
             <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar w-full md:w-auto">
                {['All', ...Object.values(ProjectCategory).filter(c => c !== 'All')].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-gray-50 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
             <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-dark-800 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-dark-900 outline-none transition-all text-sm"
                />
             </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full text-left"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.thumbnailUrl}
                      alt={project.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400 shadow-sm">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                         <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">View Details</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">{project.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white dark:bg-dark-900 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800">
                <Filter className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">No projects found</h3>
                <button onClick={() => {setSearchQuery(''); setActiveCategory('All')}} className="mt-4 text-primary-600 hover:underline">Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { icon: Code, val: '50+', label: 'Apps Shipped' },
                    { icon: Award, val: '12', label: 'Awards Won' },
                    { icon: Briefcase, val: '95%', label: 'Client Retention' },
                    { icon: Coffee, val: '1M+', label: 'Users Served' }
                ].map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                        <stat.icon className="mx-auto h-8 w-8 text-primary-200 mb-4" />
                        <div className="text-4xl font-bold mb-2">{stat.val}</div>
                        <div className="text-primary-100 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Team Section */}
      {/* <section id="team" className="py-24 bg-white dark:bg-dark-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet the Experts</h2>
                <p className="mt-4 text-gray-500">The minds behind the code.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {TEAM.map((member) => (
                    <div key={member.name} className="group bg-gray-50 dark:bg-dark-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <div className="aspect-square overflow-hidden">
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                            <p className="text-primary-600 dark:text-primary-400 text-sm font-medium uppercase tracking-wide mt-1">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="text-left">
                 <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Let's Build Together</h2>
                 <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed">
                    Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                 </p>
                 
                 <div className="space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Us</p>
                            <p className="text-lg font-medium text-gray-900 dark:text-white">ContactUs@nextlabtech.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Call Us</p>
                            <p className="text-lg font-medium text-gray-900 dark:text-white">+916280140400</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Visit Us</p>
                            <p className="text-lg font-medium text-gray-900 dark:text-white">Delhi, India</p>
                        </div>
                    </div>
                 </div>
              </div>

              <div className="bg-white dark:bg-dark-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                  <ContactForm />
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-dark-950 py-12 border-t border-gray-200 dark:border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                    <Smartphone size={18} />
                </div>
                <span className="font-bold text-lg text-gray-900 dark:text-white">NextLabTech</span>
            </div>
            <div className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} NextLabTech. All rights reserved.
            </div>
            <div className="flex gap-6">
                {/* <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors"><Github size={20} /></a> */}
                {/* <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors"><Twitter size={20} /></a> */}
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors"><Linkedin size={20} /></a>
            </div>
         </div>
      </footer>
    </div>
  );
}
