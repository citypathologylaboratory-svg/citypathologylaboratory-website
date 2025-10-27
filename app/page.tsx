export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Redesigned */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* FNAC Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-sm font-bold uppercase tracking-wide">🎯 FNAC TEST AVAILABLE</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Award-Winning Pathology
                <span className="block text-blue-600 mt-2">At Your Doorstep</span>
              </h1>
              
              {/* Secondary Tagline */}
              <p className="text-xl text-gray-700 leading-relaxed">
                Expert pathologists, precise diagnostics, and trusted quality - Book your tests online and get free home sample collection.
              </p>
              
              {/* Trust Badges - NABL & NABH */}
              <div className="flex flex-wrap gap-6 items-center py-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xl">NABL</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">NABL Accredited</p>
                    <p className="text-sm text-gray-600">ISO 15189:2012</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xl">NABH</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">NABH Certified</p>
                    <p className="text-sm text-gray-600">Quality Assured</p>
                  </div>
                </div>
              </div>
              
              {/* Large CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/tests"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  📋 Book Now
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  🏠 Get Home Visit
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-4 ring-blue-100">
                <img
                  src="/hero-lab.jpg"
                  alt="Modern Pathology Laboratory"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Stats Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">35+</p>
                  <p className="text-sm font-semibold text-gray-700">Years Experience</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-2xl p-6">
                <div className="text-center">
                  <p className="text-4xl font-bold">1M+</p>
                  <p className="text-sm font-semibold">Patients Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose City Pathology Laboratory?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600">Certified pathologists with decades of combined experience.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 text-3xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Online Reports</h3>
              <p className="text-sm text-gray-600">Access your reports anytime, anywhere through our secure portal.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-3xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Home Collection</h3>
              <p className="text-sm text-gray-600">Free home sample collection at your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Know Your Pathologist - Restored */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Know Your Pathologist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dr. Sunil Nagori */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900">Dr. Sunil Nagori</h3>
              <p className="text-sm text-gray-600 mt-1">MD, Pathology • MBBS</p>
              <p className="text-sm text-gray-700 mt-3">
                Senior Pathologist • Hematology • Clinical Pathology
              </p>
            </div>
            {/* Dr. Shalin Nagori */}
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900">Dr. Shalin Nagori</h3>
              <p className="text-sm text-gray-600 mt-1">MD, Pathology • MBBS</p>
              <p className="text-sm text-gray-700 mt-3">
                Histopathology • Cytology
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
