import React from "react";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="section-header">
          <h1 className="section-title flex items-center gap-3 justify-center">
            <span className="text-5xl">🧬</span>
            About City Pathology Laboratory
          </h1>
          <p className="section-subtitle">
            Your trusted healthcare partner in Halol, providing accurate 
            diagnostic services with compassion and excellence since establishment.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="section bg-white">
          <div className="card">
            <div className="card-header">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">📜</span>
                Our Story
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>City Pathology Laboratory</strong> stands as Halol's premier destination for 
                accurate, ethical, and patient-centered diagnostic services. For over two decades, 
                we have been serving individuals, families, and industries with unwavering commitment 
                to scientific excellence and compassionate healthcare.
              </p>
              <p>
                Founded with a vision to make quality healthcare accessible to all, our laboratory 
                has grown from a small diagnostic center to a comprehensive pathology facility. 
                Located at 2nd Floor Dwarkesh Chambers Near Bus Stand Halol, we serve not just the local community but also support various industrial 
                establishments in the region with comprehensive health checkup programs and occupational 
                health services.
              </p>
              <p>
                We understand that behind every test report is a person seeking answers, hope, and 
                healing. That's why we combine cutting-edge technology with personalized care to 
                deliver not just reports, but peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="section">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span className="text-4xl">🎯</span>
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide accurate, timely, and accessible diagnostic services that empower 
                patients and healthcare professionals to make informed decisions. We strive to 
                maintain the highest standards of quality, ethics, and compassion in everything we do.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">✔️</span>
                  <span className="text-gray-700">Deliver accurate and reliable test results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">✔️</span>
                  <span className="text-gray-700">Maintain highest quality standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">✔️</span>
                  <span className="text-gray-700">Provide compassionate patient care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">✔️</span>
                  <span className="text-gray-700">Make healthcare accessible to all</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="card">
              <div className="card-header">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span className="text-4xl">🔭</span>
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and technologically advanced diagnostic center in Gujarat, 
                known for our commitment to excellence, innovation, and patient-first approach. 
                We envision a future where quality healthcare is within everyone's reach.
              </p>
              <div className="mt-6 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 italic">
                  "Excellence in diagnostics, compassion in care, trust in every report."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section bg-white">
          <div className="card">
            <div className="card-header">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">⭐</span>
                Our Core Values
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Accuracy */}
              <div className="text-center">
                <div className="icon-wrapper mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                <p className="text-gray-600">
                  Precision in every test, reliability in every result. We employ stringent 
                  quality control measures to ensure the highest accuracy.
                </p>
              </div>

              {/* Integrity */}
              <div className="text-center">
                <div className="icon-wrapper icon-gold mx-auto mb-4">
                  🤝
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Ethical practices and transparent operations. We maintain complete honesty 
                  in all our dealings and reporting.
                </p>
              </div>

              {/* Compassion */}
              <div className="text-center">
                <div className="icon-wrapper mx-auto mb-4">
                  ❤️
                </div>
                <h3 className="text-xl font-bold mb-2">Compassion</h3>
                <p className="text-gray-600">
                  Understanding the human side of healthcare. Every patient is treated with 
                  dignity, respect, and empathy.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-center">
                <div className="icon-wrapper mx-auto mb-4">
                  💡
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Embracing latest technology and methodologies to provide cutting-edge 
                  diagnostic solutions.
                </p>
              </div>

              {/* Excellence */}
              <div className="text-center">
                <div className="icon-wrapper icon-gold mx-auto mb-4">
                  🏆
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Commitment to continuous improvement and maintaining the highest standards 
                  in all aspects of our service.
                </p>
              </div>

              {/* Accessibility */}
              <div className="text-center">
                <div className="icon-wrapper mx-auto mb-4">
                  🌍
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  Making quality diagnostic services available and affordable to everyone in 
                  our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section">
          <div className="card">
            <div className="card-header">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">🌟</span>
                Why Choose City Pathology Laboratory?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="icon-wrapper flex-shrink-0">
                  🔬
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">
                    State-of-the-art equipment and latest diagnostic technologies for precise results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-wrapper flex-shrink-0">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Highly qualified pathologists and lab technicians with years of experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-wrapper icon-gold flex-shrink-0">
                  ⏱️
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Quick Turnaround</h3>
                  <p className="text-gray-600">
                    Fast and efficient processing with most results available within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-wrapper flex-shrink-0">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Comprehensive Testing</h3>
                  <p className="text-gray-600">
                    Wide range of tests covering all aspects of diagnostic pathology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-wrapper flex-shrink-0">
                  🔒
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Privacy & Confidentiality</h3>
                  <p className="text-gray-600">
                    Complete confidentiality and secure handling of all patient information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-wrapper icon-gold flex-shrink-0">
                  💰
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Affordable Pricing</h3>
                  <p className="text-gray-600">
                    Competitive pricing without compromising on quality or accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="card bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Experience Quality Healthcare?
              </h2>
              <p className="text-lg mb-8 text-blue-50">
                Visit us at 2nd Floor Dwarkesh Chambers Near Bus Stand Halol or book your appointment online today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="btn btn-secondary"
                >
                  📞 Contact Us
                </a>
                <a 
                  href="https://calendly.com/citypathologylaboratory/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  📅 Book Appointment
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
