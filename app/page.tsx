export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Modern Design */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-white">
              {/* FNAC Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30">
                <span className="text-sm font-semibold">🎯 FNAC TEST AVAILABLE</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Trusted
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Diagnostics
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                  At Your Doorstep
                </span>
              </h1>
              
              {/* Pathologist Badge */}
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-sm font-medium text-white/80 mb-1">👨‍⚕️ Expert Care By</p>
                <h2 className="text-xl md:text-2xl font-bold">Dr. Sunil Nagori & Dr. Shalin Nagori</h2>
                <p className="text-sm text-white/70 mt-1">MD (Pathology), MBBS • 30+ Years Combined Experience</p>
              </div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Expert pathologists delivering accurate results with fast online booking, free home sample collection, and trusted service.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200">
                  📅 Book Appointment
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white/30 font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-200">
                  💬 WhatsApp Us
                </button>
              </div>
            </div>
            
            {/* Right Content - Feature Cards */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center">
                        <span className="text-3xl">🔬</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">500+ Tests</h3>
                        <p className="text-sm text-gray-600">Comprehensive diagnostics</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center">
                        <span className="text-3xl">🏠</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Free Home Collection</h3>
                        <p className="text-sm text-gray-600">At your convenience</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center">
                        <span className="text-3xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Fast Results</h3>
                        <p className="text-sm text-gray-600">24-hour turnaround</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">🎯</span>
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
