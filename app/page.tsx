"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Placard/Banner */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">City Pathology Laboratory</h1>
              <p className="text-blue-100 text-lg">Trusted Healthcare Partner - Precision Diagnostics</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/citypathologylaboratory/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                📅 Book Appointment
              </a>
              <a
                href="https://wa.me/919409277144"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-green-600 hover:bg-green-50 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                💬 WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-16 border-b-4 border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to City Pathology Laboratory
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner in healthcare diagnostics. We provide accurate, reliable, and timely pathology services with state-of-the-art technology and experienced professionals.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 max-w-2xl mx-auto rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="font-medium">2nd Floor Dwarkesh Chambers Near Bus Stand Halol</span>
              </div>
              <div className="hidden md:block text-blue-300">|</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                <a href="tel:+919409277144" className="font-bold text-blue-600 hover:text-blue-800">+91-94092 77144</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Services
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Comprehensive diagnostic solutions for all your healthcare needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Industrial Health Checkup Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-blue-500">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Industrial Health Checkup</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive health assessments for workplace safety and employee wellness.
              </p>
              <a
                href="/industrial-health-checkup"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </a>
            </div>

            {/* FNAC Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-purple-500">
              <div className="text-4xl mb-4">💉</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">FNAC</h4>
              <p className="text-gray-600 mb-4">
                Fine Needle Aspiration Cytology for accurate tissue diagnosis with minimal invasion.
              </p>
              <a
                href="/tests"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </a>
            </div>

            {/* Hematology Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-red-500">
              <div className="text-4xl mb-4">🩸</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Hematology</h4>
              <p className="text-gray-600 mb-4">
                Complete blood analysis including CBC, hemoglobin, and blood cell counts.
              </p>
              <a
                href="/tests"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </a>
            </div>

            {/* Microbiology Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-green-500">
              <div className="text-4xl mb-4">🦠</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Microbiology</h4>
              <p className="text-gray-600 mb-4">
                Bacterial, viral, and fungal culture tests for infection diagnosis.
              </p>
              <a
                href="/tests"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </a>
            </div>

            {/* Biochemistry Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-yellow-500">
              <div className="text-4xl mb-4">🧪</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Biochemistry</h4>
              <p className="text-gray-600 mb-4">
                Blood sugar, liver function, kidney function, and lipid profile tests.
              </p>
              <a
                href="/tests"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </a>
            </div>

            {/* Serology Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-pink-500">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Serology</h4>
              <p className="text-gray-600 mb-4">
                Antibody and antigen testing for infectious diseases and immunity.
              </p>
              <a
                href="/tests"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </a>
            </div>

            {/* Clinical Pathology Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-indigo-500">
              <div className="text-4xl mb-4">🩺</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Clinical Pathology</h4>
              <p className="text-gray-600 mb-4">
                Urine analysis, stool examination, and other clinical diagnostic tests.
              </p>
              <a
                href="/tests"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links & Contact Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-blue-200 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/tests" className="text-blue-200 hover:text-white transition-colors">
                    All Tests
                  </a>
                </li>
                <li>
                  <a href="/industrial-health-checkup" className="text-blue-200 hover:text-white transition-colors">
                    Industrial Health Checkup
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-blue-200 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <div className="space-y-3 text-blue-100">
                <p className="flex items-start gap-2">
                  <span>📍</span>
                  <span>2nd Floor Dwarkesh Chambers<br />Near Bus Stand Halol</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+919409277144" className="hover:text-white">+91-94092 77144</a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xl font-bold mb-4">Operating Hours</h4>
              <div className="text-blue-100 space-y-2">
                <p>Monday - Saturday</p>
                <p className="font-semibold text-white">8:00 AM - 8:00 PM</p>
                <p className="mt-4">Sunday</p>
                <p className="font-semibold text-white">9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 City Pathology Laboratory. All rights reserved.</p>
          <p className="mt-2 text-sm">Committed to excellence in diagnostic services</p>
        </div>
      </footer>
    </main>
  );
}
