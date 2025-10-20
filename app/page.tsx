export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Know Your Pathologist Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Know Your Pathologist
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Meet our experienced and dedicated pathologists who ensure accurate and reliable diagnostic services.
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
                href="https://calendly.com/citypathologylaboratory/30min"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="card">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art diagnostic equipment ensuring precise and reliable test results.
              </p>
            </div>
            
            <div className="card">
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-bold mb-4">Expert Pathologists</h3>
              <p className="text-gray-600">
                Highly qualified and experienced professionals dedicated to accurate diagnostics.
              </p>
            </div>
            
            <div className="card">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Quick Results</h3>
              <p className="text-gray-600">
                Fast turnaround time without compromising on accuracy and quality.
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
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                🏭
                Industrial Health Checkups
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive health screening packages for industrial workforce.
              </p>
              <a
                href="/industrial-health-checkup"
                className="text-blue-600 hover:text-orange-500 font-semibold"
              >
                Learn More →
              </a>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                🧪
                Clinical Pathology
              </h3>
              <p className="text-gray-600 mb-4">
                Complete blood count, urine analysis, and body fluid examinations.
              </p>
              <a
                href="/tests"
                className="text-blue-600 hover:text-orange-500 font-semibold"
              >
                View Tests →
              </a>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                🩸
                Hematology
              </h3>
              <p className="text-gray-600 mb-4">
                Blood disorder diagnosis, CBC, hemoglobin tests, and more.
              </p>
              <a
                href="/tests"
                className="text-blue-600 hover:text-orange-500 font-semibold"
              >
                View Tests →
              </a>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                🦠
                Microbiology
              </h3>
              <p className="text-gray-600 mb-4">
                Culture and sensitivity tests for bacterial and fungal infections.
              </p>
              <a
                href="/tests"
                className="text-blue-600 hover:text-orange-500 font-semibold"
              >
                View Tests →
              </a>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                💉
                Biochemistry
              </h3>
              <p className="text-gray-600 mb-4">
                Blood sugar, lipid profile, liver and kidney function tests.
              </p>
              <a
                href="/tests"
                className="text-blue-600 hover:text-orange-500 font-semibold"
              >
                View Tests →
              </a>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                🧬
                Serology
              </h3>
              <p className="text-gray-600 mb-4">
                Antibody testing, infectious disease screening, and immunology.
              </p>
              <a
                href="/tests"
                className="text-blue-600 hover:text-orange-500 font-semibold"
              >
                View Tests →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment Section with Calendly */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Book Your Appointment</h2>
            <p className="text-xl mb-8 text-blue-50">
              Schedule your industrial health checkup or diagnostic test appointment easily.
            </p>
            <div className="bg-white rounded-lg p-2">
              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/citypathologylaboratory/30min"
                style={{minWidth: '320px', height: '630px'}}
              ></div>
            </div>
            <p className="mt-6 text-sm text-blue-50">
              Or contact us directly via <a className="underline hover:text-orange-300" href="https://wa.me/919409277144" target="_blank" rel="noopener noreferrer">WhatsApp</a> or <a className="underline hover:text-orange-300" href="tel:+919409277144">phone</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title gradient-text">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Location
              </h3>
              <p className="text-gray-600">
                City Pathology Laboratory<br/>
                Near Railway Station,<br/>
                Halol, Gujarat 389350
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Phone
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+919409277144"
                  className="flex items-center gap-2 text-blue-600 hover:text-orange-500"
                >
                  📞 +91-94092 77144
                </a>
                <p className="flex items-center gap-2 text-gray-600">
                  🕒 Mon-Sat: 8:00 AM - 8:00 PM
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
                  href="https://calendly.com/citypathologylaboratory/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  📅 Book Appointment
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
