'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number>();

  const services = [
    { name: 'PATHOLOGICAL INVESTIGATION', icon: '🔬', desc: 'Comprehensive blood tests and pathology' },
    { name: 'INDUSTRIAL HEALTH CHECK UP', icon: '👷', desc: 'Employee health screening programs' },
    { name: 'PFT', icon: '💨', desc: 'Pulmonary Function Testing' },
    { name: 'AUDIOMETRY', icon: '🔊', desc: 'Hearing assessment services' },
    { name: 'ECG', icon: '❤️', desc: 'Electrocardiography analysis' },
    { name: 'X-RAY', icon: '☢️', desc: 'Digital radiography imaging' },
    { name: 'VISION BY TITMUS', icon: '👁️', desc: 'Professional eye screening' },
    { name: 'OHC SETUP GUIDANCE', icon: '🏥', desc: 'Occupational health center setup' },
    { name: 'MEDICAL STAFF FOR INDUSTRIES', icon: '👨⚕️', desc: 'On-site medical professionals' }
  ];

  useEffect(() => {
    let lastTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      setRotation((prev) => (prev + (deltaTime / 1000) * 12) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 py-20 px-4 sm:py-32 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -left-20 blur-3xl"></div>
            <div className="absolute w-96 h-96 rounded-full bg-white -bottom-20 -right-20 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fadeInUp">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur">
                ✨ Trusted by 10,000+ Patients
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">Healthcare, Delivered to Your Door</h1>
              <p className="text-xl text-blue-100 leading-relaxed">Professional home collection, same-day results, and expert medical guidance—all in one trusted partner.</p>
              <div className="flex gap-4 flex-wrap">
                <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105">Book Collection Now</button>
                <button className="px-8 py-3 border-2 border-white rounded-lg font-bold hover:bg-white/10 transition">View Services</button>
              </div>
            </div>

            {/* Animated Scooter */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating ring */}
                <div 
                  className="absolute w-72 h-72 border-4 border-white/30 rounded-full"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="absolute w-4 h-4 bg-white rounded-full top-0 left-1/2 -translate-x-1/2"></div>
                </div>
                {/* Scooter placeholder */}
                <div className="relative text-center">
                  <div className="text-8xl mb-4">🏍️</div>
                  <div className="text-3xl">👨⚕️</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fast & Convenient</h3>
                <p className="text-gray-600">Same-day collection with online scheduling in under 2 minutes</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">100% Reliable</h3>
                <p className="text-gray-600">ISO certified labs and trained phlebotomists for safe sample collection</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Accurate Results</h3>
                <p className="text-gray-600">State-of-the-art equipment ensuring accurate diagnostic reports</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">From routine pathology to specialized occupational health services, we cover all your diagnostic needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all hover:border-blue-300 hover:-translate-y-1 duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-5xl">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">{service.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">10,000+</h3>
                <p className="text-blue-100">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">99.8%</h3>
                <p className="text-blue-100">Accuracy Rate</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">24/7</h3>
                <p className="text-blue-100">Support Available</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">ISO 15189</h3>
                <p className="text-blue-100">Certified Lab</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose City Pathology?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl text-green-500">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-gray-600">Certified pathologists and trained technicians with 15+ years experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-green-500">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Advanced Technology</h3>
                    <p className="text-gray-600">Latest diagnostic equipment ensuring accurate and fast results</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-green-500">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Hygienic Protocol</h3>
                    <p className="text-gray-600">Strict quality and safety standards maintained at all times</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl text-green-500">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Clear Communication</h3>
                    <p className="text-gray-600">Transparent reporting and easy-to-understand test explanations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-green-500">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Continuous Improvement</h3>
                    <p className="text-gray-600">Regular staff training and equipment upgrades for better service</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl text-green-500">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Community Focused</h3>
                    <p className="text-gray-600">Serving local communities with trusted, affordable healthcare solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">Book your home collection today and get results in 24 hours</p>
            <button className="px-10 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-105">Schedule Appointment</button>
          </div>
        </section>
      </main>
    </>
  );
}
