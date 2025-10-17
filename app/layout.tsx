import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: 'City Pathology Laboratory - Quality Diagnostic Services',
  description: 'Professional pathology and diagnostic services with expert pathologists. Book appointments online through Calendly. Available on WhatsApp.',
  keywords: 'pathology, laboratory, diagnostic services, medical tests, blood tests, pathologist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav className="bg-primary-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <a href="/" className="flex items-center space-x-3">
                  <Image 
                    src="/logo.jpg" 
                    alt="City Pathology Laboratory Logo" 
                    width={50} 
                    height={50}
                    className="rounded"
                  />
                  <span className="text-2xl font-bold">City Pathology Laboratory</span>
                </a>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="hover:text-primary-200 transition">Home</a>
                <a href="/about" className="hover:text-primary-200 transition">About Us</a>
                <a href="/tests" className="hover:text-primary-200 transition">Tests</a>
                <a href="/book-appointment" className="hover:text-primary-200 transition">Book Appointment</a>
                <a href="/contact" className="hover:text-primary-200 transition">Contact</a>
              </div>
              <div className="flex space-x-3">
                <a 
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">City Pathology Laboratory</h3>
                <p className="text-gray-400">Your trusted partner in diagnostic excellence.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="/tests" className="text-gray-400 hover:text-white transition">Tests</a></li>
                  <li><a href="/book-appointment" className="text-gray-400 hover:text-white transition">Book Appointment</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Contact</h4>
                <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-400">Email: info@citypathlab.com</p>
                <div className="mt-4">
                  <a 
                    href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              © 2025 City Pathology Laboratory. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
