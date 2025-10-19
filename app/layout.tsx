import './globals.css';
import Image from "next/image";

export const metadata = {
  title: "City Pathology Laboratory Halol – Accurate, Ethical Diagnostics",
  description: "Halol’s trusted pathology lab for blood tests, urine tests, industrial health checks, and FNAC. Led by Dr. Sunil Nagori and Dr. Shalin Nagori.",
  keywords: "Pathology Lab Halol, Blood Test, Urine Test, Industrial Health Check, FNAC, City Pathology Laboratory, Dr. Sunil Nagori, Dr. Shalin Nagori"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-md pb-2">
          <h1 className="text-4xl text-center py-3 font-extrabold text-blue-900 tracking-tight animate-pulse">
            City Pathology Laboratory
          </h1>
          <div className="flex justify-center items-center mb-2">
            <Image
              src="/plane_fnac_ribbon.png"
              alt="FNAC Test Available"
              width={420}
              height={90}
              priority
            />
          </div>
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap justify-center gap-7 sm:gap-10 py-2 text-lg font-semibold text-gray-800">
              <li><a href="/" className="hover:text-blue-700">Home</a></li>
              <li><a href="/tests" className="hover:text-blue-700" title="Lab Investigation (Blood & Urine)">Laboratory Investigation</a></li>
              <li><a href="/industrial-health-checkup" className="hover:text-blue-700">Industrial Health Check Up</a></li>
              <li><a href="/about" className="hover:text-blue-700">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-700">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
