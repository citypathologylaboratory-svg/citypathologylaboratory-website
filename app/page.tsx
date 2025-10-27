'use client';
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
              📱 WhatsApp Us
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

      {/* Services Section - Rotating Arc Format */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Our Services
          </h2>
          <div className="relative w-full max-w-6xl mx-auto" style={{ height: 600 }}>
            <style jsx>{`
              @keyframes rotate-arc {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .service-arc {
                animation: rotate-arc 60s linear infinite;
              }
              .service-item {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 180px;
                height: 180px;
                margin: -90px 0 0 -90px;
                transition: all 0.3s ease;
              }
              .service-item:hover {
                transform: scale(1.15);
                z-index: 10;
              }
              .service-item:hover .service-card {
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                border-color: #fb923c;
              }
              .service-card {
                width: 100%;
                height: 100%;
                background: white;
                border-radius: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                border: 3px solid transparent;
                transition: all 0.3s ease;
              }
              .service-icon { font-size: 2.5rem; margin-bottom: 8px; }
              .service-title { font-size: 0.8rem; font-weight: 700; text-align: center; color: #1f2937; line-height: 1.2; }
              @media (max-width: 768px) {
                .service-arc { animation: none; position: relative; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
                .service-item { position: relative; width: 100%; height: 160px; margin: 0; top: auto; left: auto; }
                .service-card { border-radius: 1rem; }
              }
            `}</style>

            <div className="service-arc relative w-full h-full">
              {[
                { icon: '🔬', title: 'Pathological Investigation', angle: 0, color: '#3b82f6' },
                { icon: '🚑', title: 'First Aid Training', angle: 30, color: '#10b981' },
                { icon: '🏭', title: 'Industrial Health Check Up', angle: 60, color: '#f59e0b' },
                { icon: '👂', title: 'Audiometry', angle: 90, color: '#ef4444' },
                { icon: '🫁', title: 'PFT', angle: 120, color: '#8b5cf6' },
                { icon: '💓', title: 'ECG', angle: 150, color: '#ec4899' },
                { icon: '📷', title: 'X-Ray', angle: 180, color: '#06b6d4' },
                { icon: '👁️', title: 'Titmus Vision Screening', angle: 210, color: '#f97316' },
                { icon: '🏥', title: 'OHC Setup Guidance', angle: 240, color: '#14b8a6' },
                { icon: '👥', title: 'Staff for Industries', angle: 270, color: '#6366f1' },
                { icon: '💧', title: 'Water Testing', angle: 300, color: '#84cc16' },
                { icon: '🚨', title: 'Ambulance For Industries', angle: 330, color: '#f43f5e' }
              ].map((service, index) => {
                const radius = 250;
                const angleRad = (service.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div key={index} className="service-item" style={{ transform: `translate(${x}px, ${y}px)`, animationDelay: `${index * 0.1}s` }}>
                    <div className="service-card" style={{ borderColor: service.color }}>
                      <div className="service-icon">{service.icon}</div>
                      <div className="service-title">{service.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl z-0">
              <div className="text-center">
                <div className="text-4xl mb-2">🏥</div>
                <div className="text-white font-bold text-sm">City Pathology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Know Your Pathologist Section (replaces Book Appointment) */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Know Your Pathologist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dr. Sunil Nagori */}
            <div className="bg-white rounded-xl shadow-2xl p-6 flex items-start gap-4">
              <div className="h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center text-3xl">🧪</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Dr. Sunil Nagori</h3>
                <p className="text-sm font-semibold text-orange-600">MD (Pathology), MBBS</p>
                <p className="mt-3 text-gray-600">
                  Senior Pathologist with extensive experience in diagnostic hematology, clinical pathology,
                  and laboratory quality management. Leading the lab with a focus on accuracy and compassion.
                </p>
              </div>
            </div>

            {/* Dr. Shalin Nagori */}
            <div className="bg-white rounded-xl shadow-2xl p-6 flex items-start gap-4">
              <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl">🔬</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Dr. Shalin Nagori</h3>
                <p className="text-sm font-semibold text-blue-600">MD (Pathology), MBBS</p>
                <p className="mt-3 text-gray-600">
                  Experienced Pathologist specializing in histopathology and cytology, with strong interest
                  in modern diagnostics and patient-centered reporting.
                </p>
              </div>
            </div>
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
                2nd Floor, Dwarkesh Chambers
                Near Bus Stand, Halol
                Gujarat, India
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200 hover:border-orange-400 transition-colors">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Phone</h3>
              <p className="text-gray-600">
                +91 98765 43210
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
