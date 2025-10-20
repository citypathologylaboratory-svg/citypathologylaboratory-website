"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [planePosition, setPlanePosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setPlanePosition((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* FNAC Plane Animation Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Fine Needle Aspiration Cytology (FNAC)
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Precise, Painless, and Quick Diagnostic Procedure
          </p>
          
          {/* Animated FNAC Plane */}
          <div className="relative h-64 md:h-80 mb-8">
            <div 
              className="absolute transition-all duration-300 ease-linear"
              style={{
                left: `${planePosition}%`,
                top: '50%',
                transform: `translateY(-50%) ${planePosition > 50 ? 'scaleX(-1)' : ''}`,
                opacity: isVisible ? 1 : 0
              }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 200 200"
                className="drop-shadow-lg"
              >
                {/* Needle body */}
                <line
                  x1="50"
                  y1="100"
                  x2="150"
                  y2="100"
                  stroke="#1976D2"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Needle tip */}
                <polygon
                  points="150,100 170,95 170,105"
                  fill="#1565C0"
                />
                {/* Plunger */}
                <rect
                  x="40"
                  y="90"
                  width="20"
                  height="20"
                  fill="#43A047"
                  rx="3"
                />
                {/* Sample droplet */}
                <circle
                  cx="165"
                  cy="100"
                  r="4"
                  fill="#E53935"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Results</h3>
              <p className="text-gray-600">Same-day or next-day reports</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">High Accuracy</h3>
              <p className="text-gray-600">Expert cytopathologist analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">💉</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Minimal Discomfort</h3>
              <p className="text-gray-600">Non-invasive procedure</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://calendly.com/citypathologylaboratory/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              📅 Book Your FNAC Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="/tests" className="block group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  Pathology Tests
                </h3>
                <p className="text-gray-600">
                  Comprehensive diagnostic testing services
                </p>
              </div>
            </a>
            <a href="/industrial-health-checkup" className="block group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  Industrial Health Checkup
                </h3>
                <p className="text-gray-600">
                  Employee health screening packages
                </p>
              </div>
            </a>
            <a href="/about" className="block group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  About Us
                </h3>
                <p className="text-gray-600">
                  Meet our expert team and facilities
                </p>
              </div>
            </a>
            <a href="/contact" className="block group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  Contact Us
                </h3>
                <p className="text-gray-600">
                  Get in touch for appointments
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose City Pathology Laboratory?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">NABL Accredited</h3>
                <p className="text-gray-600">Quality assured testing standards</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">⏰</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Turnaround</h3>
                <p className="text-gray-600">Fast and accurate results</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">🏥</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Facility</h3>
                <p className="text-gray-600">State-of-the-art equipment</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">👥</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced pathologists and technicians</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Book Your Appointment?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/citypathologylaboratory/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              📅 Book on Calendly
            </a>
            <a
              href="https://wa.me/919409277144"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="tel:+919409277144"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
