'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { FaIndustry, FaUserTie, FaShieldAlt, FaCalendarCheck, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

// Declare Calendly on window to fix TypeScript error
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function BookAppointment() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)
  const [widgetError, setWidgetError] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const calendlyRef = useRef(null)

  // Updated Calendly URL
  const CALENDLY_BASE_URL = 'https://calendly.com/citypathologylaboratory'
  const CALENDLY_EVENT_URL = 'https://calendly.com/citypathologylaboratory/30min' // Updated URL

  // Function to open Calendly popup
  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_EVENT_URL })
    } else {
      // Fallback: open in new tab
      window.open(CALENDLY_EVENT_URL, '_blank')
    }
  }

  useEffect(() => {
    const loadCalendly = () => {
      if (!document.querySelector('script[src*="calendly.com"]')) {
        const script = document.createElement('script')
        script.id = 'calendly-script'
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.onload = () => {
          setCalendlyLoaded(true)
          if (window.Calendly && calendlyRef.current) {
            try {
              window.Calendly.initInlineWidget({
                url: CALENDLY_EVENT_URL, // Must be a specific event URL
                parentElement: calendlyRef.current,
                prefill: { name: '', email: '' },
                preferences: {
                  theme: 'light',
                  hideGDPRBanner: true,
                  primaryColor: '2563eb',
                  textColor: 'ffffff',
                  backgroundColor: '1e293b'
                },
                embedType: 'Inline'
              })
            } catch (error) {
              console.error('Failed to initialize Calendly widget:', error)
              setWidgetError(true)
            }
          }
        }
        script.onerror = () => {
          console.error('Failed to load Calendly script')
          setWidgetError(true)
        }
        document.body.appendChild(script)

        // Also add CSS
        const cssLink = document.createElement('link')
        cssLink.rel = 'stylesheet'
        cssLink.href = 'https://assets.calendly.com/assets/external/widget.css'
        document.head.appendChild(cssLink)
      } else {
        setCalendlyLoaded(true)
        if (window.Calendly && calendlyRef.current) {
          try {
            window.Calendly.initInlineWidget({
              url: CALENDLY_EVENT_URL,
              parentElement: calendlyRef.current,
              prefill: { name: '', email: '' },
              preferences: {
                theme: 'light',
                hideGDPRBanner: true,
                primaryColor: '2563eb',
                textColor: 'ffffff',
                backgroundColor: '1e293b'
              },
              embedType: 'Inline'
            })
          } catch (error) {
            console.error('Failed to initialize Calendly widget:', error)
            setWidgetError(true)
          }
        }
      }
    }

    const timer = setTimeout(loadCalendly, 100)
    return () => clearTimeout(timer)
  }, [])

  const bookingTypes = [
    {
      icon: <FaIndustry className="text-4xl mb-4 text-blue-500" />,
      title: 'Industrial Health Checkup',
      description: 'Comprehensive health screenings for corporate employees and industrial workers.',
      features: [
        'Pre-employment medical exams',
        'Periodic health checkups',
        'Fitness certificates',
        'Occupational health assessments'
      ]
    },
    {
      icon: <FaUserTie className="text-4xl mb-4 text-green-500" />,
      title: 'Executive Health Package',
      description: 'Premium health checkup packages designed for busy executives and professionals.',
      features: [
        'Full body checkup',
        'Cardiac evaluation',
        'Stress assessment',
        'Nutritional counseling'
      ]
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-purple-500" />,
      title: 'Preventive Care',
      description: 'Early detection and preventive health screenings for long-term wellness.',
      features: [
        'Cancer screening',
        'Diabetes management',
        'Thyroid profile',
        'Vitamin deficiency tests'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Head>
        <title>Book Appointment - City Pathology Laboratory</title>
        <meta name="description" content="Schedule your health checkup appointment with City Pathology Laboratory. Expert diagnostics and comprehensive health packages." />
      </Head>

      {/* Hero Section with Calendly Button */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Schedule your health checkup conveniently online
            </p>
            
            {/* Primary Calendly Button */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={openCalendlyPopup}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <FaCalendarCheck className="text-2xl" />
                Book via Calendly
              </button>
              <p className="text-sm text-blue-300">
                Click above to schedule your appointment instantly
              </p>
            </div>
          </motion.div>

          {/* Booking Types */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bookingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-blue-200 mb-4 text-sm">{type.description}</p>
                  <ul className="text-left space-y-2 w-full">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-blue-100">
                        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Inline Widget Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Schedule Your Appointment
            </h2>
            
            {/* Calendly Widget Error Fallback */}
            {widgetError ? (
              <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-6 text-center">
                <FaExclamationTriangle className="text-yellow-400 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Widget Not Loading?
                </h3>
                <p className="text-blue-200 mb-6">
                  No problem! You can book directly through Calendly.
                </p>
                <a
                  href={CALENDLY_EVENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
                >
                  <FaCalendarCheck className="text-xl" />
                  Open Calendly in New Tab
                </a>
              </div>
            ) : (
              <>
                {/* Calendly Inline Widget */}
                <div
                  ref={calendlyRef}
                  style={{ minHeight: '700px' }}
                  className="calendly-inline-widget"
                />
                {!calendlyLoaded && !widgetError && (
                  <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Additional Calendly Button */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Booking?
            </h2>
            <p className="text-blue-100 mb-6">
              If you experience any issues with the booking widget above, you can also book directly via Calendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openCalendlyPopup}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2"
              >
                <FaCalendarCheck className="text-xl" />
                Book via Calendly
              </button>
              <a
                href={CALENDLY_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg transition-all"
              >
                Open in New Tab
              </a>
            </div>
            <p className="text-sm text-blue-100 mt-6">
              Or call us directly at: <strong>+91 XXX XXX XXXX</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Message */}
      {bookingSuccess && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
          <FaCheckCircle className="text-2xl" />
          <span>Appointment booked successfully!</span>
        </div>
      )}
    </div>
  )
}
