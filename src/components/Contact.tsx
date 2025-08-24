// Contact.tsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Linkedin, Twitter, Instagram, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message. We will get back to you soon!');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider flex items-center justify-center">
            <div className="w-12 h-0.5 bg-orange-500 mr-2"></div>
            Contact Us
            <div className="w-12 h-0.5 bg-orange-500 ml-2"></div>
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 mb-6">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Together</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out to our expert team today and turn your vision into reality.
            We'll respond quickly and guide you through the process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white rounded-2xl shadow-2xl p-8 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <div className="absolute -right-4 -top-4 w-28 h-28 bg-orange-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -left-4 -bottom-4 w-28 h-28 bg-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Building className="text-orange-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                </div>

                <p className="text-blue-200/80 mb-8 text-sm leading-relaxed">
                  We're always ready to discuss your construction needs.
                  Choose the best way to connect with us.
                </p>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-orange-400" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Phone</h4>
                      <p className="text-blue-200/90">+92 321 4853051</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-orange-400" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Email</h4>
                      <p className="text-blue-200/90">binqasim.enterprises.pk@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-orange-400" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Address</h4>
                      <p className="text-blue-200/90">
                        House # 998, 1st floor, Allah Wala Town<br />
                        near Sufaid masjid, Korongi Crossing,<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-orange-400" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Business Hours</h4>
                      <p className="text-blue-200/90">Mon - Sat: 8:00 AM - 6:00 PM</p>
                      <p className="text-blue-200/90">Sunday: Emergency Only</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-6 border-t border-blue-700">
                  <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-blue-800/60 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      >
                        <social.icon size={18} className="text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <MessageSquare className="text-orange-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Send Us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="industrial">Industrial Projects</option>
                      <option value="renovation">Renovation Services</option>
                      <option value="consulting">Construction Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center group shadow-md hover:shadow-xl disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-orange-50 rounded-xl text-sm text-orange-700 text-center border border-orange-100">
                <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours.
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              src="https://maps.app.goo.gl/xmeAjTsz18Dhuhm46"
              className="w-full h-96 border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;