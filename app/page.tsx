export default function Home() {
  return (
    <main className="min-h-screen">
      {/* FNAC Test Plane Animation Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Advanced Diagnostic Services</h2>
            
            {/* Animated Plane with Ribbon */}
            <div className="relative h-64 mb-8">
              <style jsx>{`
                @keyframes flyPlane {
                  0% {
                    transform: translateX(-100%) translateY(20px);
                  }
                  50% {
                    transform: translateX(50%) translateY(-10px);
                  }
                  100% {
                    transform: translateX(-100%) translateY(20px);
                  }
                }
                
                @keyframes waveRibbon {
                  0%, 100% {
                    transform: translateY(0px) rotate(-2deg);
                  }
                  50% {
                    transform: translateY(5px) rotate(2deg);
                  }
                }
                
                .plane-container {
                  animation: flyPlane 15s ease-in-out infinite;
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%);
                }
                
                .plane {
                  width: 80px;
                  height: 80px;
                  position: relative;
                }
                
                .ribbon {
                  position: absolute;
                  left: 90px;
                  top: 50%;
                  transform: translateY(-50%);
                  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
                  color: #1e40af;
                  padding: 12px 30px;
                  border-radius: 8px;
                  font-weight: bold;
                  font-size: 1.25rem;
                  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                  white-space: nowrap;
                  animation: waveRibbon 3s ease-in-out infinite;
                  border: 3px solid #3b82f6;
                }
                
                .ribbon::before {
                  content: '';
                  position: absolute;
                  left: -15px;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 0;
                  height: 0;
                  border-top: 15px solid transparent;
                  border-bottom: 15px solid transparent;
                  border-right: 15px solid #3b82f6;
                }
              `}</style>
              
              <div className="plane-container">
                <div className="plane">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* Plane body */}
                    <ellipse cx="50" cy="50" rx="35" ry="12" fill="#ffffff" />
                    {/* Plane wings */}
                    <path d="M 20 50 L 10 40 L 15 48 Z" fill="#e0e7ff" />
                    <path d="M 80 50 L 90 40 L 85 48 Z" fill="#e0e7ff" />
                    {/* Plane tail */}
                    <path d="M 15 50 L 10 45 L 12 50 L 10 55 Z" fill="#dbeafe" />
                    {/* Plane nose */}
                    <ellipse cx="85" cy="50" rx="8" ry="10" fill="#3b82f6" />
                    {/* Windows */}
                    <circle cx="60" cy="50" r="4" fill="#3b82f6" opacity="0.6" />
                    <circle cx="50" cy="50" r="4" fill="#3b82f6" opacity="0.6" />
                    <circle cx="40" cy="50" r="4" fill="#3b82f6" opacity="0.6" />
                    {/* Medical cross on plane */}
                    <g transform="translate(30, 48)">
                      <rect x="-1" y="-5" width="2" height="10" fill="#ef4444" />
                      <rect x="-5" y="-1" width="10" height="2" fill="#ef4444" />
                    </g>
                  </svg>
                </div>
                <div className="ribbon">
                  🎯 FNAC Test Available
                </div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Fine Needle Aspiration Cytology (FNAC) - Quick, accurate, and minimally invasive diagnostic testing now available at our laboratory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919409277144"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp px-8 py-4 text-lg bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300 font-semibold"
              >
                📱 WhatsApp for Instant Support
              </a>
              <a 
                href="https://calendly.com/citypathologylaboratory/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300 font-semibold"
              >
                📅 Book Appointment for Industrial Health Check Up
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </main>
  );
}
