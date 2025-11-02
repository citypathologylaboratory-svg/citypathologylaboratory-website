import Link from 'next/link';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'City Pathology Laboratory - Halol',
  description:
    'Professional diagnostic services in Halol, Gujarat. Expert pathology lab offering comprehensive testing with accurate results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Calendly widget script */}
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </head>
      <body>
        {/* Animated Ribbon at the very top */}
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 text-center font-bold z-[100] blink-animation">
          FNAC Test Available 🔬 Book Now!
        </div>
        
        {/* Spacer for the fixed ribbon */}
        <div className="h-12"></div>
        
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
                  <div className="text-xs text-gray-500 mt-1">
                    <div>Dr Sunil Nagori (MBBS, D.C.P., C.I.H) – Consultant Pathologist and Industrial Physician</div>
                    <div>Dr Shalin Nagori (MBBS, M.D.(Path), PGCIH) – Consultant Pathologist and Industrial Physician</div>
                  </div>
                </div>
              </Link>

              {/* Navigation Links */}
              <ul className="flex gap-6 text-gray-700 font-medium">
                <li>
                  <Link className="hover:text-blue-600 transition-colors" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-600 transition-colors" href="/tests">
                    Our Tests
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-600 transition-colors" href="/industrial-health-checkup">
                    Industrial Health Checkup
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-600 transition-colors" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-10 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-blue-100 leading-relaxed">
                  City Pathology Laboratory provides professional diagnostic services in Halol, Gujarat. We are committed to
                  delivering accurate and timely test results with state-of-the-art equipment and experienced staff.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-blue-100 hover:text-white transition-colors" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-blue-100 hover:text-white transition-colors" href="/tests">
                      Our Tests
                    </Link>
                  </li>
                  <li>
                    <Link className="text-blue-100 hover:text-white transition-colors" href="/industrial-health-checkup">
                      Industrial Health Checkup
                    </Link>
                  </li>
                  <li>
                    <Link className="text-blue-100 hover:text-white transition-colors" href="/contact">
                      Contact Us
                    </Link>
                  </li>
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
              © 2025 City Pathology Laboratory. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
