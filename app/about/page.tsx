// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Replace these constants with real data fetched from your CMS / API via getStaticProps or getServerSideProps.
 */
const ORG = {
  name: 'City Pathology Laboratory',
  url: 'https://www.citypathology.example', // replace with real domain and canonical
  logo: '/images/logo.png',
  telephone: '+919409277144',
  address: {
    street: 'Main Road, Halol',
    locality: 'Halol',
    region: 'Gujarat',
    postalCode: '389350',
    country: 'IN'
  },
  geo: { lat: 22.6, lon: 73.35 },
  openingHours: ['Mo-Fr 08:00-20:00', 'Sa 09:00-14:00'],
  accreditation: 'NABL'
};

const PACKAGES = [
  { id: 'pkg-thyroid', title: 'Thyroid Profile', price: '₹799', includes: 'TSH, T3, T4' },
  { id: 'pkg-fullbody', title: 'Full Body Checkup', price: '₹2,499', includes: 'CBC, Lipid, LFT, RFT, Thyroid' },
];

export default function Home() {
  const [pincode, setPincode] = useState('');
  const [pinResult, setPinResult] = useState(null);

  // Client-side pincode check (replace with API call)
  async function checkPincode(e) {
    e.preventDefault();
    // Example: call /api/pincode?pin=XXXXX
    // For demo we simulate: allow 389350
    const allowed = pincode.trim() === '389350';
    setPinResult({ ok: allowed, message: allowed ? 'Home collection available in your area' : 'Home collection not available. Visit lab or try another pincode.' });
    // TODO: fire analytics event here
  }

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': ORG.name,
    'url': ORG.url,
    'logo': ORG.url + ORG.logo,
    'telephone': ORG.telephone,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': ORG.address.street,
      'addressLocality': ORG.address.locality,
      'addressRegion': ORG.address.region,
      'postalCode': ORG.address.postalCode,
      'addressCountry': ORG.address.country
    },
    'geo': { '@type': 'GeoCoordinates', 'latitude': ORG.geo.lat, 'longitude': ORG.geo.lon },
    'openingHours': ORG.openingHours,
    'award': ORG.accreditation,
    'sameAs': [] // add social profiles if available
  };

  return (
    <>
      <Head>
        <title>City Pathology Laboratory – Halol</title>
        <meta name="description" content="Full-time pathologists, advanced diagnostics, and patient-first care in Halol, Gujarat." />
        <meta name="keywords" content="Pathology Halol, Diagnostic Lab, Full-time Pathologist, City Pathology Laboratory" />
        <link rel="canonical" href={ORG.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="City Pathology Laboratory – Halol" />
        <meta property="og:description" content="Full-time pathologists, advanced diagnostics, and patient-first care in Halol, Gujarat." />
        <meta property="og:url" content={ORG.url} />
        <meta property="og:image" content={ORG.url + ORG.logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="City Pathology Laboratory – Halol" />
        <meta name="twitter:description" content="Full-time pathologists, advanced diagnostics, and patient-first care in Halol, Gujarat." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" hrefLang="en" href={ORG.url + '/en'} />
        <link rel="alternate" hrefLang="gu" href={ORG.url + '/gu'} />
        <link rel="alternate" hrefLang="hi" href={ORG.url + '/hi'} />
        {/* JSON-LD structured data for LocalBusiness / MedicalBusiness */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </Head>

      <a href="#maincontent" className="sr-only focus:not-sr-only p-2 bg-primary-600 text-white">Skip to content</a>

      <header className="bg-white border-b">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <a aria-label={`${ORG.name} homepage`} className="flex items-center">
                <Image src={ORG.logo} alt={`${ORG.name} logo`} width={120} height={40} priority />
              </a>
            </Link>
            <div className="hidden md:block">
              <p className="text-sm text-gray-600">Full-time pathologist onsite • NABL accredited</p>
            </div>
          </div>
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-4">
              <li><Link href="/services"><a className="text-sm">Services</a></Link></li>
              <li><Link href="/packages"><a className="text-sm">Packages</a></Link></li>
              <li><Link href="/reports"><a className="text-sm">Reports</a></Link></li>
              <li>
                <a
                  href={`https://wa.me/${ORG.telephone.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I want to book a home sample collection')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-3 py-2 rounded-md text-sm"
                  data-event="whatsapp-open"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="maincontent" className="min-h-screen" role="main">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Accurate diagnostics with a full-time pathologist onsite</h1>
              <p className="text-lg mb-6">Cutting-edge testing, compassionate care, and fast home collection in Halol and nearby areas.</p>

              <div className="flex flex-wrap gap-3">
                <Link href="/book-appointment">
                  <a className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold" data-event="cta-book">Book Appointment</a>
                </Link>

                <a
                  href={`https://wa.me/${ORG.telephone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-white"
                  data-event="cta-whatsapp"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="w-full md:w-96 bg-white/10 p-4 rounded-lg">
              <form onSubmit={checkPincode} className="space-y-3" aria-label="Check home collection availability">
                <label htmlFor="pincode" className="block text-sm font-semibold">Enter your pincode for home collection</label>
                <div className="flex gap-2">
                  <input
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-md text-black"
                    placeholder="e.g., 389350"
                    inputMode="numeric"
                    aria-required="true"
                  />
                  <button type="submit" className="bg-primary-700 px-4 py-2 rounded-md text-white">Check</button>
                </div>
                {pinResult && (
                  <div role="status" aria-live="polite" className={`text-sm ${pinResult.ok ? 'text-green-200' : 'text-yellow-200'}`}>
                    {pinResult.message}
                  </div>
                )}
              </form>
              <div className="mt-4 text-xs text-white/80">We try to reach you for home collection within 24 hours when available.</div>
            </div>
          </div>
        </section>

        {/* Why choose us / packages */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Popular Packages</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {PACKAGES.map((p) => (
                <article key={p.id} className="bg-white p-5 rounded-lg shadow-sm" aria-labelledby={`pkg-${p.id}`}>
                  <h3 id={`pkg-${p.id}`} className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{p.includes}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">{p.price}</div>
                    <Link href={`/packages#${p.id}`}>
                      <a className="bg-primary-600 text-white px-4 py-2 rounded-md" data-event={`book-${p.id}`}>Book</a>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Our Pathologists</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg">
                <Image src="/images/dr-sunil.jpg" alt="Dr Sunil Nagori" width={96} height={96} className="rounded-full" />
                <div>
                  <div className="font-semibold">Dr. Sunil Nagori</div>
                  <div className="text-sm text-gray-600">MD Pathology — In-house full-time pathologist</div>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg">
                <Image src="/images/dr-shalin.jpg" alt="Dr Shalin Nagori" width={96} height={96} className="rounded-full" />
                <div>
                  <div className="font-semibold">Dr. Shalin Nagori</div>
                  <div className="text-sm text-gray-600">Senior Pathologist — Quality assurance & reporting</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Patient Stories</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <blockquote className="bg-white p-4 rounded-lg">
                <p className="italic">“The care and accuracy at City Pathology gave me peace of mind.”</p>
                <footer className="mt-2 font-semibold text-primary-700">– Ramesh P., Halol</footer>
              </blockquote>
              <blockquote className="bg-white p-4 rounded-lg">
                <p className="italic">“I trust City Pathology for every test. Their team is compassionate and thorough.”</p>
                <footer className="mt-2 font-semibold text-primary-700">– Meena B., Bodeli</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-4">Ready to Book?</h3>
            <div className="flex gap-3 justify-center">
              <Link href="/book-appointment"><a className="bg-white text-primary-700 px-5 py-3 rounded-md font-semibold" data-event="cta-bottom-book">Book Appointment</a></Link>
              <a href={`https://wa.me/${ORG.telephone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 px-5 py-3 rounded-md font-semibold" data-event="cta-bottom-whatsapp">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-4 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} {ORG.name} — NABL accredited</div>
            <div>
              <a href="/privacy" className="underline mr-3">Privacy</a>
              <a href="/terms" className="underline">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
