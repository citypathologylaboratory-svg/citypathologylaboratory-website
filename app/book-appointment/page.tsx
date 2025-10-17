'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { FaIndustry, FaUserTie, FaShieldAlt, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa'

export default function BookAppointment() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const calendlyRef = useRef(null)

  useEffect(() => {
    // Load Calendly widget script
    const loadCalendly = () => {
      if (!document.querySelector('script[src*="calendly.com"]')) {
        const script = document.createElement('script')
        script.id = 'calendly-script'
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.onload = () => {
          setCalendlyLoaded(true)
          // Initialize Calendly widget
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/citypathologylaboratory/30min',
              parentElement: calendlyRef.current,
              prefill: {
                // Pre-fill form fields if needed
                name: '',
                email: '',
                // customAnswers: { company: '', employees: '' }
              },
              preferences: {
                theme: 'dark', // or 'light'
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                hideGDPRBanner: true,
                hideInitialPage: false,
                primaryColor: '0066cc', // Your brand color
                textColor: 'ffffff'
              },
              success: () => {
                setBookingSuccess(true)
                // Optional: Send analytics or trigger WhatsApp notification
                const message = encodeURIComponent(
                  '🎉 New appointment booked via Calendly!\n' +
                  'Please confirm the booking details and prepare the patient for industrial health checkup.'
                )
                window.open(`https://wa.me/919409277144?text=${message}`, '_blank')
              }
            })
          }
        }
        document.body.appendChild(script)
      } else {
        setCalendlyLoaded(true)
      }
    }

    loadCalendly()

    return () => {
      const script = document.getElementById('calendly-script')
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleWhatsAppIndustrialBooking = () => {
    const message = encodeURIComponent(
      `🏭 *Industrial Health Checkup - Group Booking Request*\n\n` +
      `Company Name: ________________\n` +
      `Number of Employees: ______\n` +
      `Checkup Type: ☐ Pre-employment ☐ Annual ☐ Periodic\n` +
      `Preferred Date Range: __________\n` +
      `On-site Collection: ☐ Yes ☐ No\n\n` +
      `Please provide quote and availability for corporate health screening.`
    )
    window.open(`https://wa.me/919409277144?text=${message}`, '_blank')
  }

  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  if (bookingSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12"
      >
        <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-xl p-8 text-center">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your industrial health checkup appointment has been successfully scheduled.
          </p>
          <div className="space-y-4">
            <a 
              href="https://wa.me/919409277144?text=Hi%2C%20I%20just%20booked%20an%20appointment%20via%20Calendly.%20Please%20confirm%20details."
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all"
            >
              📱 Contact via WhatsApp
            </a>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <>
      <Head>
        <title>Book Industrial Health Checkup | City Pathology Laboratory</title>
        <meta name="description" content="Schedule 30-minute industrial health checkup consultations with certified pathologists. Pre-employment screening, corporate wellness programs, and group bookings available." />
        <meta name="keywords" content="industrial health checkup, pre-employment medical, corporate health screening, occupational health, NABL accredited lab" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "City Pathology Laboratory",
            "description": "Industrial health checkup and diagnostic services",
            "url": "https://citypathlab.vercel.app",
            "telephone": "+919409277144",
            "makesAppointment": true,
            "medicalSpecialty": "Pathology",
            "bookingUrl": "https://calendly.com/citypathologylaboratory/30min"
          })}
        </script>
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl text-center"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full mb-6 border border-yellow-300/30">
                <FaIndustry className="text-yellow-300" />
                <span className="font-semibold text-yellow-100">NABL Accredited</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Industrial <span className="text-yellow-300">Health</span> Checkups
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Schedule your 30-minute consultation for pre-employment screening, 
                corporate wellness programs, and occupational health certification.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToCalendly}
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center gap-2 group"
                >
                  <FaCalendarCheck />
                  <span>Book 30-Min Consultation</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={handleWhatsAppIndustrialBooking}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl flex items-center gap-2"
                >
                  📱 WhatsApp for Groups
                </button>
              </div>
              
              <p className="mt-6 text-yellow-100 text-sm">
                🔒 Secure booking | 📧 Instant confirmation | ⚡ Fast results (24-48 hrs)
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Calendly Section */}
        <section id="calendly-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 overflow-hidden">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700 flex items-center justify-center gap-3">
                    <FaCalendarCheck className="text-primary-600" />
                    Schedule Your Consultation
                  </h2>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">30 Minutes</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Expert Pathologist</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Industrial Focus</span>
                  </div>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Book a consultation to discuss your company's health screening needs. 
                    Perfect for HR managers, safety officers, and corporate wellness coordinators.
                  </p>
                </div>

                {/* Calendly Widget Container */}
                <div ref={calendlyRef} className="calendly-container">
                  {!calendlyLoaded ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center h-[700px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
                    >
                      <div className="text-center p-8">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-600 border-t-transparent mx-auto mb-6"></div>
                        <p className="text-gray-600 font-medium">Loading secure appointment scheduler...</p>
                        <p className="text-sm text-gray-500 mt-2">Powered by Calendly</p>
                      </div>
                    </motion.div>
                  ) : (
                    <div 
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/citypathologylaboratory/30min"
                      style={{ minWidth: '320px', height: '700px' }}
                    />
                  )}
                </div>

                {/* Post-Booking Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary-700 flex items-center gap-2">
                    <FaShieldAlt className="text-primary-600" />
                    What Happens After Booking?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">📧</div>
                      <h4 className="font-semibold mb-2">Confirmation Email</h4>
                      <p className="text-gray-600">Receive instant confirmation with all details</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">📋</div>
                      <h4 className="font-semibold mb-2">Preparation Guide</h4>
                      <p className="text-gray-600">Fasting requirements and document checklist</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">🏢</div>
                      <h4 className="font-semibold mb-2">Corporate Support</h4>
                      <p className="text-gray-600">Dedicated coordinator for group bookings</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industrial Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary-700"
            >
              Comprehensive <span className="text-primary-600">Industrial</span> Health Packages
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Pre-Employment Package */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <FaUserTie className="text-5xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Pre-Employment Screening</h3>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />CBC, LFT, KFT, Urine</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />ECG, Vision, Audiometry</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Chest X-Ray, Physical Exam</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Fitness Certificate</li>
                </ul>
                <button 
                  onClick={scrollToCalendly}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
                >
                  Discuss Package
                </button>
              </motion.div>

              {/* Annual Checkup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <FaShieldAlt className="text-5xl text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Annual Health Check</h3>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Diabetes, Lipid Profile</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Thyroid, Stress Tests</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />BMI, BP Monitoring</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Wellness Report</li>
                </ul>
                <button 
                  onClick={scrollToCalendly}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
                >
                  Book Annual Check
                </button>
              </motion.div>

              {/* Periodic/Specialized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <FaIndustry className="text-5xl text-purple-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Periodic Medical Exam</h3>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Pulmonary Function</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Hazard Exposure Tests</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Compliance Certification</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" />Custom Industry Tests</li>
                </ul>
                <button 
                  onClick={scrollToCalendly}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold"
                >
                  Custom Requirements
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Schedule Your Health Checkup?
            </motion.h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our industrial health specialists for personalized screening programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToCalendly}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
              >
                📅 Book Consultation Now
              </button>
              <a 
                href="https://wa.me/919409277144"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2 justify-center"
              >
                💬 WhatsApp Support
              </a>
            </div>
            <p className="mt-6 text-primary-100 text-sm">
              📞 +91 94092 77144 | 🏢 NABL Accredited | ⚡ Results in 24-48 Hours
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
