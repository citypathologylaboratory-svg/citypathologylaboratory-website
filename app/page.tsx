export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to City Pathology Laboratory</h1>
            <p className="text-xl mb-8">Providing accurate, reliable diagnostic services with cutting-edge technology and expert pathologists.</p>
            <img src="/helicopter_fnac.png" alt="Helicopter FNAC" className="mb-8 max-w-md rounded-lg shadow-lg" />
            <div className="flex gap-4">
              <a className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition" href="/book-appointment">
                Book Appointment
              </a>
              <a className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition" href="https://wa.me/919409277144" target="_blank" rel="noopener noreferrer">
                WhatsApp for Appointments, Bookings, Queries
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
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-700">Our Services</h2>
          <p className="text-center text-gray-600 mb-12">We offer a wide range of pathology services to meet your diagnostic needs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/tests" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-primary-600">
              <h3 className="text-xl font-bold mb-2 text-primary-700">🧪 Blood Tests</h3>
              <p className="text-gray-600">Complete blood count, sugar levels, and more</p>
            </a>
            <a href="/tests" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-primary-600">
              <h3 className="text-xl font-bold mb-2 text-primary-700">🦠 Microbiology</h3>
              <p className="text-gray-600">Culture tests, sensitivity analysis</p>
            </a>
            <a href="/tests" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-primary-600">
              <h3 className="text-xl font-bold mb-2 text-primary-700">🔬 Histopathology</h3>
              <p className="text-gray-600">Tissue examination and biopsy analysis</p>
            </a>
            <a href="/tests" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-primary-600">
              <h3 className="text-xl font-bold mb-2 text-primary-700">💉 Clinical Pathology</h3>
              <p className="text-gray-600">Urine, stool, and body fluid analysis</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
