import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const doctors = [
  {
    id: 1,
    initials: 'SN',
    name: 'Dr. Sunil Nagori',
    qualifications: 'M.B.B.S., D.C.P., C.I.H.',
    roles: ['Consultant Pathologist', 'Industrial Physician'],
    description: 'Specializing in clinical pathology and occupational health with extensive experience in diagnostic services.'
  },
  {
    id: 2,
    initials: 'SN',
    name: 'Dr. Shalin Nagori',
    qualifications: 'M.B.B.S., M.D.(Path), P.G.C.I.H.',
    roles: ['Consultant Pathologist', 'Industrial Physician'],
    description: 'Expert in anatomical and clinical pathology with postgraduate certification in industrial health.'
  }
];

const features = [
  { icon: '🔬', title: 'Advanced Technology', description: 'State-of-the-art equipment ensuring accurate and timely results for all diagnostic tests.' },
  { icon: '👨‍⚕️', title: 'Expert Pathologists', description: 'Highly qualified and experienced pathologists dedicated to providing precise diagnostics.' },
  { icon: '⚡', title: 'Quick Results', description: 'Fast turnaround time without compromising on quality and accuracy.' },
  { icon: '🏥', title: 'Comprehensive Tests', description: 'Wide range of pathology and diagnostic tests available under one roof.' },
  { icon: '💯', title: 'Quality Assurance', description: 'Stringent quality control measures ensuring reliable and trustworthy results.' },
  { icon: '📍', title: 'Convenient Location', description: 'Centrally located with easy access and ample parking facilities.' }
];

const CTASection = ({ title, description, buttons }) => (
  <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl mb-8 max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map((btn, idx) => (
          <motion.a
            key={idx}
            href={btn.href}
            target={btn.external ? '_blank' : '_self'}
            rel={btn.external ? 'noopener noreferrer' : ''}
            className={`px-8 py-3 rounded-lg font-semibold transition ${btn.variant === 'primary' ? 'bg-white text-primary-600 hover:bg-gray-100' : 'bg-green-500 hover:bg-green-600 text-white'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={btn.onClick}
          >
            {btn.label}
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group"
  >
    <div className="text-primary-600 text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const DoctorCard = ({ doctor }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-primary-200"
  >
    <div className="flex items-center mb-6">
      <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6 shadow-lg">
        {doctor.initials}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-primary-800 mb-2">{doctor.name}</h3>
        <p className="text-lg font-semibold text-primary-600">{doctor.qualifications}</p>
      </div>
    </div>
    <div className="space-y-3">
      {doctor.roles.map((role, idx) => (
        <p key={idx} className="text-gray-700 font-medium flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          {role}
        </p>
      ))}
      <p className="text-gray-600 mt-4 leading-relaxed">{doctor.description}</p>
    </div>
  </motion.div>
);

const ContactInfo = () => (
  <div className="bg-primary-100 p-6 rounded-lg mt-8">
    <h3 className="text-xl font-bold text-primary-800 mb-4">Contact Information</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="flex flex-col items-center">
        <FaPhone className="text-2xl text-primary-600 mb-2" />
        <p className="font-semibold">+91 94092 77144</p>
      </div>
      <div className="flex flex-col items-center">
        <FaMapMarkerAlt className="text-2xl text-primary-600 mb-2" />
        <p className="font-semibold">Central Location</p>
        <p className="text-sm text-gray-600">Ample Parking Available</p>
      </div>
      <div className="flex flex-col items-center">
        <FaClock className="text-2xl text-primary-600 mb-2" />
        <p className="font-semibold">Mon-Sat: 8AM-8PM</p>
        <p className="text-sm text-gray-600">Sun: 9AM-2PM</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to book an appointment at City Pathology Laboratory.');
    window.open(`https://wa.me/919409277144?text=${message}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>City Pathology Laboratory - Reliable Diagnostic Services</title>
        <meta name="description" content="Providing accurate, reliable diagnostic services with cutting-edge technology and expert pathologists. Book appointments online or via WhatsApp." />
        <meta name="keywords" content="pathology, diagnostic services, laboratory, blood tests, health checkup" />
      </Head>

      <main className="min-h-screen">
        <motion.section
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Welcome to <span className="text-yellow-300">City Pathology</span> Laboratory
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 leading-relaxed"
              >
                Providing accurate, reliable diagnostic services with cutting-edge technology and expert pathologists.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="/book-appointment"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-block"
                  aria-label="Book appointment online"
                >
                  Book Appointment
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2"
                  aria-label="Contact via WhatsApp"
                >
                  📱 WhatsApp
                </button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-700"
            >
              Why Choose <span className="text-primary-600">Us</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
            <ContactInfo />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-700"
            >
              Meet Our <span className="text-primary-600">Expert</span> Pathologists
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Get Started?"
          description="Book your appointment today for comprehensive diagnostic services with our expert team."
          buttons={[
            {
              href: "/book-appointment",
              label: "Book Appointment",
              variant: "primary"
            },
            {
              href: "#",
              label: "WhatsApp Us",
              variant: "secondary",
              external: true,
              onClick: handleWhatsAppClick
            }
          ]}
        />

        <section className="py-12 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600">5000+</div>
                <p className="text-gray-600">Tests Monthly</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">99.9%</div>
                <p className="text-gray-600">Accuracy Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">24/7</div>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
