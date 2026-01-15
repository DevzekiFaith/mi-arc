'use client';

import { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            <Link href="/" className="text-base sm:text-lg font-light tracking-wider text-slate-900 hover:text-slate-700 transition-colors">
              <span className="hidden sm:inline">E.O. Ubor</span>
              <span className="sm:hidden">E.O.</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-4 sm:px-6 py-2 text-sm font-light text-slate-700 hover:text-slate-900 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
                Let's Work Together
              </h1>
              <div className="w-16 sm:w-20 lg:w-24 h-px bg-slate-400 mx-auto lg:mx-0"></div>
              <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I'm always interested in discussing new opportunities, collaborations, and architectural projects.
                Feel free to reach out with your ideas and questions.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/projects/c17.jpg"
                    alt="3D Architectural Visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-light text-slate-600">Featured 3D Render</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
                  Get In Touch
                </h2>
                <div className="w-12 h-px bg-slate-400"></div>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:ezekieloghojaforubor@gmail.com"
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                    >
                      ezekieloghojaforubor@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-1">Phone</h3>
                    <a
                      href="tel:+2347014441418"
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                    >
                      +234 701 444 1418
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-600 font-light">Lagos, Nigeria</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/ezekieloghojafor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                    >
                      linkedin.com/in/ezekieloghojafor
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-8 border-t border-slate-200">
                <div className="space-y-4">
                  <h3 className="text-lg font-light text-slate-900">Current Availability</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600 font-light">Available for new projects</span>
                  </div>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    I am currently accepting commissions for architectural design, consultation, and project management.
                    Response time is typically within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
                  Send a Message
                </h2>
                <div className="w-12 h-px bg-slate-400"></div>
                <p className="text-slate-600 font-light leading-relaxed">
                  Have a project in mind? Let's discuss how we can bring your vision to life.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-none bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-600 transition-colors duration-300 font-light"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-none bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-600 transition-colors duration-300 font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-light text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-none bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-600 transition-colors duration-300 font-light"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-none bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-600 transition-colors duration-300 font-light resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-light text-sm tracking-wider uppercase transition-all duration-300"
                >
                  Send Message
                  <svg
                    className="ml-3 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

            {/* Call to Action */}
            <section className="py-16 sm:py-20 bg-slate-900 text-white">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-light tracking-tight">
                      Ready to Start Your Project?
                    </h2>
                    <p className="text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                      Every great project begins with a conversation. Let's discuss your vision and how we can bring it to life through thoughtful architecture.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <a
                      href="mailto:ezekieloghojaforubor@gmail.com"
                      className="inline-flex items-center px-8 py-3 bg-white text-slate-900 hover:bg-slate-100 font-light text-sm tracking-wider uppercase transition-all duration-300"
                    >
                      Email Me
                      <svg
                        className="ml-3 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                    <Link
                      href="/"
                      className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-slate-900 font-light text-sm tracking-wider uppercase transition-all duration-300"
                    >
                      View My Work
                    </Link>
                    <a
                      href="/Ezekiel-Oghojafor-Ubor-Resume.pdf"
                      download="Ezekiel-Oghojafor-Ubor-Resume.pdf"
                      className="inline-flex items-center px-8 py-3 border border-slate-400 text-slate-300 hover:text-white hover:border-white font-light text-sm tracking-wider uppercase transition-all duration-300"
                    >
                      <svg
                        className="mr-3 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
};

export default Contact;