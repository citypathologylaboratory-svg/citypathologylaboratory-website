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
                <li>• LFT, KFT, Urine Routine</li>
                <li>• Blood Pressure, BMI</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-bold">Standard Industrial Panel</h3>
              </div>
              <ul className="text-gray-600 space-y-1">
                <li>• All Basic tests</li>
                <li>• ECG, Vision, Audiometry (tie-ups)</li>
                <li>• Chest X-Ray (tie-ups)</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="text-xl font-bold">Advanced Occupational Health</h3>
              </div>
              <ul className="text-gray-600 space-y-1">
                <li>• All Standard tests</li>
                <li>• Heavy Metal Screening (on request)</li>
                <li>• Specialized Occupational Panels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compliance and Process */}
        <section className="section">
          <div className="grid-2">
            <div className="card">
              <div className="card-header">
                <h3 className="text-2xl font-bold">Compliance & Documentation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We assist in preparing reports and documentation aligned with factory inspectorate requirements and occupational health norms. 
                Company-wise consolidation, employee-wise summaries, and year-on-year tracking can be arranged.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="text-2xl font-bold">How It Works</h3>
              </div>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Share your workforce size and preferred dates</li>
                <li>We propose packages and logistics (on-site or lab)</li>
                <li>Sampling, screening, and reporting with QA checks</li>
                <li>Delivery of consolidated reports and certificates</li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="card text-center">
          <h3 className="text-2xl font-bold mb-3 gradient-text">Plan Your Industrial Health Drive</h3>
          <p className="text-gray-600 mb-5">Connect with us to customize packages and scheduling for your organization.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919409277144" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp px-8 py-3">
              💬 WhatsApp Us
            </a>
            <a href="/contact" className="btn btn-primary px-8 py-3">📞 Contact Team</a>
            <a href="/book-appointment" className="btn btn-gold px-8 py-3">📅 Book Slot</a>
          </div>
        </div>
      </div>
    </main>
  );
}
