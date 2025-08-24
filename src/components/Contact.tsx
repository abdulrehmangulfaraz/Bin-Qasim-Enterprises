import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
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
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-3">
            Let’s Build <span className="text-orange-500">Together</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out to our expert team today and turn your vision into reality.
            We’ll respond quickly and guide you through the process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white rounded-3xl shadow-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <h3 className="text-2xl font-bold mb-6 border-b border-blue-700 pb-2 text-white">
                Get in Touch
              </h3>

              <p className="text-blue-200/80 mb-8 text-sm leading-relaxed">
                We’re always ready to discuss your construction needs.
                Choose the best way to connect with us.
              </p>

              <div className="space-y-6 text-sm relative z-10">
                <div className="flex items-start space-x-4">
                  <Phone className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Phone</h4>
                    <p className="text-blue-200/90">+92 300 1234567</p>
                    <p className="text-blue-200/90">+92 321 7654321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email</h4>
                    <p className="text-blue-200/90">info@binqasimEnterprises.com</p>
                    <p className="text-blue-200/90">projects@binqasimEnterprises.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Address</h4>
                    <p className="text-blue-200/90">
                      Office # 123, Main Boulevard,<br />
                      DHA Phase 2, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Business Hours</h4>
                    <p className="text-blue-200/90">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-blue-200/90">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-6 border-t border-blue-700 relative z-10">
                <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="bg-blue-800/60 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <social.icon size={18} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-orange-500 mr-3" size={28} />
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
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center group shadow-md hover:shadow-xl"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-100 rounded-xl text-sm text-gray-600 text-center">
                <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours.
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.0028247076!2d66.8252174828624!3d25.19323381623395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f90157042d3%3A0x93d609e8bec9a880!2sDHA%20Phase%202%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1662557933932!5m2!1sen!2s"
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
