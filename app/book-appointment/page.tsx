'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { FaIndustry, FaUserTie, FaShieldAlt, FaCalendarCheck, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

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
                },
                success: () => {
                  setBookingSuccess(true)
                  const message = encodeURIComponent('🎉 New industrial health checkup booked via Calendly!')
                  window.open(`https://wa.me/919409277144?text=${message}`, '_blank')
                },
                error: (e) => {
                  setWidgetError(true)
                  console.error('Calendly error:', e)
                },
              })
            } catch (err) {
              setWidgetError(true)
              console.error('Calendly init error:', err)
            }
          }
        }
        script.onerror = () => {
          setWidgetError(true)
          console.error('Failed to load Calendly script')
        }
        document.body.appendChild(script)
      } else {
        setCalendlyLoaded(true)
      }
    }

    loadCalendly()

    return () => {
      const script = document.getElementById('calendly-script')
      if (script) document.body.removeChild(script)
    }
  }, [])

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `🏭 Industrial Health Checkup Request\nCompany: \nEmployees: \nType: Pre-employment/Annual\nDate: \n\nSchedule now?`
    )
    window.open(`https://wa.me/919409277144?text=${message}`, '_blank')
  }

  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (bookingSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12"
      >
        <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">Check your email for details. We'll follow up soon.</p>
          <div className="space-y-4">
            <button onClick={handleWhatsAppBooking} className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold">
              📱 Confirm via WhatsApp
            </button>
            <button onClick={() => window.location.reload()} className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold">
              Book Another
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
        <meta name="description" content="Schedule your industrial health checkup with certified pathologists at City Pathology Laboratory." />
        <meta name="keywords" content="industrial health checkup, pre-employment screening, corporate wellness, occupational health" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Industrial Health Checkups</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Book a consultation with our expert pathologists.</p>
            <button
              onClick={scrollToCalendly}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
            >
              Schedule Now
            </button>
          </div>
        </motion.section>

        {/* Calendly Section */}
        <section id="calendly-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-8">Book Your 30-Min Consultation</h2>
              <div ref={calendlyRef} className="rounded-xl overflow-hidden">
                {!calendlyLoaded ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center h-96 bg-gray-50 rounded-lg"
                  >
                    <div className="text-center">
                      <div className="animate-spin h-12 w-12 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading scheduler...</p>
                    </div>
                  </motion.div>
                ) : widgetError ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 bg-red-50 border border-red-200 rounded-lg text-center"
                  >
                    <FaExclamationTriangle className="text-4xl text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Scheduler Unavailable</h3>
                    <p className="text-gray-600 mb-4">
                      The scheduling tool is temporarily unavailable. Please contact us directly or check your Calendly setup.
                    </p>
                    <button
                      onClick={handleWhatsAppBooking}
                      className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                      📱 Book via WhatsApp
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                      Tip: Ensure your event type URL is correct (e.g., /industrial-health-checkup).
                    </p>
                  </motion.div>
                ) : (
                  <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }} />
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fallback Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
            <p className="text-gray-600 mb-6">Contact our team for immediate support.</p>
            <button
              onClick={handleWhatsAppBooking}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-all"
            >
              📱 WhatsApp +91 94092 77144
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
