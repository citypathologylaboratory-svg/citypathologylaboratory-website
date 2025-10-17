// pages/tests.tsx
import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

type Props = {
  bloodTests: string[];
  urineTests: string[];
  org: {
    name: string;
    url: string;
    logo: string;
    telephone: string;
    accreditation?: string;
  };
};

const BLOOD_TESTS_DEFAULT: string[] = [
  "CBC",
  "HB",
  "TC",
  "DC",
  "ESR",
  "MALARIA PARASITE",
  "PERIPHERAL SMEAR EXAMINATION",
  "ABSOLUTE EOSINOPHIL COUNT",
  "HEMOGLOBIN ELECTROPHORESIS",
  "PLATELET COUNT",
  "IMMATURE PLATELET FRACTION",
  "BLEEDING TIME",
  "CLOTTING TIME",
  "PROTHROMBIN TIME",
  "BLOOD GROUP",
  "HbA1c",
  "Beta-Thalessamia Screening",
  "Fasting Blood Sugar",
  "Post Prandial Blood Sugar",
  "Random Blood Sugar",
  "Glucose Tolerance Test",
  "Urea",
  "Creatinine",
  "Calcium",
  "Uric Acid",
  "SGPT",
  "SGOT",
  "Alkaline Phosphatase",
  "Bilirubin Total and Direct",
  "Protein Total, Albumin and Globulin",
  "Lipid Profile",
  "T3-T4-TSH",
  "FT3-FT4",
  "25-Oh Vitamin D",
  "Active B12",
  "LH",
  "FSH",
  "PRL",
  "AMH",
  "Total IgE",
  "Widal",
  "Beta HCG",
  "RA Factor",
  "HIV (1 and 2)",
  "HBsAg",
  "HCV",
  "FNAC"
];

const URINE_TESTS_DEFAULT: string[] = [
  "Urine Routine Micro",
  "Urine ACR",
  "Semen Analysis"
];

const ORG_DEFAULT = {
  name: 'City Pathology Laboratory',
  url: 'https://citypathologylaboratory-website.vercel.app',
  logo: '/images/logo.png',
  telephone: '+919409277144',
  accreditation: 'NABL'
};

const TestsPage: NextPage<Props> = ({ bloodTests, urineTests, org }) => {
  const [query, setQuery] = useState<string>('');

  const q = query.trim().toLowerCase();
  const filter = (list: string[]) => {
    if (!q) return list;
    return list.filter((t) => t.toLowerCase().includes(q));
  };

  const filteredBlood = useMemo(() => filter(bloodTests), [bloodTests, q]);
  const filteredUrine = useMemo(() => filter(urineTests), [urineTests, q]);

  return (
    <>
      <Head>
        <title>Available Tests — {org.name}</title>
        <meta
          name="description"
          content="Comprehensive list of laboratory tests classified under Blood and Urine categories. No package or price information is shown."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={`Available Tests — ${org.name}`} />
        <meta property="og:description" content="Comprehensive list of laboratory tests classified under Blood and Urine categories." />
        <meta property="og:url" content={org.url + '/tests'} />
        <meta property="og:image" content={org.url + org.logo} />
      </Head>

      <a href="#maincontent" className="sr-only focus:not-sr-only p-2 bg-primary-600 text-white">
        Skip to content
      </a>

      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a aria-label={`${org.name} homepage`} className="flex items-center gap-3">
              {/* If logo is missing, Image will fallback. Replace logo in /public/images/logo.png */}
              <Image src={org.logo} alt={`${org.name} logo`} width={120} height={40} priority />
              <span className="hidden md:inline text-sm text-gray-600">{org.accreditation}</span>
            </a>
          </Link>

          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/"><a className="text-sm">Home</a></Link>
              </li>
              <li>
                <Link href="/tests"><a className="text-sm font-semibold">Tests</a></Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${org.telephone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-3 py-2 rounded-md text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="maincontent" className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-4 text-sm text-gray-600">
            <Link href="/"><a className="underline">Home</a></Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">Tests</span>
          </nav>

          <header className="mb-6">
            <h1 className="text-3xl font-bold">Available Laboratory Tests</h1>
            <p className="text-gray-600 mt-2">
              The tests below are classified under Blood and Urine categories. This page intentionally excludes packages and pricing information.
            </p>
          </header>

          <section className="mb-8">
            <label htmlFor="search" className="block text-sm font-medium mb-2">
              Search tests
            </label>
            <input
              id="search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tests, e.g., HbA1c"
              className="w-full max-w-xl p-2 border rounded"
              aria-label="Search available tests"
            />
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <article aria-labelledby="blood-heading" className="bg-white p-6 rounded-lg shadow-sm">
              <h2 id="blood-heading" className="text-2xl font-semibold mb-3">
                Blood Tests ({filteredBlood.length})
              </h2>
              {filteredBlood.length === 0 ? (
                <p className="text-gray-600">No matching blood tests found.</p>
              ) : (
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  {filteredBlood.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </article>

            <article aria-labelledby="urine-heading" className="bg-white p-6 rounded-lg shadow-sm">
              <h2 id="urine-heading" className="text-2xl font-semibold mb-3">
                Urine & Related Tests ({filteredUrine.length})
              </h2>
              {filteredUrine.length === 0 ? (
                <p className="text-gray-600">No matching urine tests found.</p>
              ) : (
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  {filteredUrine.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </article>
          </section>

          <section className="mt-10">
            <h3 className="text-xl font-semibold mb-3">Want to book a test or ask a question?</h3>
            <p className="text-gray-600">Use the Book Appointment page or contact us on WhatsApp for home collection availability and sample instructions.</p>
            <div className="mt-4 flex gap-3">
              <Link href="/book-appointment"><a className="bg-primary-600 text-white px-4 py-2 rounded">Book Appointment</a></Link>
              <a
                href={`https://wa.me/${org.telephone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                WhatsApp Us
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-4 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} {org.name} — {org.accreditation}</div>
          <div>
            <Link href="/privacy"><a className="underline mr-3">Privacy</a></Link>
            <Link href="/terms"><a className="underline">Terms</a></Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // For now we serve static arrays. In future, replace with CMS or JSON file fetch.
  return {
    props: {
      bloodTests: BLOOD_TESTS_DEFAULT,
      urineTests: URINE_TESTS_DEFAULT,
      org: ORG_DEFAULT
    },
    revalidate: 3600 // revalidate hourly
  };
};

export default TestsPage;
