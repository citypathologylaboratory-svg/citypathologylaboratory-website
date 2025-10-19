'use client'
import { useState } from 'react'

export default function Tests() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const openWhatsApp = (testName: string) => {
    const message = encodeURIComponent(`Hi, I would like to book an appointment for ${testName}`)
    window.open(`https://wa.me/919409277144?text=${message}`, '_blank')
  }

  const categories = {
    'Blood Tests': [
      'CBC',
      'HB',
      'TC',
      'DC',
      'ESR',
      'MALARIA PARASITE',
      'PERIPHERAL SMEAR EXAMINATION',
      'ABSOLUTE EOSINOPHIL COUNT',
      'HEMOGLOBIN ELECTROPHORESIS',
      'PLATELET COUNT',
      'IMMATURE PLATELET FRACTION',
      'BLEEDING TIME',
      'CLOTTING TIME',
      'PROTHROMBIN TIME',
      'BLOOD GROUP',
      'HbA1c',
      'Beta-Thalessamia Screening',
      'Fasting Blood Sugar',
      'Post Prandial Blood Sugar',
      'Random Blood Sugar',
      'Liver Function Tests (LFT)',
      'Kidney Function Tests (KFT)',
      'Lipid Profile',
      'Thyroid Profile',
      'Iron Profile',
      'Vitamin B12',
      'Vitamin D',
      'Calcium',
      'Phosphorus',
      'Uric Acid',
      'Creatinine',
      'Urea',
      'Bilirubin',
      'SGOT/AST',
      'SGPT/ALT',
      'Alkaline Phosphatase',
      'Total Protein',
      'Albumin',
      'Globulin',
      'A/G Ratio',
      'GGT',
    ],
    'Urine Tests': [
      'Routine Urine Examination',
      'Urine Culture',
      'Microalbumin Urine',
      'Creatinine Clearance',
      '24 Hour Urine Protein',
      'Urine Pregnancy Test',
    ],
    'Stool Tests': [
      'Routine Stool Examination',
      'Stool Culture',
      'Occult Blood Test',
    ],
    'Microbiology': [
      'Blood Culture',
      'Urine Culture',
      'Sputum Culture',
      'Pus Culture',
      'Wound Swab Culture',
      'Throat Swab Culture',
    ],
    'Serology': [
      'Widal Test',
      'HBsAg',
      'HIV',
      'VDRL',
      'Anti HCV',
      'Dengue NS1 Antigen',
      'Dengue IgG/IgM',
      'COVID-19 RT-PCR',
      'COVID-19 Rapid Antigen',
    ],
    'Histopathology': [
      'FNAC',
      'Biopsy',
      'PAP Smear',
    ],
    'Special Tests': [
      'PSA',
      'CEA',
      'CA 19-9',
      'CA 125',
      'AFP',
      'Beta HCG',
      'Troponin I',
      'D-Dimer',
      'CRP',
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pathology Tests
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive range of diagnostic tests with accurate results
          </p>
        </div>
      </section>

      {/* Tests Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {Object.entries(categories).map(([category, tests]) => (
              <div key={category} className="mb-4">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full bg-white rounded-lg shadow-md p-6 flex justify-between items-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-800">{category}</h3>
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      openCategory === category ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openCategory === category && (
                  <div className="bg-white rounded-b-lg shadow-md p-6 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tests.map((test) => (
                        <div
                          key={test}
                          className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-gray-700">{test}</span>
                          <button
                            onClick={() => openWhatsApp(test)}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Book
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing a Test?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert team is here to guide you in selecting the right tests
          </p>
          <a
            href="https://wa.me/919409277144"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
