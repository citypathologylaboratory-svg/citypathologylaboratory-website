export default function IndustrialHealthCheckupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="section-header">
          <h1 className="section-title">Industrial Health Checkup</h1>
          <p className="section-subtitle">
            Comprehensive occupational health screening and wellness packages tailored for factories, plants, and corporate teams in and around Halol.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid-3 mb-8">
          <div className="card text-center">
            <div className="icon-wrapper mx-auto">🏭</div>
            <h3 className="font-bold text-lg mb-2">Factory-Ready</h3>
            <p className="text-gray-600">On-site and in-lab screening options as per compliance</p>
          </div>
          <div className="card text-center">
            <div className="icon-wrapper icon-emerald mx-auto">🧪</div>
            <h3 className="font-bold text-lg mb-2">Comprehensive Tests</h3>
            <p className="text-gray-600">CBC, LFT, KFT, Urine, Vision, Audiometry (tie-ups), ECG and more</p>
          </div>
          <div className="card text-center">
            <div className="icon-wrapper mx-auto">🕒</div>
            <h3 className="font-bold text-lg mb-2">Fast Turnaround</h3>
            <p className="text-gray-600">Priority processing and consolidated reports</p>
          </div>
        </div>

        {/* Packages */}
        <section className="section bg-white">
          <div className="section-header">
            <h2 className="section-title">Popular Packages</h2>
            <p className="section-subtitle">Customizable as per your industry and regulatory needs</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-bold">Basic Industrial Check</h3>
              </div>
              <ul className="text-gray-600 space-y-1">
                <li>• CBC, Blood Sugar, Lipid Profile</li>
                <li>• Liver Function Tests (LFT)</li>
                <li>• Kidney Function Tests (KFT)</li>
                <li>• Urine Routine & Microscopy</li>
                <li>• Vision & BMI Assessment</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-bold">Standard Industrial Check</h3>
              </div>
              <ul className="text-gray-600 space-y-1">
                <li>• All tests from Basic Package</li>
                <li>• Chest X-Ray (Digital)</li>
                <li>• ECG (12 Lead)</li>
                <li>• Thyroid Profile (T3, T4, TSH)</li>
                <li>• Audiometry (via partner clinic)</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-bold">Comprehensive Check</h3>
              </div>
              <ul className="text-gray-600 space-y-1">
                <li>• All tests from Standard Package</li>
                <li>• Spirometry (Lung Function)</li>
                <li>• HbA1c (Glycated Hemoglobin)</li>
                <li>• Vitamin D & B12</li>
                <li>• Specialized Occupational Panels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose City Pathology */}
        <section className="section bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="section-header">
            <h2 className="section-title">Why Choose City Pathology Laboratory?</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">✅</span> NABL Accredited
              </h3>
              <p className="text-gray-600">Certified lab ensuring quality and reliability in every report.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">👨‍⚕️</span> Expert Pathologists
              </h3>
              <p className="text-gray-600">Experienced team with specialized knowledge in occupational health.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🚀</span> Fast Reports
              </h3>
              <p className="text-gray-600">Quick turnaround time with accurate and detailed diagnostics.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">💰</span> Competitive Pricing
              </h3>
              <p className="text-gray-600">Affordable packages without compromising on quality standards.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="grid-3">
            <div className="card text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">1. Get in Touch</h3>
              <p className="text-gray-600">
                Call us or WhatsApp to discuss your requirements and employee count.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">2. Schedule Visit</h3>
              <p className="text-gray-600">
                Choose between on-site checkups or scheduled lab visits for your team.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">3. Get Reports</h3>
              <p className="text-gray-600">
                Receive consolidated, digital reports within the agreed timeline.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-bg-teal rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Industrial Health Checkup?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Contact our team for customized packages and bulk booking discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919409277144"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp px-8 py-4 text-lg"
            >
              📱 WhatsApp Us
            </a>
            <a 
              href="/contact"
              className="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              📧 Contact Team
            </a>
            <a 
              href="/book-appointment"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition text-lg"
            >
              📅 Book Appointment for Industrial Health Check Up
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
