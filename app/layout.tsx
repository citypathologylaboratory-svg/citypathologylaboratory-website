'use client';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Lato:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-lato bg-white text-gray-900">
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white py-2.5 text-center font-bold z-[100] overflow-hidden shadow-md">
          <div className="animate-slide-right whitespace-nowrap text-sm sm:text-base">
            FNAC Test Available 🔬 Book Now!
          </div>
        </div>

        <div className="h-12" />

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 text-sm shadow-md">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1">
                <span>📧</span>
                <a href="mailto:citypathologylaboratory@gmail.com" className="hover:text-blue-100 transition-colors">
                  citypathologylaboratory@gmail.com
                </a>
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <span>📞</span>
                <a href="tel:+919409277144" className="hover:text-blue-100 transition-colors">
                  +91 94092 77144
                </a>
              </span>
            </div>
            <span className="flex items-center gap-1">
              <span>🕐</span>
              <span>Mon-Sat: 8 AM - 8 PM | Sunday: Closed</span>
            </span>
          </div>
        </div>

        <nav className="bg-white border-b border-gray-200 sticky top-12 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <div className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  City Pathology
                </div>
              </Link>

              <div className="hidden md:flex gap-1 items-center">
                <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                  Home
                </Link>
                <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                  About
                </Link>
                <Link href="/tests" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                  Tests
                </Link>
                <Link href="/industrial-health-checkup" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                  Industrial Health
                </Link>
                <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
                  Contact
                </Link>
              </div>

              <a
                href="https://calendly.com/citypathologylaboratory"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 sm:px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 text-sm sm:text-base cursor-pointer inline-block"
              >
                Book Now
              </a>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-300">About Us</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  City Pathology Laboratory in Halol offers comprehensive diagnostic services with state-of-the-art equipment and expert pathologists.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-300">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-gray-300 hover:text-white transition-colors text-sm" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-300 hover:text-white transition-colors text-sm" href="/tests">
                      Our Tests
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-300 hover:text-white transition-colors text-sm" href="/industrial-health-checkup">
                      Industrial Health Checkup
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-300 hover:text-white transition-colors text-sm" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-300">Contact Us</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span>📍</span>
                    <span>2nd Floor, Dwarkesh Chambers, Near Bus Stand, Halol</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📧</span>
                    <a href="mailto:citypathologylaboratory@gmail.com" className="hover:text-white transition-colors">
                      citypathologylaboratory@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    <a href="tel:+919409277144" className="hover:text-white transition-colors">
                      +91 94092 77144
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🕐</span>
                    <span>Mon-Sat: 8 AM - 8 PM | Sunday: Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
              © 2025 City Pathology Laboratory. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
