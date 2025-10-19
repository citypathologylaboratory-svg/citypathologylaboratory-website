import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-white shadow">
          <nav className="container mx-auto flex justify-center py-4 gap-8 font-semibold text-lg">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/tests" className="hover:text-blue-600">Laboratory Investigation</Link>
            <Link href="/industrial-health-checkup" className="hover:text-blue-600">Industrial Health Check Up</Link>
            <Link href="/about" className="hover:text-blue-600">About Us</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </nav>
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-blue-900 text-white py-6 text-center text-sm mt-12 shadow-inner">
          City Pathology Laboratory, Halol, Gujarat<br />
          Phone: +91-94092 77144
        </footer>
      </body>
    </html>
  );
}
