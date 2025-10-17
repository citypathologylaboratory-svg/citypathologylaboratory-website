export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to help. Get in touch with us for any queries or support.</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <a href="tel:+15551234567" className="text-primary-600 text-xl font-semibold hover:text-primary-700 transition">
                  +1 (555) 123-4567
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon-Sat: 7:00 AM - 7:00 PM</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Chat with us instantly</p>
                <a 
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20City%20Pathology%20Laboratory%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Start Chat
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-2xl font-bold mb-3">Email</h3>
                <p className="text-gray-600 mb-4">Send us an email</p>
                <a href="mailto:info@citypathlab.com" className="text-primary-600 text-lg font-semibold hover:text-primary-700 transition">
                  info@citypathlab.com
                </a>
                <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary-700 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointment">Appointment</option>
                      <option value="test-results">Test Results</option>
                      <option value="home-collection">Home Collection</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                  >
                    Send Message
                  </button>
                  <p className="text-sm text-gray-500 mt-3">* Required fields</p>
                </div>
              </form>
            </div>

            {/* Location & Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">📍 Our Location</h3>
                <p className="text-gray-700 mb-2">
                  City Pathology Laboratory<br />
                  123 Medical Center Drive<br />
                  Suite 100<br />
                  New York, NY 10001<br />
                  United States
                </p>
                <a 
                  href="https://maps.google.com/?q=City+Pathology+Laboratory" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition inline-block mt-3"
                >
                  Get Directions →
                </a>
              </div>

              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary-700">⏰ Operating Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday:</span>
                    <span>7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary-200">
                    <p className="text-sm">
                      <strong>Note:</strong> Home sample collection available during all operating hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Quick Actions</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/book-appointment" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Book Appointment
                </a>
                <a href="/tests" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  View Tests
                </a>
                <a 
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
