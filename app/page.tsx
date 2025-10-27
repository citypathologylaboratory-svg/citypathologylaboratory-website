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
              <h3 className="text-2xl font-bold mb-3">Easy Booking</h3>
              <p className="text-gray-600">Convenient online appointment booking via Calendly and instant WhatsApp support.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Doctors Profiles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Our Expert Pathologists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-600">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                👨‍⚕️
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Dr. Sunil Nagori</h3>
              <p className="text-primary-600 text-center mb-4 font-semibold">MBBS, DCP, CIH</p>
              <p className="text-gray-600 text-center mb-4">Consultant Pathologist and Industrial Physician</p>
              <ul className="text-gray-700 space-y-2">
                ✓ Specialized in hematology and clinical chemistry
                ✓ Former consultant at leading hospitals
                ✓ Published researcher in diagnostic medicine
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-600">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                👩‍⚕️
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Dr. Shalin Nagori</h3>
              <p className="text-primary-600 text-center mb-4 font-semibold">MBBS, MD (Path), PGCIH</p>
              <p className="text-gray-600 text-center mb-4">Consultant Pathologist and Industrial Physician</p>
              <ul className="text-gray-700 space-y-2">
                ✓ Expert in histopathology and cytology
                ✓ Specialized in cancer diagnostics
                ✓ Certified in molecular pathology
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-bold mb-2 text-primary-700">Blood Tests</h4>
              <p className="text-gray-600">Complete blood count, lipid profile, and more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-bold mb-2 text-primary-700">Urine Tests</h4>
              <p className="text-gray-600">Routine and microscopic analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-bold mb-2 text-primary-700">Diabetes Screening</h4>
              <p className="text-gray-600">HbA1c, fasting blood sugar, and OGTT</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h4 className="text-xl font-bold mb-2 text-primary-700">Thyroid Profile</h4>
              <p className="text-gray-600">Complete thyroid function tests</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition inline-block" href="/tests">
              View All Tests
            </a>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Book your appointment today and experience quality diagnostic services.</p>
          <div className="flex gap-4 justify-center">
            <a className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition" href="/book-appointment">
              Book Appointment
            </a>
            <a className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
