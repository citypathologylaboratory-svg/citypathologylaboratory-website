import Link from 'next/link';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'City Pathology Laboratory - Halol',
  description: 'Professional diagnostic services in Halol, Gujarat. Expert pathology lab offering comprehensive testing with accurate results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Calendly widget script */}
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        >
        </script>
      </head>
      <body>
        {/* Contact Info Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 text-sm">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <span>📧 citypathologylaboratory@gmail.com</span>
              <span>📞 +91 94092 77144</span>
            </div>
            <span>🕐 Mon-Sat: 8 AM - 8 PM | Sunday: Closed</span>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap justify-between items-center gap-4">
              {/* Logo Section */}
              <Link className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="/">
                <img 
                  src="/logo.jpg" 
                  alt="City Pathology Laboratory Logo" 
                  className="h-16 w-auto"
                />
                <div>
                  <div className="text-xl md:text-2xl font-bold text-blue-600">City Pathology Laboratory</div>
                  <div className="text-sm text-gray-600">Halol, Gujarat</div>
                </div>
              </Link>
              
              {/* Navigation Links */}
              <div className="flex flex-wrap gap-6 items-center">
                <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors" href="/about">
                  About
                </Link>
                <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors" href="/tests">
                  Tests
                </Link>
                <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors" href="/industrial-health-checkup">
                  Industrial Health Checkup
                </Link>
                <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors" href="/contact">
                  Contact
                </Link>
                <a
                  href="/industrial-health-checkup"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm md:text-base"
                >
                  Book Industrial Health Check Up Appointment
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">City Pathology Laboratory</h3>
                <p className="text-blue-100 mb-4">
                  Professional diagnostic services with state-of-the-art equipment and expert pathologists.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link className="text-blue-100 hover:text-white transition-colors" href="/about">About Us</Link></li>
                  <li><Link className="text-blue-100 hover:text-white transition-colors" href="/tests">Our Tests</Link></li>
                  <li><Link className="text-blue-100 hover:text-white transition-colors" href="/industrial-health-checkup">Industrial Health Checkup</Link></li>
                  <li><Link className="text-blue-100 hover:text-white transition-colors" href="/contact">Contact Us</Link></li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>📍 2nd Floor, Dwarkesh Chambers, Near Bus Stand, Halol</li>
                  <li>📧 citypathologylaboratory@gmail.com</li>
                  <li>📞 +91 94092 77144</li>
                  <li>🕐 Mon-Sat: 8 AM - 8 PM | Sunday: Closed</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-blue-400 mt-8 pt-6 text-center text-blue-100">
              <p>© 2025 City Pathology Laboratory. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
