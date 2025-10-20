'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const whatsappMessage = `Hello City Pathology Laboratory!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919409277144?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="section-header">
          <h1 className="section-title">Contact City Pathology Laboratory</h1>
          <p className="section-subtitle">
            Get in touch with us for appointments, inquiries, or any questions about our diagnostic services.
            We're here to help you with professional and reliable pathology services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Card */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">📞</span>
                Contact Information
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="icon-wrapper text-lg">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    2nd Floor Dwarkesh Chambers Near Bus Stand Halol
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="icon-wrapper text-lg">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone Number</h3>
                  <a 
                    href="tel:+919409277144" 
                    className="text-blue-600 hover:text-blue-800 font-medium transition"
                  >
                    +91-94092 77144
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="icon-wrapper icon-gold text-lg">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Address</h3>
                  <a 
                    href="mailto:citypathologylab@gmail.com" 
                    className="text-blue-600 hover:text-blue-800 font-medium transition break-all"
                  >
                    citypathologylab@gmail.com
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3">
                <div className="icon-wrapper text-lg">
                  🕒
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Operating Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 8:00 AM - 8:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/919409277144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp w-full"
                  >
                    💬 Chat on WhatsApp
                  </a>
                  <a 
                    href="https://calendly.com/citypathologylab-svg/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full"
                  >
                    📅 Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <div className="card-header">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">📝</span>
                Send Us a Message
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn btn-primary w-full py-3 text-lg"
              >
                Send Message via WhatsApp
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Your message will be sent via WhatsApp for faster response
              </p>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="card mb-8">
          <div className="card-header">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">🗺️</span>
              Find Us on Map
            </h2>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0984475793746!2d73.47089831541495!3d22.30685394781649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7c8f5a5a5a5%3A0x5a5a5a5a5a5a5a5!2sHalol%2C%20Gujarat%20389350!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="City Pathology Laboratory Location"
            ></iframe>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-3">
              Visit us at 2nd Floor Dwarkesh Chambers Near Bus Stand Halol for all your diagnostic needs.
            </p>
            <a 
              href="https://maps.google.com/?q=2nd+Floor+Dwarkesh+Chambers+Near+Bus+Stand+Halol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold inline-flex items-center gap-2"
            >
              🧭 Get Directions
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="icon-wrapper mx-auto">
              🚗
            </div>
            <h3 className="text-lg font-bold mb-2">Easy Parking</h3>
            <p className="text-gray-600">Ample parking space available for your convenience</p>
          </div>
          
          <div className="card text-center">
            <div className="icon-wrapper icon-gold mx-auto">
              ♿
            </div>
            <h3 className="text-lg font-bold mb-2">Accessible</h3>
            <p className="text-gray-600">Wheelchair accessible facility for all patients</p>
          </div>
          
          <div className="card text-center">
            <div className="icon-wrapper mx-auto">
              🕒
            </div>
            <h3 className="text-lg font-bold mb-2">Extended Hours</h3>
            <p className="text-gray-600">Open 12 hours daily, Monday through Saturday</p>
          </div>
        </div>
      </div>
    </div>
  );
}
