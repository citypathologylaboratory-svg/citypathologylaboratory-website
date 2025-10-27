export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* FNAC Test Available Ribbon */}
        <div className="absolute top-8 -right-12 bg-red-600 text-white px-16 py-2 transform rotate-45 shadow-lg z-10">
          <span className="text-sm font-bold tracking-wide">FNAC TEST AVAILABLE</span>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:pr-8">
              <div className="inline-block">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Trusted Healthcare Partner Since 1990
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health,
                <span className="text-primary-600"> Our Priority</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Advanced diagnostic services with cutting-edge technology, expert pathologists, and accurate results you can trust.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Quick Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">100% Accurate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xl">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Online Reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-xl">✓</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Expert Team</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                  href="/book-appointment"
                >
                  📅 Book Appointment
                </a>
                <a 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                  href="https://wa.me/919409277144"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">💬</span> WhatsApp Us
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-primary-600">📞</span>
                  <span>+91 94092 77144</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-600">⏰</span>
                  <span>Open 24/7</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/helicopter_fnac.png" 
                  alt="City Pathology Laboratory - Advanced Diagnostic Services" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Serving Gujarat</p>
                      <p className="text-lg font-bold text-primary-700">10,000+ Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50"></div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-primary-600 text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment ensuring accurate and timely results for all diagnostic tests.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-primary-600 text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-bold mb-3">Expert Pathologists</h3>
              <p className="text-gray-600">Highly qualified and experienced pathologists dedicated to providing precise diagnostics.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-primary-600 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Quick Results</h3>
              <p className="text-gray-600">Fast turnaround time without compromising on quality and accuracy.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-primary-600 text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-3">Comprehensive Tests</h3>
              <p className="text-gray-600">Wide range of pathology and diagnostic tests available under one roof.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-primary-600 text-4xl mb-4">💯</div>
              <h3 className="text-2xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Strict quality control measures ensuring reliable and accurate test results.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-primary-600 text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Online Reports</h3>
              <p className="text-gray-600">Access your test reports online anytime, anywhere with our secure portal.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
