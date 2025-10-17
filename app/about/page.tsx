import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>City Pathology Laboratory – Halol</title>
        <meta name="description" content="Full-time pathologists, advanced diagnostics, and patient-first care in Halol, Gujarat." />
        <meta name="keywords" content="Pathology Halol, Diagnostic Lab, Full-time Pathologist, City Pathology Laboratory" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <img src="/images/logo.png" alt="City Pathology Logo" className="mb-6 w-32 h-auto" />
              <h1 className="text-5xl font-bold mb-6">Welcome to City Pathology Laboratory</h1>
              <p className="text-xl mb-8">Providing accurate, reliable diagnostic services with cutting-edge technology and expert pathologists.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="/book-appointment" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Book Appointment
                </a>
                <a href="https://wa.me/919409277144" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition">
                  WhatsApp Us for Booking, Questions & Support<br />
                  <span className="text-sm block mt-1">અમે WhatsApp પર ઉપલબ્ધ છીએ — બુકિંગ, પ્રશ્નો અને સહાય માટે</span>
                  <span className="text-sm block">व्हाट्सएप करें — बुकिंग, सवाल और सहायता के लिए</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cards */}
              {/* ... existing cards unchanged ... */}
            </div>
          </div>
        </section>

        {/* Doctors Profiles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold inline-block">
                Full-Time Pathologist Onsite — Trust & Transparency
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Meet Our Expert Pathologists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Dr. Sunil Nagori */}
              {/* Dr. Shalin Nagori */}
              {/* ... existing profiles unchanged ... */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Patient Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic">“The care and accuracy at City Pathology gave me peace of mind during a difficult time.”</p>
                <footer className="mt-4 text-primary-600 font-semibold">– Ramesh P., Halol</footer>
              </blockquote>
              <blockquote className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic">“I trust City Pathology for every test. Their team is compassionate and thorough.”</p>
                <footer className="mt-4 text-primary-600 font-semibold">– Meena B., Bodeli</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Book your appointment today or reach out via WhatsApp</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/book-appointment" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Book Appointment
              </a>
              <a href="https://wa.me/919409277144" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
