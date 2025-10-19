export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="mb-8">
              <img 
                src="/logo.jpg"
                alt="City Pathology Laboratory"
                className="h-24 w-24 mx-auto rounded-full border-4 border-emerald-400 shadow-2xl mb-4 pulse"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Welcome to City Pathology Laboratory
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Providing accurate, reliable diagnostic services with cutting-edge technology 
              and expert pathologists in Halol, Gujarat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919409277144"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp px-8 py-4 text-lg"
              >
                📱 WhatsApp for Instant Support
              </a>
              <a 
                href="/book-appointment"
                className="btn btn-primary px-8 py-4 text-lg"
              >
                📅 Book Appointment for Industrial Health Check Up
              </a>
            </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title gradient-text">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group">
              <div className="mb-4 text-5xl inline-block p-4 bg-teal-50 rounded-full group-hover:scale-110 transition-transform">🔬</div>
              <h3 className="text-2xl font-bold mb-3 text-teal-800">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art equipment and latest diagnostic technologies for accurate results.
              </p>
            </div>
            <div className="card text-center group">
              <div className="mb-4 text-5xl inline-block p-4 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform">👨‍⚕️</div>
              <h3 className="text-2xl font-bold mb-3 text-teal-800">Expert Pathologists</h3>
              <p className="text-gray-600 leading-relaxed">
                Highly qualified and experienced pathologists committed to excellence.
              </p>
            </div>
            <div className="card text-center group">
              <div className="mb-4 text-5xl inline-block p-4 bg-teal-50 rounded-full group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-teal-800">Fast Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick turnaround time without compromising accuracy and reliability.
              </p>
            </div>
            <div className="card text-center group">
              <div className="mb-4 text-5xl inline-block p-4 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform">💯</div>
              <h3 className="text-2xl font-bold mb-3 text-teal-800">NABL Accredited</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified and accredited laboratory ensuring quality standards.
              </p>
            </div>
            <div className="card text-center group">
              <div className="mb-4 text-5xl inline-block p-4 bg-teal-50 rounded-full group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-teal-800">Affordable Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing with no compromise on quality or accuracy.
              </p>
            </div>
            <div className="card text-center group">
              <div className="mb-4 text-5xl inline-block p-4 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform">🏥</div>
              <h3 className="text-2xl font-bold mb-3 text-teal-800">Comprehensive Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Wide range of diagnostic tests and health checkup packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title gradient-text">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:shadow-2xl">
              <div className="text-4xl mb-4">🩸</div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Blood Tests</h3>
              <p className="text-gray-600 mb-4">
                Complete blood count, blood sugar, cholesterol, thyroid, and more.
              </p>
              <a href="/tests" className="text-teal-600 font-semibold hover:text-teal-800 inline-flex items-center gap-2">
                View Tests →
              </a>
            </div>
            <div className="card group hover:shadow-2xl">
              <div className="text-4xl mb-4">💉</div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Pathology Tests</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive pathology and histopathology investigations.
              </p>
              <a href="/tests" className="text-teal-600 font-semibold hover:text-teal-800 inline-flex items-center gap-2">
                View Tests →
              </a>
            </div>
            <div className="card group hover:shadow-2xl">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Diagnostic Tests</h3>
              <p className="text-gray-600 mb-4">
                Advanced diagnostic tests for accurate disease detection.
              </p>
              <a href="/tests" className="text-teal-600 font-semibold hover:text-teal-800 inline-flex items-center gap-2">
                View Tests →
              </a>
            </div>
            <div className="card group hover:shadow-2xl">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Industrial Health Checkups</h3>
              <p className="text-gray-600 mb-4">
                Specialized health checkups for industrial workers and employees.
              </p>
              <a href="/industrial-health-checkup" className="text-teal-600 font-semibold hover:text-teal-800 inline-flex items-center gap-2">
                Learn More →
              </a>
            </div>
            <div className="card group hover:shadow-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Health Packages</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive health checkup packages for all age groups.
              </p>
              <a href="/tests" className="text-teal-600 font-semibold hover:text-teal-800 inline-flex items-center gap-2">
                View Packages →
              </a>
            </div>
            <div className="card group hover:shadow-2xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3 text-teal-800">Home Sample Collection</h3>
              <p className="text-gray-600 mb-4">
                Convenient home visit service for sample collection.
              </p>
              <a href="/contact" className="text-teal-600 font-semibold hover:text-teal-800 inline-flex items-center gap-2">
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg-teal py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Book your appointment today and experience quality healthcare services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919409277144"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp px-8 py-4 text-lg"
            >
              📱 WhatsApp Now
            </a>
            <a 
              href="/book-appointment"
              className="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              📅 Book Appointment for Industrial Health Check Up
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title gradient-text">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Our Location
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>City Pathology Laboratory</strong><br/>
                Opp. Old Bus Stand, <br/>
                Near Jaydeep Petrol Pump, <br/>
                Halol, Gujarat 389350
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:+919409277144" 
                  className="flex items-center gap-2 text-teal-600 hover:text-teal-800"
                >
                  <span>📞</span> +91-94092 77144
                </a>
                <p className="flex items-center gap-2 text-gray-600">
                  <span>🕒</span> Mon-Sat: 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/919409277144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full"
                >
                  💬 Chat on WhatsApp
                </a>
                <a 
                  href="/book-appointment"
                  className="btn btn-primary w-full"
                >
                  📅 Book Appointment for Industrial Health Check Up
                </a>
                <a 
                  href="/contact"
                  className="btn btn-secondary w-full"
                >
                  📧 Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
