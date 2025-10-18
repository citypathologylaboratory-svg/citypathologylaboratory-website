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
                },
              })
            } catch (err) {
              console.error('Failed to initialize Calendly widget:', err)
              setWidgetError(true)
            }
          }
        }
        script.onerror = () => {
          console.error('Failed to load Calendly script')
          setWidgetError(true)
        }
        document.body.appendChild(script)
      } else if (window.Calendly && calendlyRef.current) {
        // Calendly already loaded
        try {
          window.Calendly.initInlineWidget({
            url: CALENDLY_EVENT_URL,
            parentElement: calendlyRef.current,
            prefill: { name: '', email: '' },
            preferences: {
              theme: 'light',
              hideGDPRBanner: true,
            },
          })
        } catch (err) {
          console.error('Failed to initialize Calendly widget:', err)
          setWidgetError(true)
        }
      }
    }

    loadCalendly()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Book Appointment | City Pathology Laboratory</title>
        <meta name="description" content="Book your appointment with City Pathology Laboratory" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the service that best fits your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industrial Health Check-up Section - NEW */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center justify-center mb-6">
              <FaIndustry className="text-5xl text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">
                Book Industrial Health Check-up
              </h2>
            </div>
            <p className="text-lg text-gray-600 text-center mb-8">
              Comprehensive health screenings for your workforce. Ensure compliance and employee well-being with our professional industrial health check-up services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openCalendlyPopup}
                className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-8 rounded-lg transition-all flex items-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaCalendarCheck className="text-2xl" />
                Schedule Industrial Health Check-up
              </button>
              <a
                href={CALENDLY_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all text-lg"
              >
                Open Booking in New Tab
              </a>
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <FaShieldAlt className="text-blue-600 mr-2" />
                What's Included:
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Complete physical examination</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Blood tests and pathology screening</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Vision and hearing tests</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                  <span>Detailed health report</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Or Book Any Appointment Below
            </h2>
            <p className="text-xl text-gray-600">
              Select your preferred date and time
            </p>
          </motion.div>

          {/* Calendly Inline Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-4"
          >
            {widgetError ? (
              <div className="text-center py-12 px-4">
                <FaExclamationTriangle className="text-5xl text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unable to Load Booking Widget
                </h3>
                <p className="text-gray-600 mb-6">
                  Please try one of the options below to book your appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openCalendlyPopup}
                    className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-lg transition-all"
                  >
                    Open Booking Popup
                  </button>
                  <a
                    href={CALENDLY_EVENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-all"
                  >
                    Book in New Tab
                  </a>
                </div>
              </div>
            ) : (
              <div
                ref={calendlyRef}
                className="calendly-inline-widget"
                style={{ minWidth: '320px', height: '700px' }}
              />
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
