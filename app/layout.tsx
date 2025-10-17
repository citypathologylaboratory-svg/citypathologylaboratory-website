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
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex items-center space-x-4">
            <Image 
              src="/logo.jpg" 
              alt="City Pathology Laboratory Logo" 
              width={100} 
              height={100} 
              priority 
            />
            <h1 className="text-2xl font-bold text-gray-800">City Pathology Laboratory</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
