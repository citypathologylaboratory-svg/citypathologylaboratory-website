'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Premium Pathology Testing at Your Doorstep
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
            Trusted diagnostic services with home collection convenience. Trusted by doctors and families in Halol for over two decades.
          </p>

          {/* Home Collection Service Highlight */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white border-opacity-20">
            <p className="text-green-300 font-semibold text-base sm:text-lg mb-2">
              ✓ Free Home Collection Service
            </p>
            <p className="text-gray-100 text-sm sm:text-base">
              We come to you! No need to visit the lab. Convenient, safe, and reliable sample collection from the comfort of your home.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button - Book Now */}
            <Link
              href="https://calendly.com/citypathologylaboratory/book"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Appointment Now
            </Link>

            {/* Secondary Button - Home Collection Info */}
            <Link
              href="#why-choose"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn About Our Services
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-gray-200 text-sm sm:text-base">
            <p>Phone: 9825067847 | Mon-Sat: 8 AM - 8 PM (Sunday: Closed)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
