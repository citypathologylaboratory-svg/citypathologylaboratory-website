export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
                <span className="text-emerald-700 text-2xl">✓</span>
                <span className="text-emerald-800 text-sm font-semibold">Trusted Since 1990 • 35+ Years of Excellence</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health,
                <span className="text-blue-600"> Our Priority</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Advanced diagnostic services with cutting-edge technology, expert pathologists, and accurate results you can trust.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 py-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">N</span>
                  </div>
                  <span className="font-medium">NABL Accredited</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">N</span>
                  </div>
                  <span className="font-medium">NABH Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">1M+</span>
                  </div>
                  <span className="font-medium">Patients Served</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                  📅
                  Book Appointment
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                  💬
                  WhatsApp Us
                </button>
              </div>

              {/* FNAC Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 rounded-lg shadow-lg">
                <span className="text-white font-bold text-sm tracking-wide">🔬 FNAC TEST AVAILABLE</span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/86685960/36f7bea1-5d9b-46b0-99e8-4c28b33e1148/image.jpg"
                  alt="Professional medical laboratory staff"
                  className="w-full h-auto object-cover"
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Feature Cards */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-2xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Quick Results</p>
                    <p className="text-xs text-gray-600">Same day reports</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Expert Team</p>
                    <p className="text-xs text-gray-600">Certified pathologists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Below Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 text-3xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Results</h3>
              <p className="text-sm text-gray-600">Get your reports within 24 hours with our fast turnaround service.</p>
            </div>

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
