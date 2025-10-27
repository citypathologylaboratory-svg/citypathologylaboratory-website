export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">City Pathology Laboratory</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="/tests" className="text-gray-500 hover:text-gray-900">Tests</a>
              <a href="/about" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="/contact" className="text-gray-500 hover:text-gray-900">Contact</a>
              <a href="/industrial-health-checkup" className="text-gray-500 hover:text-gray-900">Industrial Health Checkup</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive pathology services with state-of-the-art technology and experienced professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Book Test
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pathology services to meet all your diagnostic needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Laboratory Testing</h3>
              <p className="text-gray-600">
                Complete range of pathology tests including blood work, urine analysis, and specialized diagnostic tests.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Checkups</h3>
              <p className="text-gray-600">
                Comprehensive health packages and industrial health checkups for preventive healthcare.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Reports</h3>
              <p className="text-gray-600">
                Fast and accurate test reports with digital delivery and secure online access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Know Your Pathologist Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Know Your Pathologist
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our experienced pathologists dedicated to providing accurate diagnoses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Sunil Nagori</h3>
              <p className="text-blue-600 font-medium mb-4">MBBS, DCP, CIH Consultant Pathologist and Industrial Physician</p>
              <p className="text-gray-600">
                With extensive experience in pathology and industrial health, Dr. Sunil Nagori brings expertise in diagnostic pathology and occupational medicine.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Shalin Nagori</h3>
              <p className="text-green-600 font-medium mb-4">MBBS, MD (Path), PGCIH Consultant Pathologist and Industrial Physician</p>
              <p className="text-gray-600">
                Specializing in advanced pathology with MD in Pathology and Post Graduate Certificate in Industrial Health, Dr. Shalin Nagori provides comprehensive diagnostic services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to schedule your tests or learn more about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Book Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">City Pathology Laboratory</h3>
              <p className="text-gray-400">
                Your trusted partner in healthcare diagnostics with state-of-the-art facilities and experienced professionals.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/tests" className="hover:text-white">Laboratory Tests</a></li>
                <li><a href="/industrial-health-checkup" className="hover:text-white">Health Checkups</a></li>
                <li><a href="#" className="hover:text-white">Quick Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: +1 (555) 123-4567</li>
                <li>Email: info@citypathlab.com</li>
                <li>Address: 123 Health Street, Medical District</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 City Pathology Laboratory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
