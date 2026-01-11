// Refactored Hero Section with Split Layout
'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number>();

  const services = [
    'PATHOLOGICAL INVESTIGATION',
    'INDUSTRIAL HEALTH CHECK UP',
    'PFT',
    'AUDIOMETRY',
    'ECG',
    'X-RAY',
    'VISION BY TITMUS',
    'OHC SETUP GUIDANCE',
    'MEDICAL STAFF FOR INDUSTRIES'
  ];

  useEffect(() => {
    let lastTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      setRotation(prev => (prev + (deltaTime / 1000) * 12) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* ===== HERO SECTION - HOME COLLECTION ===== */}
      <section className="relative w-full h-screen max-h-[600px] sm:max-h-[700px] overflow-hidden bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>

        {/* Phlebotomist Scooter Animation Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* Animated zooming scooter with phlebotomist */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* SVG-based animated illustration of scooter and phlebotomist */}
            <div className="animate-scooter-zoom w-96 h-96 flex items-center justify-center">
              {/* Simplified scooter + phlebotomist illustration using emojis and shapes */}
              <div className="text-9xl drop-shadow-2xl filter blur-[0.5px]">
                🏍️
              </div>
              <div className="absolute text-6xl -ml-32 -mt-12 drop-shadow-lg">
                👨‍⚕️
              </div>
            </div>
          </div>
        </div>

        {/* Text Overlay - HOME COLLECTION AVAILABLE */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 drop-shadow-lg">
              HOME COLLECTION
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(0,114,230,0.5)'}}>
              AVAILABLE
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold max-w-2xl mx-auto drop-shadow-md">
              We come to you • Fast • Reliable • Professional
            </p>
            <div className="pt-6">
              <a
                href="https://calendly.com/citypathologylaboratory"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:shadow-2xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Book Collection Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION - KEPT UNCHANGED ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Why Choose City Pathology Laboratory?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg">
            Trusted by doctors and families in Halol for over two decades.
          </p>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert-led Testing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">All tests are supervised and reported by experienced pathologists, ensuring results are trustworthy and clinically relevant.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Fast Turnaround Times</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Most test results are delivered the same day, supporting quick diagnosis and timely medical decisions.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Modern Diagnostic Equipment</h3>
              <p className="text-sm text-gray-600 leading-relaxed">We use advanced and regularly updated technology for precise and reliable test outcomes.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Competitive rates make quality healthcare accessible without compromising on standards.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Test Menu</h3>
              <p className="text-sm text-gray-600 leading-relaxed">From routine blood and urine tests to specialized panels—everything under one roof.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Patient-Centered Service</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Home sample collection, online booking, prompt communication, and personalized attention—especially for elderly and critical cases.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Strict Quality and Safety Protocols</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Meticulous sample handling, hygiene, and data privacy practices at every step.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Clear Communication</h3>
              <p className="text-sm text-gray-600 leading-relaxed">We provide clear, actionable reports and are always available for follow-up queries.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Strong Local Reputation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Serving Halol and nearby communities with integrity and care for 20+ years.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Regular staff training, equipment upgrades, and process updates to match advancements.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trusted by Doctors and Families</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Longstanding relationships with local providers and positive patient experiences reflect our reliability.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Add CSS animations for the hero section in globals.css */
