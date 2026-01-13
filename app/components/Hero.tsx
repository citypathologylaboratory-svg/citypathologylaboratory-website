'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white/10"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        {/* Animated Content Box */}
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Top Accent Line */}
          <div className="mb-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
          </div>

          {/* Main Heading with Animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-white">Trusted Pathology</span>
            <span className="block">Care at Your Home</span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            Fast, Accurate, Convenient Diagnostic Testing with Free Home Collection
          </p>

          {/* Three Highlight Boxes with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Box 1 */}
            <div className={`transform transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="text-4xl mb-3 text-teal-400">🏥</div>
                <h3 className="text-white font-bold text-lg mb-2">Expert Testing</h3>
                <p className="text-gray-200 text-sm">Professional pathologists ensuring accurate results</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className={`transform transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="text-4xl mb-3 text-cyan-400">🚗</div>
                <h3 className="text-white font-bold text-lg mb-2">Free Home Collection</h3>
                <p className="text-gray-200 text-sm">We come to you - no need to visit the lab</p>
              </div>
            </div>

            {/* Box 3 */}
            <div className={`transform transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="text-4xl mb-3 text-blue-400">⚡</div>
                <h3 className="text-white font-bold text-lg mb-2">Same-Day Results</h3>
                <p className="text-gray-200 text-sm">Fast turnaround for quick medical decisions</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons with Animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link
              href="https://calendly.com/citypathologylaboratory/book"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Book Appointment Now
            </Link>
            <Link
              href="#why-choose"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>

          {/* Bottom Info Section */}
          <div className={`mt-16 pt-12 border-t border-white/20 transform transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-teal-300 font-bold text-2xl">20+</p>
                <p className="text-gray-300 text-sm">Years of Experience</p>
              </div>
              <div>
                <p className="text-cyan-300 font-bold text-2xl">1000+</p>
                <p className="text-gray-300 text-sm">Happy Families</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-white font-bold">📞 9825067847</p>
                <p className="text-gray-300 text-sm">Mon-Sat: 8 AM - 8 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
