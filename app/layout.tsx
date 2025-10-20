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
              <div className="logo-icon">🧪</div>
              <div className="logo-text">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                  City Pathology Laboratory
                </div>
                <div className="text-sm text-gray-600">Halol, Gujarat</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/tests" className="nav-link">
                Tests
              </Link>
              <Link href="/industrial-health-checkup" className="nav-link">
                Industrial Health
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <a
              href="https://calendly.com/citypathologylaboratory/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              📅 Book Appointment
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">
              {/* About Section */}
              <div className="footer-section">
                <div className="footer-logo">
                  <span className="text-3xl">🧪</span>
                  <h3 className="footer-title">City Pathology Laboratory</h3>
                </div>
                <p className="footer-text">
                  Trusted diagnostic services in Halol, Gujarat. NABL accredited
                  laboratory with state-of-the-art facilities.
                </p>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-list">
                  <li>
                    <Link href="/about" className="footer-link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/tests" className="footer-link">
                      Our Tests
                    </Link>
                  </li>
                  <li>
                    <Link href="/industrial-health-checkup" className="footer-link">
                      Industrial Health Checkup
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="footer-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-section">
                <h4 className="footer-heading">Contact Information</h4>
                <ul className="footer-list">
                  <li className="footer-contact-item">
                    <span>📍</span>
                    <span>2nd Floor Dwarkesh Chambers Near Bus Stand Halol</span>
                  </li>
                  <li className="footer-contact-item">
                    <span>📞</span>
                    <a href="tel:+919409277144" className="footer-link">
                      +91 9409277144
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <span>📧</span>
                    <a
                      href="mailto:citypathologylaboratory@gmail.com"
                      className="footer-link"
                    >
                      citypathologylaboratory@gmail.com
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <span>💬</span>
                    <a
                      href="https://wa.me/919409277144"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      WhatsApp Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="footer-section">
                <h4 className="footer-heading">Working Hours</h4>
                <ul className="footer-list">
                  <li className="footer-text">Monday - Saturday</li>
                  <li className="footer-text">8:00 AM - 8:00 PM</li>
                  <li className="footer-text mt-2">Sunday</li>
                  <li className="footer-text">9:00 AM - 1:00 PM</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
              <p className="footer-copyright">
                © {new Date().getFullYear()} City Pathology Laboratory. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
