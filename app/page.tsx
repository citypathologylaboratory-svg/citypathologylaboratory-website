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
            </div>
            
            {/* Right Content - Visual Elements */}
            <div className="relative h-full">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-4">🔬</div>
                  <h3 className="text-2xl font-bold text-gray-900">Complete Diagnostic Services</h3>
                  <p className="text-gray-700">NABL Accredited Lab with State-of-the-Art Equipment</p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white rounded-lg p-4 shadow">
                      <p className="text-3xl font-bold text-blue-600">30+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow">
                      <p className="text-3xl font-bold text-green-600">24hr</p>
                      <p className="text-sm text-gray-600">Fast TAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Quick Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-3xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Home Collection</h3>
              <p className="text-sm text-gray-600">Convenient sample collection at your doorstep at no extra cost.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-3xl">✅</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">NABL Accredited</h3>
              <p className="text-sm text-gray-600">Certified lab ensuring highest quality standards and accuracy.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-3xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Online Reports</h3>
              <p className="text-sm text-gray-600">Get your reports instantly on WhatsApp and email.</p>
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

      {/* Know Your Pathologist Section */}
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
                  SN
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sunil Nagori</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">MD (Pathology), MBBS - Senior Pathologist</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Specializing in Hematology, Clinical Pathology, Laboratory quality management, accuracy and compassion.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  SN
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Shalin Nagori</h3>
                  <p className="text-sm text-green-600 font-semibold mb-3">MD (Pathology), MBBS</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Expert in Histopathology, Cytology, Modern diagnostics, patient-centered reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
