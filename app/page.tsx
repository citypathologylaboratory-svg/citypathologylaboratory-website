export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to City Pathology Laboratory</h1>
            <p className="text-xl mb-8">Providing accurate, reliable diagnostic services with cutting-edge technology and expert pathologists.</p>
            <div className="flex gap-4">
              <a href="https://wa.me/919409277144" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition">
                WhatsApp for Appointments, Bookings, Queries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Health Check Up Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Industrial Health Check Up</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg border-2 border-primary-200">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Book your Industrial Health Check Up appointment through our Calendly scheduling system for a convenient and efficient experience.
            </p>
            <div className="flex justify-center">
              <a href="https://calendly.com/citypathologylaboratory/30min" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block">
                Book Industrial Health Check Up
              </a>
            </div>
          </div>
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
              <p className="text-gray-600">Stringent quality control measures ensuring reliable and trustworthy results.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-primary-600 text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3">Corporate Health</h3>
              <p className="text-gray-600">Specialized services for employee health screenings and industrial health programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-primary-200">
              <div className="text-primary-600 text-3xl mb-3">🩸</div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">Blood Tests</h3>
              <p className="text-gray-600">Complete blood count, blood sugar, lipid profile, and more.</p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-primary-200">
              <div className="text-primary-600 text-3xl mb-3">🧪</div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">Urine Tests</h3>
              <p className="text-gray-600">Urinalysis, urine culture, and kidney function tests.</p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-primary-200">
              <div className="text-primary-600 text-3xl mb-3">🏭</div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">Industrial Health</h3>
              <p className="text-gray-600">Pre-employment and periodic health check-ups for employees.</p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-primary-200">
              <div className="text-primary-600 text-3xl mb-3">💉</div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">Vaccination</h3>
              <p className="text-gray-600">Complete vaccination services for all age groups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Meet Our Expert Pathologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Dr. Sunil Nagori */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-primary-200">
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
                  SN
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">Dr. Sunil Nagori</h3>
                  <p className="text-lg font-semibold text-primary-600">M.B.B.S., D.C.P., C.I.H.</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 font-medium">✓ Consultant Pathologist</p>
                <p className="text-gray-700 font-medium">✓ Industrial Physician</p>
                <p className="text-gray-600 mt-4">Specializing in clinical pathology and occupational health with extensive experience in diagnostic services.</p>
              </div>
            </div>
            {/* Dr. Shalin Nagori */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-primary-200">
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6">
                  SN
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">Dr. Shalin Nagori</h3>
                  <p className="text-lg font-semibold text-primary-600">M.B.B.S., M.D.(Path), P.G.C.I.H.</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 font-medium">✓ Consultant Pathologist</p>
                <p className="text-gray-700 font-medium">✓ Industrial Physician</p>
                <p className="text-gray-600 mt-4">Expert in anatomical and clinical pathology with postgraduate certification in industrial health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
