'use client'
import { useState } from 'react'

export default function Tests() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const openWhatsApp = (testName: string) => {
    const message = encodeURIComponent(`Hi, I would like to book an appointment for ${testName}`)
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
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
      'Glucose Tolerance Test',
      'Urea',
      'Creatinine',
      'Calcium',
      'Uric Acid',
      'SGPT',
      'SGOT',
      'Alkaline Phosphatase',
      'Bilirubin Total and Direct',
      'Protein Total, Albumin and Globulin',
      'Lipid Profile',
      'T3-T4-TSH',
      'FT3-FT4',
      '25-Oh Vitamin D',
      'Active B12',
      'LH',
      'FSH',
      'PRL',
      'AMH',
      'Total IgE',
      'Widal',
      'Beta HCG',
      'RA Factor',
      'HIV (1 and 2)',
      'HBsAg',
      'HCV'
    ],
    'Urine Tests': [
      'Urine Routine Micro',
      'Urine ACR'
    ],
    'Industrial Health Check-ups': [
      'Pre-Employment Health Check-up',
      'Annual Health Check-up',
      'Food Handler Health Check-up',
      'Audiometry Test',
      'Pulmonary Function Test (PFT)',
      'Vision Test',
      'Drug Screening Test',
      'Fitness Certificate'
    ]
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '2rem' }}>Our Tests</h1>
      
      {Object.entries(categories).map(([category, tests]) => (
        <div key={category} style={{ marginBottom: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
          <button
            onClick={() => toggleCategory(category)}
            style={{
              width: '100%',
              padding: '1.2rem',
              backgroundColor: openCategory === category ? '#3498db' : '#f8f9fa',
              color: openCategory === category ? 'white' : '#2c3e50',
              border: 'none',
              textAlign: 'left',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            {category}
            <span style={{ fontSize: '1.5rem' }}>{openCategory === category ? '−' : '+'}</span>
          </button>
          
          {openCategory === category && (
            <div style={{ padding: '1rem', backgroundColor: 'white' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {tests.map((test, index) => (
                  <li key={index} style={{
                    padding: '0.8rem',
                    borderBottom: index < tests.length - 1 ? '1px solid #eee' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <span style={{ color: '#2c3e50', flex: 1, fontSize: '1rem' }}>{test}</span>
                    <button
                      onClick={() => openWhatsApp(test)}
                      style={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        border: 'none',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        transition: 'background-color 0.3s ease',
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
                    >
                      📱 Book on WhatsApp
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
