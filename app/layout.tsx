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
        {/* Calendly widget script */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Header Navigation */}
        <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-blue-600">
          <div className="gradient-bg-blue py-2">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-4">
                <a href="tel:+919409277144" className="hover:text-orange-300 transition flex items-center gap-1">
                  <span>📞</span> +91-94092 77144
                </a>
                <span className="hidden md:inline">|</span>
                <a href="mailto:citypathologylab@gmail.com" className="hidden md:flex items-center gap-1 hover:text-orange-300 transition">
                  <span>✉️</span> citypathologylab@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden md:inline">Open: Mon-Sat 8AM-8PM</span>
              </div>
            </div>
          </div>
          
          <nav className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between py-4">
              {/* Logo & Name */}
              <Link className="flex items-center gap-3 hover:opacity-80 transition" href="/">
                <img
                  src="/logo.jpg" 
                  alt="City Pathology Laboratory" 
                  className="h-12 w-12 rounded-full border-2 border-orange-500"
                />
                <div>
                  <h1 className="text-xl font-bold text-blue-600">City Pathology Laboratory</h1>
                  <p className="text-xs text-gray-600">Excellence in Diagnostics</p>
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
                <li>
                  <Link className="text-gray-700 hover:text-blue-600 transition" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-700 hover:text-blue-600 transition" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-700 hover:text-blue-600 transition" href="/tests">
                    Our Tests
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-700 hover:text-blue-600 transition" href="/industrial-health-checkup">
                    Industrial Health Checkup
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-700 hover:text-blue-600 transition" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://calendly.com/your-calendly-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm"
                  >
                    📅 Book Appointment
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/logo.jpg" 
                    alt="City Pathology Laboratory" 
                    className="h-12 w-12 rounded-full border-2 border-orange-400"
                  />
                  <h3 className="text-lg font-bold">City Pathology Laboratory</h3>
                </div>
                <p className="text-blue-50 text-sm">
                  Providing accurate and reliable diagnostic services with state-of-the-art technology and expert pathologists.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link className="text-blue-50 hover:text-orange-300 transition" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-blue-50 hover:text-orange-300 transition" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-blue-50 hover:text-orange-300 transition" href="/tests">
                      Our Tests
                    </Link>
                  </li>
                  <li>
                    <Link className="text-blue-50 hover:text-orange-300 transition" href="/industrial-health-checkup">
                      Industrial Health Checkup
                    </Link>
                  </li>
                  <li>
                    <Link className="text-blue-50 hover:text-orange-300 transition" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-orange-400">Contact Info</h4>
                <ul className="space-y-2 text-sm text-blue-50">
                  <li className="flex items-start gap-2">
                    📍
                    Near Railway Station, Halol, Gujarat 389350
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
                    href="https://calendly.com/your-calendly-link"
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
          </div>
        </footer>
      </body>
    </html>
  );
}
