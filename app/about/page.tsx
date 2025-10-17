export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Learn more about our commitment to quality healthcare and diagnostic excellence</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary-700">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              City Pathology Laboratory was established with a vision to provide accurate, reliable, and timely diagnostic services to the community. With state-of-the-art equipment and a team of highly qualified pathologists, we have been serving patients for over a decade.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our laboratory is equipped with the latest technology and follows stringent quality control measures to ensure the highest standards of accuracy in all our test results. We understand that accurate diagnosis is the foundation of effective treatment, and we take this responsibility very seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold mb-4 text-primary-700">Our Mission</h3>
              <p className="text-gray-700">
                To provide world-class diagnostic services with accuracy, speed, and compassion. We aim to be the trusted partner in healthcare for every patient who walks through our doors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-3xl font-bold mb-4 text-primary-700">Our Vision</h3>
              <p className="text-gray-700">
                To become the leading pathology laboratory known for innovation, excellence, and patient-centric care. We envision a future where every diagnosis contributes to better health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h4 className="text-xl font-bold mb-3">Accuracy</h4>
              <p className="text-gray-600">We ensure precision in every test, every time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-3">Speed</h4>
              <p className="text-gray-600">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-xl font-bold mb-3">Care</h4>
              <p className="text-gray-600">Compassionate service for every patient</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h4 className="text-xl font-bold mb-3">Confidentiality</h4>
              <p className="text-gray-600">Your privacy is our priority</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-xl font-bold mb-3">Innovation</h4>
              <p className="text-gray-600">Adopting latest technologies and methods</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-3">Integrity</h4>
              <p className="text-gray-600">Honest and ethical in all our practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-700">Our Expert Team</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-12">
              Our team consists of highly qualified pathologists, laboratory technicians, and support staff who are dedicated to providing excellent service. With years of experience and continuous professional development, we ensure the highest standards of care.
            </p>
            <div className="text-center">
              <a href="/" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition inline-block">
                Meet Our Pathologists
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
