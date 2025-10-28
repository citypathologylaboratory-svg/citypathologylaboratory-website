export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Redesigned with Pathologist Featured */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* FNAC Badge - Prominent */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
                <span className="text-sm font-bold uppercase tracking-wide">
                🎯 FNAC TEST AVAILABLE
                </span>
              </div>
              
              {/* Pathologist Name Badge - Prominent */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl border-2 border-blue-300">
                <p className="text-sm font-semibold uppercase tracking-wider mb-1">
                👨‍⚕️ Expert Care By
                </p>
                <h2 className="text-2xl md:text-3xl font-bold">
                Dr. Sunil Nagori & Dr. Shalin Nagori
                </h2>
                <p className="text-sm mt-1 opacity-90">
                MD (Pathology), MBBS • 30+ Years Combined Experience
                </p>
              </div>
              {/* Main Headline - Bold & Professional */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Trusted Diagnostics
                <span className="block text-blue-600 mt-2">
                At Your Doorstep
                </span>
              </h1>
              
              {/* Subtitle - Emphasizing Key Benefits */}
              <p className="text-xl text-gray-700 leading-relaxed">
                Expert pathologists delivering accurate results with fast online booking, free home sample collection, and friendly service you can trust.
              </p>
              
              {/* CTA Buttons - Prominent Side-by-Side */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  📅 Book Now
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  🏠 Get Home Visit
                </button>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                  💬 WhatsApp
                </button>
              </div>
            </div>
            
            {/* Right Content - Doctor Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <img 
                  src="/doctor-hero.png" 
                  alt="Dr. Sunil Nagori - Pathologist" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="text-center mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Pathologists</h3>
                  <p className="text-gray-600 text-sm">Trusted by 50,000+ patients across Rajasthan</p>
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
