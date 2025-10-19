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
                url: CALENDLY_EVENT_URL,
                parentElement: calendlyRef.current,
                prefill: {},
                utm: {}
              })
            } catch (error) {
              console.error('Calendly inline widget error:', error)
              setWidgetError(true)
            }
          }
        }

        script.onerror = () => {
          console.error('Failed to load Calendly script')
          setWidgetError(true)
        }

        document.body.appendChild(script)
        
        // Also load Calendly CSS
        const link = document.createElement('link')
        link.href = 'https://assets.calendly.com/assets/external/widget.css'
        link.rel = 'stylesheet'
        document.head.appendChild(link)
      } else {
        setCalendlyLoaded(true)
        if (window.Calendly && calendlyRef.current) {
          window.Calendly.initInlineWidget({
            url: CALENDLY_EVENT_URL,
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {}
          })
        }
      }
    }

    loadCalendly()

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          setBookingSuccess(true)
          setTimeout(() => setBookingSuccess(false), 5000)
        }
      }
    }

    window.addEventListener('message', handleCalendlyEvent)

    return () => {
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      <Head>
        <title>Book Appointment for Industrial Health Check Up - City Pathology Laboratory</title>
        <meta name="description" content="Book your industrial health checkup appointment at City Pathology Laboratory. Easy online scheduling with Calendly." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaCalendarCheck className="text-5xl" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Book Appointment for Industrial Health Check Up
              </h1>
            </div>
            <p className="text-xl text-teal-100 mb-4">
              Schedule your industrial health checkup with City Pathology Laboratory
            </p>
            <p className="text-teal-50">
              Select a convenient date and time below, or call us at <strong>+91-94092 77144</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-teal-600"
            >
              <FaIndustry className="text-4xl text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Industrial Health Checkups</h3>
              <p className="text-gray-600">Comprehensive health assessments for industrial workers and employees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-emerald-600"
            >
              <FaUserTie className="text-4xl text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Expert Pathologists</h3>
              <p className="text-gray-600">Highly qualified team ensuring accurate results and proper care</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-teal-600"
            >
              <FaShieldAlt className="text-4xl text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">NABL Accredited</h3>
              <p className="text-gray-600">Certified laboratory maintaining highest quality standards</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-2">Select Your Appointment Time</h2>
              <p className="text-teal-100">Choose a date and time that works best for you</p>
            </div>

            {/* Calendly Embedded Widget */}
            <div className="p-4">
              {!calendlyLoaded && (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
                  <p className="mt-4 text-gray-600">Loading booking system...</p>
                </div>
              )}
              
              {widgetError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <FaExclamationTriangle className="text-4xl text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-red-700 mb-2">Unable to Load Booking Widget</h3>
                  <p className="text-red-600 mb-4">Please try one of these alternatives:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={openCalendlyPopup}
                      className="bg-teal-600 text-white hover:bg-teal-700 font-bold py-3 px-6 rounded-lg transition-all"
                    >
                      Open Booking Window
                    </button>
                    <a
                      href={CALENDLY_EVENT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-bold py-3 px-6 rounded-lg transition-all"
                    >
                      Open in New Tab
                    </a>
                  </div>
                </div>
              )}

              <div 
                ref={calendlyRef} 
                style={{ minHeight: '700px' }}
                className="calendly-inline-widget"
              />
            </div>
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
