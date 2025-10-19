// app/about/page.tsx

import React from "react";

export default function AboutUsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-blue-900">About City Pathology Laboratory</h1>
      <section className="mb-8">
        <p className="text-lg text-gray-700 mb-3">
          City Pathology Laboratory is Halol’s trusted center for comprehensive medical diagnostics and preventive health services. Our mission: combine state-of-the-art science, patient-focused care, and constant innovation.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Led by a team of highly qualified pathologists and lab scientists with years of experience in clinical diagnostics and research.
          </li>
          <li>
            Recognized for diagnostic accuracy, ethical practices, and rapid results for both routine tests and advanced investigations.
          </li>
          <li>
            Awarded for Excellence in Laboratory Services & featured in <span className="font-bold">HealthCare India Magazine</span> (2024).
          </li>
          <li>
            Regular contributors to medical journals, local health seminars, and community awareness campaigns in Gujarat.
          </li>
          <li>
            All lab operations are quality assured with periodic external audits — upholding India's NABL and international standards.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-blue-800">Our Vision & Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Provide timely, transparent, and reliable health reports so patients and physicians can make informed decisions.
          </li>
          <li>
            Lead in technology adoption — from automated analyzers to digital result delivery and patient data protection.
          </li>
          <li>
            Strengthen community health awareness through outreach and industry partnerships.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3 text-blue-800">Meet Our Team</h2>
        <p className="text-gray-700 mb-2">
          Our staff includes experienced pathologists, technicians, operational leaders, and customer support professionals. Every report, every service is the result of teamwork — ensuring the highest quality and compassion for every patient and client.
        </p>
      </section>
    </main>
  );
}
