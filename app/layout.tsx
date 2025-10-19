import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white shadow-lg">
          <nav className="flex items-center justify-between container mx-auto px-6 py-4">
            {/* Replace with your logo image if available */}
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="City Pathology Laboratory" className="h-10 w-10 rounded-full border border-gray-300 shadow-sm" />
              <span className="font-bold text-2xl text-blue-800 tracking-tight">City Pathology Laboratory</span>
            </div>
            <ul className="flex gap-8 font-medium text-gray-700 text-lg">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/tests" className="hover:text-blue-600">Laboratory Investigation</Link></li>
              <li><Link href="/industrial-health-checkup" className="hover:text-blue-600">Industrial Health Check Up</Link></li>
              <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-10">
          <div className="rounded-2xl shadow-xl bg-white p-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-6 text-center text-sm mt-12 shadow-lg">
          City Pathology Laboratory, Halol, Gujarat<br />
          Phone: +91-94092 77144
        </footer>
      </body>
    </html>
  );
}
