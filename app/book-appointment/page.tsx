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
                url: 'https://calendly.com/citypathologylaboratory/[YOUR_EXACT_EVENT_SLUG]', // Replace with real slug, e.g., 'industrial-health-checkup'
                parentElement: calendlyRef.current,
                prefill: { name: '', email: '' },
                preferences: {
                  theme: 'light',
                  hideGDPRBanner: true,
                  primaryColor: '2563eb', // Your brand blue
                },
                success: () => {
                  setBookingSuccess(true)
                  // WhatsApp notification
                  const message = encodeURIComponent('🎉 New industrial health checkup booked via Calendly!')
                  window.open(`https://wa.me/919409277144?text=${message}`, '_blank')
                },
                error: () => {
                  setWidgetError(true)
                  console.error('Calendly widget error - check URL')
                }
              })
            } catch (err) {
              setWidgetError(true)
              console.error('Calendly init error:', err)
            }
          }
        }
        script.onerror = () => setWidgetError(true) // Fallback on script fail
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
      `🏭 Industrial Health Checkup Request\nCompany: \nEmployees: \nType: Pre-employment/Annual\nDate: \n\nSchedule group session?`
    )
    window.open(`https://wa.me/919409277144?text=${message}`, '_blank')
  }

  if (bookingSuccess) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-green-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-600 mb-4">Booked Successfully!</h1>
          <p className="text-gray-600 mb-6">Check your email for confirmation. We'll contact you soon.</p>
          <div className="space-y-3">
            <button onClick={handleWhatsAppBooking} className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold">
              📱 WhatsApp Confirmation
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
        <title>Book Appointment - City Pathology Laboratory</title>
        <meta name="description" content="Schedule industrial health checkups and consultations." />
      </Head>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Book Industrial Health Checkup</h1>
            <p className="text-xl mb-8">30-minute consultations with expert pathologists</p>
            <button onClick={() => document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold">
              Schedule Now
            </button>
          </div>
        </section>

        {/* Calendly Section */}
        <section id="calendly-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Select Your Slot</h2>
            <div ref={calendlyRef} className="max-w-4xl mx-auto">
              {!calendlyLoaded ? (
                <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent mx-auto mb-4 rounded-full"></div>
                    <p>Loading scheduler...</p>
                  </div>
                </div>
              ) : widgetError ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-8 bg-red-50 border border-red-200 rounded-lg">
                  <FaExclamationTriangle className="text-4xl text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Scheduler Temporarily Unavailable</h3>
                  <p className="text-gray-600 mb-4">Please check back soon or contact us directly.</p>
                  <button onClick={handleWhatsAppBooking} className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
                    📱 Book via WhatsApp
                  </button>
                  <p className="text-sm text-gray-500 mt-4">Tip: Verify your Calendly event URL in account settings.</p>
                </motion.div>
              ) : (
                <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }} />
              )}
            </div>
          </div>
        </section>

        {/* Fallback CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Booking?</h3>
            <button onClick={handleWhatsAppBooking} className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold">
              📱 WhatsApp +91 94092 77144
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
