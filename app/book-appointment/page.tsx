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

  // Use your profile URL as a fallback; replace with exact event URL when available
  const CALENDLY_BASE_URL = 'https://calendly.com/citypathologylaboratory'
  const CALENDLY_EVENT_URL = 'https://calendly.com/citypathologylaboratory/industrial-health-checkup-30min' // Replace with exact event slug

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
              setBookingSuccess(true)
            } catch (error) {
              console.error('Error initializing Calendly:', error)
              setWidgetError(true)
            }
          }
        }
        script.onerror = () => setWidgetError(true)
        document.body.appendChild(script)
      } else if (window.Calendly && calendlyRef.current) {
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
      }
    }

    loadCalendly()

    // Listen for Calendly events
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event === 'calendly.event_scheduled') {
        setBookingSuccess(true)
      }
    }

    window.addEventListener('message', handleCalendlyEvent)
    return () => window.removeEventListener('message', handleCalendlyEvent)
  }, [])

  return (
    <>
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Book Your Health Checkup
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Schedule your appointment with our healthcare professionals today
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Benefits */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <FaCalendarCheck className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-gray-600">Book your appointment in just a few clicks</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6"
              >
                <FaUserTie className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Professionals</h3>
                <p className="text-gray-600">Experienced healthcare team at your service</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
                <p className="text-gray-600">Your health information is protected</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Calendly Widget Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {widgetError && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 flex items-start gap-4"
                >
                  <FaExclamationTriangle className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Unable to Load Booking Widget</h3>
                    <p className="text-red-600 mb-4">
                      Please contact us directly to schedule your appointment:
                    </p>
                    <div className="space-y-2 text-red-700">
                      <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
                      <p><strong>Email:</strong> info@citypathologylaboratory.com</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {bookingSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 flex items-start gap-4"
                >
                  <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Booking Confirmed!</h3>
                    <p className="text-green-600">
                      You should receive a confirmation email shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div
                  ref={calendlyRef}
                  style={{ minHeight: '700px' }}
                  className="calendly-inline-widget"
                />
              </div>

              {!calendlyLoaded && !widgetError && (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Help Booking?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team is here to assist you with any questions
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:info@citypathologylaboratory.com"
                  className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
