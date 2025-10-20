export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="/logo.jpg" 
              alt="City Pathology Laboratory Logo" 
              className="mx-auto h-32 w-32 rounded-full border-4 border-orange-400 shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to City Pathology Laboratory
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your Trusted Partner in Health Diagnostics
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto text-blue-50">
            Experience accurate and timely diagnostic services with state-of-the-art technology 
            and expert pathologists in Halol, Gujarat.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>📱</span> WhatsApp Us
            </a>
            <a
              href="https://calendly.com/citypathologyhalol/pathology-appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              📅 Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-blue-50 border-2 border-blue-200 hover:border-orange-400">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Advanced Technology</h3>
              <p className="text-gray-600">
                Equipped with the latest diagnostic equipment for accurate results
              </p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-green-50 border-2 border-green-200 hover:border-orange-400">
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Pathologists</h3>
              <p className="text-gray-600">
                Highly qualified and experienced medical professionals
              </p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-orange-50 border-2 border-orange-200 hover:border-orange-400">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quick Results</h3>
              <p className="text-gray-600">
                Fast turnaround time for all diagnostic tests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Industrial Health Checkup</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive health screening packages for employees and industries
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
              <div className="text-4xl mb-4">🩸</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Clinical Pathology</h3>
              <p className="text-gray-600 mb-4">
                Complete blood count, urine analysis, and body fluid examinations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-600">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hematology</h3>
              <p className="text-gray-600 mb-4">
                Blood disorder diagnosis and hemoglobin analysis
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="text-4xl mb-4">🦠</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Microbiology</h3>
              <p className="text-gray-600 mb-4">
                Culture and sensitivity testing for infections
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Biochemistry</h3>
              <p className="text-gray-600 mb-4">
                Blood sugar, lipid profile, liver and kidney function tests
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-600">
              <div className="text-4xl mb-4">🪄</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Serology</h3>
              <p className="text-gray-600 mb-4">
                HIV, Hepatitis, and other antibody tests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Book Your Appointment Today
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/citypathologyhalol/pathology-appointment?hide_gdpr_banner=1" 
              style={{minWidth: '320px', height: '630px'}}
            ></div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-orange-400 transition-colors">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Location</h3>
              <p className="text-gray-600">
                2nd Floor, Dwarkesh Chambers<br />
                Near Bus Stand, Halol<br />
                Gujarat, India
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200 hover:border-orange-400 transition-colors">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Phone</h3>
              <p className="text-gray-600">
                +91 98765 43210<br />
                citypathologyhalol@gmail.com
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quick Actions</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
