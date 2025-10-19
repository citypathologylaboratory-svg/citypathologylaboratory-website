import React from "react";

export default function AboutUsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <section className="bg-white rounded-2xl shadow-lg p-8 mb-10 border">
        <h1 className="text-4xl font-bold mb-3 text-blue-900 flex items-center gap-3">
          <span>🧬</span>About City Pathology Laboratory
        </h1>
        <h2 className="text-lg text-blue-600 mb-4 font-semibold">Trusted Diagnostics Since 1997</h2>
        <p className="mb-5 text-gray-700">
          City Pathology Laboratory is Halol’s leading destination for accurate, ethical, and patient-centered diagnostics. For over two decades, we’ve served individuals, families, and industries with a commitment to scientific excellence and compassionate care.
        </p>
      </section>

      <section className="bg-blue-50 rounded-xl shadow p-6 mb-10">
        <h2 className="text-2xl font-bold mb-3 text-blue-800 flex items-center gap-2">👨‍⚕️ Meet Our Pathologists</h2>
        <ul className="mb-1 text-gray-700 list-disc list-inside space-y-4">
          <li>
            <span className="font-semibold">Dr. Sunil Nagori (MBBS, DCP, CIH)</span><br />
            25+ years of expertise in clinical pathology & occupational health.<br />
            Developed diagnostic protocols for Halol’s community & industries.<br />
            Leads operations focused on ethics & transparency.
          </li>
          <li>
            <span className="font-semibold">Dr. Shalin Nagori (MBBS, MD Pathology, PGCIH)</span><br />
            Specialist in diagnostic automation & patient communication.<br />
            Promotes accessible healthcare; trains staff in best practices.<br />
            Published author in THIP Magazine & educator in industrial health.
          </li>
        </ul>
      </section>

      <section className="bg-white rounded-xl shadow p-6 mb-10 border">
        <h2 className="text-2xl font-bold mb-3 text-blue-800 flex items-center gap-2">🧪 What We Offer</h2>
        <ul className="mb-5 text-gray-700 list-disc list-inside space-y-2">
          <li>Blood & urine testing with scientific rigor and timely reporting</li>
          <li>All test reports in clear, easy-to-understand English—for confident health decisions</li>
          <li>Custom health panels & screenings for industrial clients</li>
          <li>Fast, secure result delivery via WhatsApp and online booking</li>
          <li>Quality assured by external benchmarks and staff training</li>
        </ul>
      </section>

      <section className="bg-blue-50 rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3 text-blue-800 flex items-center gap-2">🌟 Why Choose Us?</h2>
        <p className="mb-3 text-gray-700">
          <strong className="font-semibold text-blue-900">Led by Pathologist. Built for Patients.</strong><br />
          We combine decades of experience with modern technology to deliver reliable, respectful care. Whether you're a patient or a business, we’re here to support your health with clarity and compassion.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow p-6 border text-center">
        <h2 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2 justify-center">📞 Need help or want to book an appointment?</h2>
        <p className="mb-2 text-gray-700">
          We’re just a message away—reach out anytime for personalized support.
        </p>
        <a
          href="https://wa.me/919409277144"
          className="inline-block bg-blue-700 text-white rounded px-6 py-2 font-semibold hover:bg-blue-800 transition"
        >
          WhatsApp Us
        </a>
      </section>
    </main>
  );
}
