// app/layout.tsx

import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-white py-5">
          <nav className="container mx-auto flex justify-center space-x-10 font-semibold text-gray-800">
            <Link href="/">Home</Link>
            <Link href="/tests">Laboratory Investigation</Link>
            <Link href="/industrial-health-checkup">Industrial Health Check Up</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-white py-6 text-center text-sm">
          City Pathology Laboratory, Halol, Gujarat<br />
          Phone: +91-94092 77144
        </footer>
      </body>
    </html>
  );
}
