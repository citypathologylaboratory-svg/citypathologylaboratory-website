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
      <body>
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            {/* Logo Section */}
            <div className="logo-section">
              <div className="logo-icon">
                🧪
              </div>
              <div className="logo-text">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                  City Pathology Laboratory
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Professional Diagnostic Services
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
              <Link href="/" className="nav-link">
                🏠 Home
              </Link>
              <Link href="/tests" className="nav-link">
                🔬 Tests
              </Link>
              <Link href="/industrial-health-checkup" className="nav-link">
                🏭 Industrial
              </Link>
              <Link href="/about" className="nav-link">
                ℹ️ About
              </Link>
              <Link href="/contact" className="nav-link">
                📞 Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="nav-cta">
              <a 
                href="https://calendly.com/citypathologylaboratory/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                📅 Book Now
              </a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            {/* Company Info */}
            <div>
              <div className="footer-logo">
                <span className="text-3xl">🧪</span>
                <div>
                  <div className="text-xl font-bold text-orange-400">
                    City Pathology Laboratory
                  </div>
                  <p className="text-blue-100 text-sm mt-1">
                    Your Trusted Partner in Health Diagnostics
                  </p>
                </div>
              </div>
              <p className="text-blue-50 text-sm mt-4 max-w-md">
                Providing accurate and reliable pathology services with state-of-the-art technology and expert care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-blue-50 hover:text-orange-300 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tests" className="text-blue-50 hover:text-orange-300 transition">
                    Available Tests
                  </Link>
                </li>
                <li>
                  <Link href="/industrial-health-checkup" className="text-blue-50 hover:text-orange-300 transition">
                    Industrial Health Checkup
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-50 hover:text-orange-300 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-50 hover:text-orange-300 transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-400">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  📍
                  <span className="text-blue-50 text-sm">
                    2nd Floor Dwarkesh Chambers Near Bus Stand Halol
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  📞
                  <a className="hover:text-orange-300 transition" href="tel:+919409277144">
                    +91-94092 77144
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  ✉️
                  <a className="hover:text-orange-300 transition break-all" href="mailto:citypathologylab@gmail.com">
                    citypathologylab@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Book Appointment */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-orange-400">Book Appointment</h4>
              <p className="text-blue-50 text-sm mb-4">
                Schedule your appointment online or contact us directly.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://calendly.com/citypathologylaboratory/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full text-sm"
                >
                  📅 Book Now
                </a>
                <a 
                  href="https://wa.me/919409277144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full text-sm"
                >
                  📱 WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-400 mt-8 pt-6 text-center text-sm text-blue-50">
            © {new Date().getFullYear()} City Pathology Laboratory. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
