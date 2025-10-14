import React from "react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              About Our Platform
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              We're building the future of web navigation with cutting-edge
              React Router technology and beautiful user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe in creating seamless, intuitive web experiences
                  that make navigation feel natural and effortless. Our platform
                  demonstrates the power of modern React Router technology
                  combined with beautiful design principles.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Every interaction is crafted with attention to detail,
                  ensuring users can focus on what matters most - their content
                  and goals, not the technology getting in their way.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      100K+
                    </div>
                    <div className="text-sm text-gray-600">Happy Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1">Fast</h3>
                      <p className="text-sm opacity-90">
                        Lightning quick navigation
                      </p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1">Responsive</h3>
                      <p className="text-sm opacity-90">Works on all devices</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1">Reliable</h3>
                      <p className="text-sm opacity-90">Built for stability</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                      <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-1">Beautiful</h3>
                      <p className="text-sm opacity-90">Stunning design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built with Modern Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We use the latest tools and frameworks to deliver exceptional
                performance and user experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  React Router
                </h3>
                <p className="text-gray-600 text-sm">
                  Advanced client-side routing
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-cyan-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tailwind CSS
                </h3>
                <p className="text-gray-600 text-sm">Utility-first styling</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vite
                </h3>
                <p className="text-gray-600 text-sm">
                  Lightning fast build tool
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  React 19
                </h3>
                <p className="text-gray-600 text-sm">Latest React features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Passionate developers dedicated to creating amazing web
                experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">JD</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  John Developer
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  Lead Developer
                </p>
                <p className="text-gray-600">
                  Passionate about creating seamless user experiences with
                  modern web technologies.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">SD</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sarah Designer
                </h3>
                <p className="text-blue-600 font-medium mb-2">UI/UX Designer</p>
                <p className="text-gray-600">
                  Crafting beautiful and intuitive interfaces that users love to
                  interact with.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">ME</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mike Engineer
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  Full Stack Engineer
                </p>
                <p className="text-gray-600">
                  Building robust and scalable solutions that power amazing web
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
