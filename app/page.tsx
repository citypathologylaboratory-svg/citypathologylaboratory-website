export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="mb-8">
              <img
                src="/logo.jpg"
                alt="City Pathology Laboratory"
                className="h-24 w-24 mx-auto rounded-full border-4 border-yellow-400 shadow-2xl mb-4 pulse"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Welcome to City Pathology Laboratory
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
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
                className="btn btn-gold px-8 py-4 text-lg"
              >
                📅 Book Appointment
              </a>
            </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="section-header">
          <h2 className="section-title">Why Choose City Pathology Laboratory?</h2>
          <p className="section-subtitle">
            With years of expertise and state-of-the-art equipment, we provide reliable 
            diagnostic services that healthcare professionals and patients trust.
          </p>
        </div>
        
        <div className="grid-3">
          <div className="card fade-in">
            <div className="icon-wrapper">
              🔬
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
            <p>
              State-of-the-art laboratory equipment ensuring precise and accurate test results 
              with the latest diagnostic technologies.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="icon-wrapper icon-gold">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-3">Quick Results</h3>
            <p>
              Fast turnaround time for most tests with same-day and next-day reporting 
              available for urgent cases.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="icon-wrapper">
              👨‍⚕️
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Pathologists</h3>
            <p>
              Experienced and certified pathologists providing accurate interpretations 
              and detailed reports.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="icon-wrapper icon-gold">
              💰
            </div>
            <h3 className="text-xl font-bold mb-3">Affordable Pricing</h3>
            <p>
              Competitive pricing without compromising on quality. We believe healthcare 
              should be accessible to all.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="icon-wrapper">
              📱
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Reports</h3>
            <p>
              Get your reports digitally via WhatsApp or email. Easy to share with 
              your doctors and keep for records.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="icon-wrapper icon-gold">
              🏥
            </div>
            <h3 className="text-xl font-bold mb-3">Convenient Location</h3>
            <p>
              Strategically located in Halol near Old Bus Stand, easily accessible 
              with ample parking space.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-white">
        <div className="section-header">
          <h2 className="section-title">Our Comprehensive Services</h2>
          <p className="section-subtitle">
            Complete range of pathology services under one roof with modern facilities 
            and expert medical professionals.
          </p>
        </div>
        
        <div className="grid-2">
          <div className="card slide-in">
            <div className="card-header">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">🩺</span>
                Routine Blood Tests
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Complete Blood Count (CBC)</li>
              <li>• Blood Sugar (Fasting & PP)</li>
              <li>• Lipid Profile</li>
              <li>• Liver Function Tests</li>
              <li>• Kidney Function Tests</li>
              <li>• Thyroid Profile</li>
            </ul>
          </div>
          
          <div className="card slide-in">
            <div className="card-header">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">🧪</span>
                Specialized Testing
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Cardiac Markers</li>
              <li>• Tumor Markers</li>
              <li>• Hormone Testing</li>
              <li>• Infectious Disease Screening</li>
              <li>• Allergy Testing</li>
              <li>• Vitamin & Mineral Analysis</li>
            </ul>
          </div>
          
          <div className="card slide-in">
            <div className="card-header">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">🏭</span>
                Industrial Health Checkups
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive health screening packages for industrial workers and corporate employees.
            </p>
            <a 
              href="/industrial-health-checkup"
              className="btn btn-primary"
            >
              Learn More
            </a>
          </div>
          
          <div className="card slide-in">
            <div className="card-header">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">📋</span>
                Health Packages
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive health checkup packages tailored for different age groups and health needs.
            </p>
            <a 
              href="/tests"
              className="btn btn-gold"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Meet Our Pathologists Section */}
      <section className="section bg-white">
        <div className="section-header">
          <h2 className="section-title">Meet Our Expert Pathologists</h2>
          <p className="section-subtitle">
            Our team of experienced and certified pathologists ensures accurate 
            diagnosis and quality healthcare services.
          </p>
        </div>
        
        <div className="grid-2">
          <div className="card fade-in">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                Dr
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800">Dr. [Name]</h3>
                <p className="text-gray-600">Chief Pathologist</p>
              </div>
            </div>
            <p className="text-gray-600">
              Years of experience in clinical pathology with specialization in 
              diagnostic testing and laboratory management.
            </p>
          </div>
          
          <div className="card fade-in">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                Dr
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800">Dr. [Name]</h3>
                <p className="text-gray-600">Senior Pathologist</p>
              </div>
            </div>
            <p className="text-gray-600">
              Expert in molecular diagnostics and specialized testing with 
              commitment to accurate and timely results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="section bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="section-header">
          <h2 className="section-title">Visit Us Today</h2>
          <p className="section-subtitle">
            Conveniently located in Halol with easy access and ample parking.
          </p>
        </div>
        
        <div className="grid-2">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📍</span>
              Our Location
            </h3>
            <p className="text-gray-600 mb-4">
              Opp. Old Bus Stand, Near Jaydeep Petrol Pump<br />
              Halol, Gujarat 389350
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+919409277144" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
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
                📅 Book Appointment
              </a>
              <a 
                href="/contact"
                className="btn btn-gold w-full"
              >
                📧 Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
