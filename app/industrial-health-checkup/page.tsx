export default function IndustrialHealthCheckupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
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
            <div className="icon-wrapper icon-gold mx-auto">🧪</div>
            <h3 className="font-bold text-lg mb-2">Comprehensive Tests</h3>
            <p className="text-gray-600">CBC, LFT, KFT, Urine, Vision, Audiometry, PFT, ECG, X Ray</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Package */}
            <div className="card border-2 border-blue-200 hover:border-blue-500 transition">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-blue-900">Basic</h3>
                <p className="text-gray-500 text-sm">Pre-employment / Periodic</p>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Complete Blood Count (CBC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Random Blood Sugar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Urine Routine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">General Physical Exam</span>
                </li>
                {/* Added tests as requested */}
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Form 32</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Form 33</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Blood Group</span>
                </li>
              </ul>
              <div className="text-center text-blue-900 font-semibold mb-4">Price: ₹400</div>
              <a
                href="https://calendly.com/citypathologylaboratory/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-center"
              >
                Book Now
              </a>
            </div>
            {/* Standard Package */}
            <div className="card border-2 border-amber-400 hover:border-amber-600 transition shadow-lg">
              <div className="bg-amber-500 text-white px-3 py-1 text-xs font-bold rounded-full inline-block mb-2">POPULAR</div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-blue-900">Standard</h3>
                <p className="text-gray-500 text-sm">Comprehensive screening</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">All Basic tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Liver Function Test (LFT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Kidney Function Test (KFT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Lipid Profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">ECG (via tie-up)</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/citypathologylaboratory/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full text-center"
              >
                Book Now
              </a>
            </div>
            {/* Premium Package */}
            <div className="card border-2 border-blue-200 hover:border-blue-500 transition">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-blue-900">Premium</h3>
                <p className="text-gray-500 text-sm">Executive / Annual health</p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">All Standard tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Thyroid Profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">HbA1c (Diabetes marker)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Vision & Audiometry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm">Chest X-ray (via tie-up)</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/citypathologylaboratory/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Why Partner With Us?</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">📄 Regulatory Compliance</h3>
              <p className="text-gray-600">We help you meet Factories Act and other regulatory requirements with proper documentation and format.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">👥 Group Discounts</h3>
              <p className="text-gray-600">Special pricing for bulk bookings. Contact us for customized quotations.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">🚑 On-Site Services</h3>
              <p className="text-gray-600">We can arrange sample collection camps at your factory/office premises.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-3">📊 Detailed Reports</h3>
              <p className="text-gray-600">Consolidated reports in Excel/PDF format with individual employee records.</p>
            </div>
          </div>
        </section>
        {/* CTA Section with Calendly */}
        <section className="gradient-bg-navy text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Industrial Health Checkup Today</h2>
          <p className="text-xl mb-6 text-blue-100">Book online or contact us for group bookings and custom packages.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/citypathologylaboratory/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-8 py-4 text-lg"
            >
              📅 Book Appointment
            </a>
            <a
              href="https://wa.me/919409277144"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp px-8 py-4 text-lg"
            >
              📱 WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
