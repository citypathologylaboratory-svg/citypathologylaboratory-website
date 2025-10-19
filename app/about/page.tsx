import React from "react";

export default function AboutUsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-2 text-blue-800">🧬 About City Pathology Laboratory</h1>
      <h2 className="text-lg text-blue-600 mb-4 font-semibold">Trusted Diagnostics Since 1997</h2>
      <p className="mb-5 text-gray-700">
        City Pathology Laboratory is Halol’s leading destination for accurate, ethical, and patient-centered diagnostics. For over two decades, we’ve served individuals, families, and industries with a commitment to scientific excellence and compassionate care.
      </p>

      <h2 className="text-2xl font-bold mb-3 text-blue-800">👨‍⚕️ Meet Our Pathologists</h2>
      <ul className="mb-5 text-gray-700 list-disc list-inside">
        <li>
          <span className="font-semibold">Dr. Sunil Nagori (MBBS, DCP, CIH)</span><br/>
          25+ years of expertise in clinical pathology & occupational health.<br/>
          Developed diagnostic protocols for Halol’s community & industries.<br/>
          Leads operations focused on ethics & transparency.
        </li>
        <li className="mt-3">
          <span className="font-semibold">Dr. Shalin Nagori (MBBS, MD Pathology, PGCIH)</span><br/>
          Specialist in diagnostic automation & patient communication.<br/>
          Promotes accessible healthcare; trains staff in best practices.<br/>
          Published author in THIP Magazine & educator in industrial health.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-3 text-blue-800">🧪 What We Offer</h2>
      <ul className="mb-5 text-gray-700 list-disc list-inside">
        <li>Blood & urine testing with scientific rigor and timely reporting</li>
        <li>All test reports in clear, easy-to-understand English—for confident health decisions</li>
        <li>Custom health panels & screenings for industrial clients</li>
        <li>Fast, secure result delivery via WhatsApp and online booking</li>
        <li>Quality assured by external benchmarks and staff training</li>
      </ul>

      <h2 className="text-2xl font-bold mb-3 text-blue-800">🌟 Why Choose Us?</h2>
      <p className="mb-5 text-gray-700">
        <strong>Led by Pathologist. Built for Patients.</strong><br/>
        We combine decades of experience with modern technology to deliver reliable, respectful care. Whether you're a patient or a business, we’re here to support your health with clarity and compassion.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-blue-700">📞 Need help or want to book an appointment?</h2>
      <p className="mb-2 text-gray-700">
        We’re just a message away—reach out anytime for personalized support.
      </p>
    </main>
  );
}
