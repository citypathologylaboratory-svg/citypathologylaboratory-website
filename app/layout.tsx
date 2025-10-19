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
        <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-blue-800">
          <div className="gradient-bg-blue py-2">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-4">
                <a href="tel:+919409277144" className="hover:text-yellow-300 transition flex items-center gap-1">
                  <span>📞</span> +91-94092 77144
                </a>
                <span className="hidden md:inline">|</span>
                <a href="mailto:citypathologylab@gmail.com" className="hidden md:flex items-center gap-1 hover:text-yellow-300 transition">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
                  <img
                    src="/logo.jpg"
                    alt="City Pathology Laboratory"
                    className="relative h-12 w-12 rounded-full border-2 border-white shadow-md"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    City Pathology Laboratory
                  </h1>
                  <p className="text-xs text-gray-600">Trusted Healthcare Partner</p>
                </div>
              </Link>
              
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/tests" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                  Tests
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/industrial-health-checkup" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                  Industrial Health Checkup
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </Link>
                <Link 
                  href="/book-appointment" 
                  className="btn btn-primary px-6 py-2 text-sm"
                >
                  Book Appointment
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-gray-700 hover:text-blue-600">
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
        <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white mt-16">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/logo.jpg"
                    alt="City Pathology Laboratory"
                    className="h-12 w-12 rounded-full border-2 border-yellow-400 shadow-lg"
                  />
                  <div>
                    <h3 className="font-bold text-xl text-yellow-400">City Pathology Laboratory</h3>
                    <p className="text-sm text-gray-300">Your Trusted Healthcare Partner</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Providing accurate and reliable diagnostic services in Halol since establishment. 
                  We are committed to excellence in pathology testing and patient care with 
                  state-of-the-art equipment and experienced professionals.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="https://wa.me/919409277144" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp px-4 py-2 text-sm"
                  >
                    <span>💬</span> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                      → Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                      → About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/tests" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                      → Our Tests
                    </Link>
                  </li>
                  <li>
                    <Link href="/industrial-health-checkup" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                      → Industrial Health Checkup
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white hover:pl-2 transition-all">
                      → Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-lg mb-4 text-yellow-400">Contact Us</h4>
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
