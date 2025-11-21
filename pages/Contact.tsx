import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg group-hover:bg-primary-100 transition-colors">
                      <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-500 dark:text-gray-400">hello@nextlabtech.com</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg group-hover:bg-primary-100 transition-colors">
                      <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg group-hover:bg-primary-100 transition-colors">
                       <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Office</p>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      100 Tech Plaza, Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-2xl shadow-lg text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Join the team</h3>
                <p className="mb-6 opacity-90 text-primary-50 relative z-10">We are always looking for talented Android engineers and designers to join our growing team.</p>
                <button className="bg-white text-primary-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-lg relative z-10">
                    View Open Positions
                </button>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-slide-up" style={{animationDelay: '0.1s'}}>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-primary-600 hover:text-primary-700 font-bold text-sm uppercase tracking-wide"
                >
                    Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`block w-full rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500 py-3 px-4 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-2 text-xs text-red-500 flex items-center font-medium"><AlertCircle size={12} className="mr-1"/>{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`block w-full rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500 py-3 px-4 transition-colors`}
                    placeholder="john@company.com"
                  />
                   {errors.email && <p className="mt-2 text-xs text-red-500 flex items-center font-medium"><AlertCircle size={12} className="mr-1"/>{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="block w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500 py-3 px-4 transition-colors"
                    placeholder="NextLabTech Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`block w-full rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500 py-3 px-4 transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                  />
                   {errors.message && <p className="mt-2 text-xs text-red-500 flex items-center font-medium"><AlertCircle size={12} className="mr-1"/>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all transform active:scale-[0.99]"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center">
                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                        Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                        Send Message <Send size={18} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}