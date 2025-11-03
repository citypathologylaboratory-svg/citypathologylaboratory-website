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
        {/* ========== START ANIMATED RIBBON SECTION ==========
         * The following code adds a fixed animated ribbon at the top of the page.
         * To remove/reverse this feature, simply delete or comment out this entire section.
         * Section ends at: END ANIMATED RIBBON SECTION
         */}
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 text-center font-bold z-[100] overflow-hidden">
          <div className="animate-slide-right whitespace-nowrap">
            FNAC Test Available 🔬 Book Now!
          </div>
        </div>
        
        {/* Spacer for the fixed ribbon */}
        <div className="h-12"></div>
        {/* ========== END ANIMATED RIBBON SECTION ========== */}
        
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
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold gradient-text">
                  City Pathology Laboratory
                </div>
              </Link>

              {/* Navigation Links */}
              <div className="flex gap-6 items-center">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  href="/tests"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Tests
                </Link>
                <Link
                  href="/industrial-health-checkup"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Industrial Health Checkup
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Contact
                </Link>

                {/* Book Appointment Button */}
                <button
                  onClick={() =>
                    (window as any).Calendly.initPopupWidget({
                      url: 'https://calendly.com/citypathologylaboratory',
                    })
                  }
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-blue-100">
                  City Pathology Laboratory in Halol offers comprehensive diagnostic services with state-of-the-art equipment and expert pathologists.
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
