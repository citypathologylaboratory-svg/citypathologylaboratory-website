import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'City Pathology Laboratory - Halol, Gujarat',
  description: 'Leading pathology laboratory in Halol offering comprehensive diagnostic services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Header Navigation */}
        <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-teal-800">
          <div className="gradient-bg-teal py-2">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-4">
                <a href="tel:+919409277144" className="hover:text-emerald-300 transition flex items-center gap-1">
                  <span>📞</span> +91-94092 77144
                </a>
                <span className="hidden md:inline">|</span>
                <a href="mailto:citypathologylab@gmail.com" className="hidden md:flex items-center gap-1 hover:text-emerald-300 transition">
                  <span>✉️</span> citypathologylab@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden md:inline">Open: Mon-Sat 8AM-8PM</span>
              </div>
            </div>
          </div>
          
          <nav className="container mx-auto px-4 md:px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
                  <div className="relative bg-gradient-to-br from-teal-600 to-emerald-600 p-3 rounded-full">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-teal-800 group-hover:text-teal-600 transition">
                    City Pathology Laboratory
                  </h1>
                  <p className="text-xs text-gray-600">Excellence in Diagnostic Services</p>
                </div>
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center gap-8">
                <li><Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition">Home</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium transition">About</Link></li>
                <li><Link href="/tests" className="text-gray-700 hover:text-teal-600 font-medium transition">Tests</Link></li>
                <li><Link href="/industrial-health-checkup" className="text-gray-700 hover:text-teal-600 font-medium transition">Industrial Health Checkup</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium transition">Contact</Link></li>
                <li>
                  <Link 
                    href="/book-appointment" 
                    className="btn-primary px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Appointment for Industrial Health Check Up
                  </Link>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-teal-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white mt-auto">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-emerald-400">About Us</h4>
                <p className="text-gray-300 leading-relaxed">
                  City Pathology Laboratory is a trusted name in diagnostic services in Halol, Gujarat. We provide accurate, reliable, and timely pathology test results with state-of-the-art equipment.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-emerald-400">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
                  <li><Link href="/tests" className="text-gray-300 hover:text-white transition">Our Tests</Link></li>
                  <li><Link href="/industrial-health-checkup" className="text-gray-300 hover:text-white transition">Industrial Health Checkup</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
                  <li><Link href="/book-appointment" className="text-gray-300 hover:text-white transition">Book Appointment for Industrial Health Check Up</Link></li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-emerald-400">Contact Us</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">📍</span>
                    <span>Opp. Old Bus Stand, Near Jaydeep Petrol Pump, Halol, Gujarat 389350</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xl">📞</span>
                    <a href="tel:+919409277144" className="hover:text-white transition">
                      +91-94092 77144
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xl">✉️</span>
                    <a href="mailto:citypathologylab@gmail.com" className="hover:text-white transition break-all">
                      citypathologylab@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xl">🕒</span>
                    <span>Mon-Sat: 8:00 AM - 8:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} City Pathology Laboratory. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Committed to Excellence in Diagnostic Services
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
