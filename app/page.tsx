export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Redesigned */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* FNAC Badge - Prominent */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
                <span className="text-sm font-bold uppercase tracking-wide">🎯 FNAC TEST AVAILABLE</span>
              </div>
              
              {/* Main Headline - Bold & Professional */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Trusted Diagnostics
                <span className="block text-blue-600 mt-2">At Your Doorstep</span>
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
              
              {/* Floating Achievement Badges */}
              <div className="flex flex-wrap gap-6 items-center py-4">
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 border-2 border-blue-100 transform hover:scale-105 transition-all">
                  <p className="text-3xl font-bold text-blue-600">35+</p>
                  <p className="text-sm text-gray-600 font-semibold">Years Experience</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 border-2 border-green-100 transform hover:scale-105 transition-all">
                  <p className="text-3xl font-bold text-green-600">1M+</p>
                  <p className="text-sm text-gray-600 font-semibold">Patients Served</p>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image & Visual Elements */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/assets/hero-lab.jpg" 
                  alt="City Pathology Laboratory" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-green-200 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - UNCHANGED */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Committed to excellence in diagnostics with patient care at the heart of everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Pathologists</h3>
              <p className="text-sm text-gray-600">Highly qualified doctors with decades of experience.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-3xl">✅</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accurate Results</h3>
              <p className="text-sm text-gray-600">State-of-the-art equipment ensuring precision.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-3xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Home Collection</h3>
              <p className="text-sm text-gray-600">Free sample collection at your convenience.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-3xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast TAT</h3>
              <p className="text-sm text-gray-600">Quick turnaround time for most tests within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Know Your Pathologist Section - UNCHANGED */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Know Your Pathologist</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet our experienced team of pathologists dedicated to your health.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  DS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Suman Gupta</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">MD Pathology, MBBS</p>
                  <p className="text-sm text-gray-700 leading-relaxed">With over 30 years of experience in clinical pathology, Dr. Gupta specializes in hematology and clinical biochemistry.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  RG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Rajesh Gupta</h3>
                  <p className="text-sm text-green-600 font-semibold mb-3">MD Pathology, MBBS</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Expert in cytopathology and histopathology with special interest in FNAC and cancer diagnostics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
