'use client'

import { useEffect } from 'react'

export default function BookAppointment() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl">Schedule your lab test appointment online - Quick, easy, and convenient</p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-3">Online Booking</h3>
                <p className="text-gray-600 mb-4">Schedule your appointment using our Calendly integration below</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3">Walk-In</h3>
                <p className="text-gray-600 mb-4">Visit our lab during operating hours</p>
                <p className="text-sm text-gray-500">Mon-Sat: 7AM-7PM<br />Sun: 8AM-2PM</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-3">Home Collection</h3>
                <p className="text-gray-600 mb-4">Request home sample collection service</p>
                <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="text-green-500 font-semibold hover:text-green-600">
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary-700 text-center">Schedule Your Appointment</h2>
              <p className="text-center text-gray-600 mb-8">
                Select your preferred date and time slot. You will receive a confirmation email with all the details.
              </p>
              
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/YOUR_CALENDLY_USERNAME?hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary-700">Before Your Appointment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Fasting required for certain tests (8-12 hours)</li>
                  <li>✓ Carry a valid ID proof</li>
                  <li>✓ Bring prescription from your doctor if available</li>
                  <li>✓ Arrive 10 minutes before your scheduled time</li>
                  <li>✓ Wear comfortable clothing for blood sample collection</li>
                </ul>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Need Help?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📞</div>
                  <h4 className="font-bold mb-2">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Sat: 7AM-7PM</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💬</div>
                  <h4 className="font-bold mb-2">WhatsApp</h4>
                  <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="text-green-500 font-semibold hover:text-green-600">
                    Chat with us
                  </a>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
