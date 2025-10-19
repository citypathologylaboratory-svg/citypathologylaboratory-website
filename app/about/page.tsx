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
            Your trusted healthcare partner in Halol, Gujarat, providing accurate 
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
                has grown to become a trusted name in diagnostic services. We combine cutting-edge 
                technology with human expertise to deliver results that healthcare providers and 
                patients can rely on with complete confidence.
              </p>
              <p>
                Located conveniently opposite the Old Bus Stand in Halol, we serve not just the 
                local community but also support various industrial establishments in the region 
                with comprehensive health checkup programs and occupational health services.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Expert Team */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Meet Our Expert Pathologists</h2>
            <p className="section-subtitle">
              Our team of experienced and certified pathologists brings together decades 
              of expertise in clinical pathology and occupational health.
            </p>
          </div>
          
          <div className="grid-2">
            {/* Dr. Sunil Nagori */}
            <div className="card slide-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  SN
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Dr. Sunil Nagori</h3>
                  <p className="text-blue-600 font-medium">MBBS, DCP, CIH</p>
                  <p className="text-sm text-gray-600">Chief Pathologist & Director</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm mt-1">▶</span>
                  25+ years of expertise in clinical pathology & occupational health
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm mt-1">▶</span>
                  Developed diagnostic protocols for Halol's community & industries
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm mt-1">▶</span>
                  Leads operations with focus on ethics & transparency
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 text-sm mt-1">▶</span>
                  Certified in Industrial Health (CIH) for occupational medicine
                </li>
              </ul>
            </div>

            {/* Dr. Shalin Nagori */}
            <div className="card slide-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  SN
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Dr. Shalin Nagori</h3>
                  <p className="text-blue-600 font-medium">MBBS, MD Pathology, PGCIH</p>
                  <p className="text-sm text-gray-600">Senior Pathologist & Consultant</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 text-sm mt-1">▶</span>
                  Specialist in diagnostic automation & patient communication
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 text-sm mt-1">▶</span>
                  Promotes accessible healthcare & trains staff in best practices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 text-sm mt-1">▶</span>
                  Published author in THIP Magazine & educator in industrial health
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 text-sm mt-1">▶</span>
                  Post Graduate Certificate in Industrial Health (PGCIH)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Services & Specialties */}
        <section className="section bg-white">
          <div className="section-header">
            <h2 className="section-title">Our Comprehensive Services</h2>
            <p className="section-subtitle">
              We offer a complete range of diagnostic services with state-of-the-art 
              equipment and expert medical professionals.
            </p>
          </div>
          
          <div className="grid-3">
            <div className="card fade-in">
              <div className="icon-wrapper">
                🧪
              </div>
              <h3 className="text-lg font-bold mb-2">Clinical Pathology</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                • Complete Blood Count (CBC)<br />
                • Blood Chemistry Panels<br />
                • Liver & Kidney Function Tests<br />
                • Diabetes Monitoring<br />
                • Lipid Profiles
              </ul>
            </div>
            
            <div className="card fade-in">
              <div className="icon-wrapper icon-gold">
                🔬
              </div>
              <h3 className="text-lg font-bold mb-2">Specialized Testing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                • Hormone Testing<br />
                • Cardiac Markers<br />
                • Tumor Markers<br />
                • Infectious Disease Screening<br />
                • Allergy Testing
              </ul>
            </div>
            
            <div className="card fade-in">
              <div className="icon-wrapper">
                🏭
              </div>
              <h3 className="text-lg font-bold mb-2">Industrial Health</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                • Pre-employment Medical Exams<br />
                • Annual Health Checkups<br />
                • Occupational Health Screening<br />
                • Fitness for Duty Assessments<br />
                • Corporate Health Packages
              </ul>
            </div>
            
            <div className="card fade-in">
              <div className="icon-wrapper icon-gold">
                📊
              </div>
              <h3 className="text-lg font-bold mb-2">Health Packages</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                • Comprehensive Health Checkups<br />
                • Age-specific Screening Packages<br />
                • Preventive Health Programs<br />
                • Family Health Packages<br />
                • Executive Health Checkups
              </ul>
            </div>
            
            <div className="card fade-in">
              <div className="icon-wrapper">
                📱
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Services</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                • WhatsApp Report Delivery<br />
                • Online Appointment Booking<br />
                • Digital Report Storage<br />
                • Test Result Notifications<br />
                • Consultation Support
              </ul>
            </div>
            
            <div className="card fade-in">
              <div className="icon-wrapper icon-gold">
                ⏰
              </div>
              <h3 className="text-lg font-bold mb-2">Quick Turnaround</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                • Same-day Results Available<br />
                • Emergency Testing Services<br />
                • Fast Report Processing<br />
                • Priority Testing Options<br />
                • Extended Operating Hours
              </ul>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="section">
          <div className="grid-2">
            <div className="card slide-in">
              <div className="card-header">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide accurate, reliable, and accessible diagnostic services that empower 
                healthcare providers and patients to make informed decisions about their health. 
                We are committed to maintaining the highest standards of quality, ethics, and 
                patient care in everything we do.
              </p>
            </div>
            
            <div className="card slide-in">
              <div className="card-header">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span className="text-3xl">💎</span>
                  Our Values
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <strong>Accuracy:</strong> Precise results you can trust
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <strong>Ethics:</strong> Transparent and honest practices
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <strong>Compassion:</strong> Patient-centered care always
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <strong>Innovation:</strong> Embracing latest technology
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact & Action Section */}
        <section className="section bg-gradient-to-br from-blue-100 to-white">
          <div className="card text-center">
            <h2 className="text-2xl font-bold mb-4 gradient-text">Ready to Experience Quality Healthcare?</h2>
            <p className="text-gray-600 mb-6">
              Contact City Pathology Laboratory today for reliable diagnostic services 
              and personalized patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919409277144"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp px-8 py-3"
              >
                💬 Chat on WhatsApp
              </a>
              <a 
                href="/contact"
                className="btn btn-primary px-8 py-3"
              >
                📞 Contact Us
              </a>
              <a 
                href="https://calendly.com/citypathologylaboratory/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold px-8 py-3"
              >
                📅 Book Appointment
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
