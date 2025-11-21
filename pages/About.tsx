import React from 'react';
import { TEAM } from '../constants';
import { Award, Briefcase, Code, Coffee, ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white dark:bg-dark-950 min-h-screen transition-colors duration-300">
      
      {/* Hero */}
      <div className="bg-gray-50 dark:bg-dark-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl tracking-tight">Who We Are</h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            NextLabTech is a boutique Android engineering studio. We specialize in building complex, high-performance mobile applications for ambitious startups and Fortune 500 enterprises.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
                { icon: Code, val: '50+', label: 'Apps Shipped' },
                { icon: Award, val: '12', label: 'Industry Awards' },
                { icon: Briefcase, val: '95%', label: 'Client Retention' },
                { icon: Coffee, val: '∞', label: 'Lines of Code' }
            ].map((stat, idx) => (
                <div key={idx} className="text-center p-8 rounded-2xl bg-white dark:bg-dark-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <stat.icon className="mx-auto h-8 w-8 text-primary-600 mb-4" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.val}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
            ))}
        </div>

        {/* Journey Timeline */}
        <div className="mb-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
                {[
                    { year: '2019', title: 'Founded', desc: 'NextLabTech starts as a two-person team in a shared office, focusing on native Android development.' },
                    { year: '2021', title: 'Rapid Growth', desc: 'Expanded to 15 engineers. Delivered our first major Fintech app handling millions in transactions.' },
                    { year: '2023', title: 'Global Reach', desc: 'Working with clients in 4 continents. Surpassed 50M end-users across all maintained applications.' }
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 md:gap-8 group">
                        <div className="flex-col items-center hidden md:flex">
                            <div className="w-px h-full bg-gray-200 dark:bg-dark-700 group-last:h-0"></div>
                        </div>
                        <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-bold text-sm border-4 border-white dark:border-dark-950 shadow-sm">
                                {item.year}
                            </div>
                        </div>
                        <div className="flex-grow pb-8">
                            <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 relative">
                                {/* Arrow for Desktop */}
                                <div className="hidden md:block absolute top-4 -left-2 w-4 h-4 bg-white dark:bg-dark-800 border-l border-b border-gray-100 dark:border-gray-700 transform rotate-45"></div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Team Section */}
        <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Meet the Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {TEAM.map((member) => (
                    <div key={member.name} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                        <div className="aspect-square overflow-hidden">
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6 text-center relative">
                            <div className="absolute -top-8 left-0 right-0 flex justify-center">
                                <div className="bg-primary-600 p-2 rounded-full shadow-lg">
                                     <ChevronRight className="text-white rotate-90" size={20} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{member.name}</h3>
                            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mt-1">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}