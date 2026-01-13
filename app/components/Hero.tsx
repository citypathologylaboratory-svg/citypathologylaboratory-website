'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* Video Background - Full screen coverage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Smooth Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

      {/* Content Overlay - Centered */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl">
              Your Health
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Our Priority
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Professional Pathology Testing with
            <br />
            <span className="font-bold text-emerald-300">Free Home Collection Service</span>
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            {/* Primary Button */}
            <Link
              href="https://calendly.com/citypathologylaboratory/book"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              Book Appointment
            </Link>

            {/* Secondary Button */}
            <Link
              href="#why-choose"
              className="px-10 py-4 bg-white/20 hover:bg-white/30 border-2 border-white text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-md"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="space-y-2">
              <p className="text-emerald-300 font-bold text-3xl">20+</p>
              <p className="text-gray-200 text-sm">Years Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-teal-300 font-bold text-3xl">1000+</p>
              <p className="text-gray-200 text-sm">Happy Families</p>
            </div>
            <div className="space-y-2">
              <p className="text-cyan-300 font-bold text-3xl">100%</p>
              <p className="text-gray-200 text-sm">Trusted Care</p>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-300 text-sm">Scroll to explore</p>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
