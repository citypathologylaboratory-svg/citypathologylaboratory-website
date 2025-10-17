export default function Tests() {
  const tests = [
    {
      category: "Blood Tests",
      items: [
        { name: "Complete Blood Count (CBC)", price: "$30", description: "Comprehensive blood analysis including RBC, WBC, platelets" },
        { name: "Lipid Profile", price: "$40", description: "Cholesterol, triglycerides, HDL, LDL analysis" },
        { name: "Blood Sugar (Fasting)", price: "$15", description: "Fasting glucose level measurement" },
        { name: "HbA1c (Glycated Hemoglobin)", price: "$35", description: "3-month average blood sugar levels" },
      ]
    },
    {
      category: "Thyroid Tests",
      items: [
        { name: "T3, T4, TSH", price: "$50", description: "Complete thyroid function panel" },
        { name: "Free T3 & Free T4", price: "$45", description: "Free thyroid hormone levels" },
      ]
    },
    {
      category: "Liver Function Tests",
      items: [
        { name: "LFT Panel", price: "$55", description: "SGOT, SGPT, Bilirubin, Alkaline Phosphatase" },
        { name: "Hepatitis Panel", price: "$80", description: "Hepatitis A, B, C screening" },
      ]
    },
    {
      category: "Kidney Function Tests",
      items: [
        { name: "KFT Panel", price: "$50", description: "Creatinine, BUN, Uric Acid" },
        { name: "Microalbumin", price: "$35", description: "Early kidney damage detection" },
      ]
    },
    {
      category: "Urine Tests",
      items: [
        { name: "Routine Urinalysis", price: "$20", description: "Complete urine examination" },
        { name: "Urine Culture", price: "$40", description: "Bacterial infection detection" },
      ]
    },
    {
      category: "Specialized Tests",
      items: [
        { name: "Vitamin D", price: "$45", description: "25-OH Vitamin D levels" },
        { name: "Vitamin B12", price: "$40", description: "B12 deficiency testing" },
        { name: "Iron Studies", price: "$50", description: "Serum iron, TIBC, Ferritin" },
        { name: "COVID-19 RT-PCR", price: "$60", description: "COVID-19 detection test" },
      ]
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Tests</h1>
          <p className="text-xl">Comprehensive range of diagnostic tests with accurate and timely results</p>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {tests.map((testCategory, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary-700 border-b-2 border-primary-200 pb-2">
                  {testCategory.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testCategory.items.map((test, testIdx) => (
                    <div key={testIdx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-primary-500">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{test.name}</h3>
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
                          {test.price}
                        </span>
                      </div>
                      <p className="text-gray-600">{test.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-700">Ready to Book Your Test?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Schedule your appointment online or contact us for home sample collection services.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/book-appointment" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              Book Appointment
            </a>
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary-700 text-center">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Sample Collection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Home sample collection available</li>
                  <li>✓ Walk-in facility at our laboratory</li>
                  <li>✓ Morning hours: 7:00 AM - 11:00 AM</li>
                  <li>✓ Evening hours: 4:00 PM - 7:00 PM</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Report Delivery</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Email delivery of reports</li>
                  <li>✓ Physical copy available at lab</li>
                  <li>✓ Most reports within 24-48 hours</li>
                  <li>✓ Urgent reports available on request</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
