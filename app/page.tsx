'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
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

      // Continuous rotation: 360 degrees in 30 seconds (12 degrees per second)
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
            <Hero />
{/* Hero section with video background and home collection promotion above */}          
      

      {/* REPLACED SECTION: Why Choose City Pathology Laboratory? (Card-style) */}
      <section className="py-16 bg-gray-50"> id="why-choose"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Why Choose City Pathology Laboratory?</h2>
          <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            Trusted by doctors and families in Halol for over two decades.
          </p>

          <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert-led Testing</h3>
              <p className="text-sm text-gray-600">All tests are supervised and reported by experienced pathologists, ensuring results are trustworthy and clinically relevant.</p>
            </div>
            {/* 2 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Turnaround Times</h3>
              <p className="text-sm text-gray-600">Most test results are delivered the same day, supporting quick diagnosis and timely medical decisions.</p>
            </div>
            {/* 3 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Diagnostic Equipment</h3>
              <p className="text-sm text-gray-600">We use advanced and regularly updated technology for precise and reliable test outcomes.</p>
            </div>
            {/* 4 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-sm text-gray-600">Competitive rates make quality healthcare accessible without compromising on standards.</p>
            </div>
            {/* 5 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Test Menu</h3>
              <p className="text-sm text-gray-600">From routine blood and urine tests to specialized panels—everything under one roof.</p>
            </div>
            {/* 6 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Patient-Centered Service</h3>
              <p className="text-sm text-gray-600">Home sample collection, online booking, prompt communication, and personalized attention—especially for elderly and critical cases.</p>
            </div>
            {/* 7 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strict Quality and Safety Protocols</h3>
              <p className="text-sm text-gray-600">Meticulous sample handling, hygiene, and data privacy practices at every step.</p>
            </div>
            {/* 8 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Clear Communication</h3>
              <p className="text-sm text-gray-600">We provide clear, actionable reports and are always available for follow-up queries.</p>
            </div>
            {/* 9 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strong Local Reputation</h3>
              <p className="text-sm text-gray-600">Serving Halol and nearby communities with integrity and care for 20+ years.</p>
            </div>
            {/* 10 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Improvement</h3>
              <p className="text-sm text-gray-600">Regular staff training, equipment upgrades, and process updates to match advancements.</p>
            </div>
            {/* 11 */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trusted by Doctors and Families</h3>
              <p className="text-sm text-gray-600">Longstanding relationships with local providers and positive patient experiences reflect our reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections below remain unchanged */}
    </main>
  );
}
