import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/logo.png" 
                  alt="City Pathology Laboratory Logo" 
                  width={80} 
                  height={80} 
                  priority 
                />
                <h1 className="text-2xl font-bold text-gray-800">City Pathology Laboratory</h1>
              </div>
            </div>
            <nav className="border-t border-gray-200">
              <ul className="flex flex-wrap items-center justify-center gap-8 py-4">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tests/blood" className="text-gray-700 hover:text-primary-600 font-medium transition">
                    Blood Tests
                  </Link>
                </li>
                <li>
                  <Link href="/tests/urine" className="text-gray-700 hover:text-primary-600 font-medium transition">
                    Urine Tests
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/first-aid-training" className="text-gray-700 hover:text-primary-600 font-medium transition">
                    First Aid Training
                  </Link>
                </li>
                <li>
                  <Link href="/vaccination" className="text-gray-700 hover:text-primary-600 font-medium transition">
                    Vaccination
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
