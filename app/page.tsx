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
      {/* Hero Section - Arc Carousel */}
      <section className="relative bg-gradient-to-br from-blue-800 via-orange-500 to-white overflow-hidden" style={{background: 'linear-gradient(135deg, #0038A8 0%, #FF7F00 50%, #FFFFFF 100%)'}}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          {/* Tagline */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Expert Care by Dr. Sunil Nagori & Dr. Shalin Nagori
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-semibold">
              Your Trusted Pathology Partners
            </p>
          </div>

          {/* Arc-Style Carousel (London Eye style - Continuous Rotation) */}
          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            {services.map((service, index) => {
              const angleStep = 360 / services.length;
              const angle = (rotation + (index * angleStep)) % 360;
              const angleRad = ((angle - 90) * Math.PI) / 180;
              
              const radius = 280;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;
              
              // Determine which item is at the bottom center (active position)
              const normalizedAngle = (angle + 90) % 360;
              const distanceFromBottom = Math.abs(normalizedAngle - 180);
              const isActive = distanceFromBottom < angleStep / 2;
              
              // Scale based on vertical position (larger at bottom)
              const scaleY = Math.sin(angleRad);
              const scale = isActive ? 1.2 : Math.max(0.6, 0.8 + scaleY * 0.3);
              
              // Opacity based on position
              const opacity = Math.max(0.3, 0.5 + scaleY * 0.5);
              
              // Z-index based on y position
              const zIndex = Math.round(10 + y / 10);
              
              return (
                <div
                  key={service}
                  className="absolute transition-none"
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex
                  }}
                >
                  <div className={`${
                    isActive 
                      ? 'bg-white text-blue-800 shadow-2xl border-4 border-orange-500' 
                      : 'bg-white/80 text-gray-700 shadow-lg border-2 border-white'
                  } rounded-2xl px-6 py-4 md:px-8 md:py-6 backdrop-blur-sm transition-all duration-300`}>
                    <p className={`${
                      isActive 
                        ? 'text-base md:text-2xl font-black' 
                        : 'text-sm md:text-lg font-bold'
                    } whitespace-nowrap text-center`}>
                      {service}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Button below carousel */}
          <div className="flex justify-center mt-16">
            <a
              className="bg-white text-blue-800 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              href="https://wa.me/919409277144"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
      
      {/* Complete Diagnostic Services - Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Diagnostic Services</h2>
            <p className="text-gray-700">Serving Since 1997 with State-of-the-Art Equipment</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl">🔬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">500+ Tests</h3>
              <p className="text-sm text-gray-600">Comprehensive pathology and diagnostic tests available.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-3xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Home Collection</h3>
              <p className="text-sm text-gray-600">Free sample collection service at your convenience.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-3xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accurate Reports</h3>
              <p className="text-sm text-gray-600">Precise results reviewed by experienced pathologists.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-3xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast TAT</h3>
              <p className="text-sm text-gray-600">Quick turnaround time for most tests within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600">Trusted healthcare partner for your diagnostic needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Pathologists</h3>
              <p className="text-gray-600 text-sm">Dr. Sunil Nagori & Dr. Shalin Nagori with MD (Pathology) and 30+ years combined experience.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-orange-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">FNAC Specialist</h3>
              <p className="text-gray-600 text-sm">Fine Needle Aspiration Cytology (FNAC) available with expert analysis and quick results.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-green-600 text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600 text-sm">Competitive rates without compromising on quality. Health packages available.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
