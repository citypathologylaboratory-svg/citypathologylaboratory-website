import Link from 'next/link';
import { motion } from 'framer-motion';
import './globals.css';

export const metadata = {
  title: 'City Pathology Laboratory - Halol, Gujarat',
  description: 'Leading pathology laboratory in Halol offering comprehensive diagnostic services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-800 font-sans">
        {/* Header */}
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="sticky top-0 z-30 bg-white/90 backdrop-blur-md shadow-md"
        >
          <nav className="flex items-center justify-between container mx-auto px-6 py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.jpg"
                alt="City Pathology Laboratory"
                className="h-10 w-10 rounded-full border border-gray-300 shadow-sm"
              />
              <span className="font-bold text-2xl text-blue-800 tracking-tight">
                City Pathology Laboratory
              </span>
            </motion.div>
            <ul className="flex gap-6 font-medium text-gray-700 text-lg">
              {[
                { href: '/', label: 'Home' },
                { href: '/tests', label: 'Laboratory Investigation' },
                { href: '/industrial-health-checkup', label: 'Industrial Health Check Up' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.header>
        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 container mx-auto px-4 py-10"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl shadow-xl bg-white p-8 border border-gray-200"
          >
            {children}
          </motion.div>
        </motion.main>
        {/* Footer */}
        <motion.footer
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-900 text-white py-6 text-center text-sm mt-12 shadow-inner"
        >
          <p className="mb-1 font-semibold tracking-wide">
            City Pathology Laboratory, Halol, Gujarat
          </p>
          <p>Phone: +91-94092 77144</p>
        </motion.footer>
      </body>
    </html>
  );
}
