import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

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
    // Handle form submission here
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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Ready to Start
            <span className="text-orange-500 block">Your Project?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Get in touch with our expert team to discuss your construction project. 
            We're here to turn your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-blue-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-blue-200 mb-8">
                We're here to help you with all your construction needs. 
                Contact us through any of the following methods.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-200">+92 300 1234567</p>
                    <p className="text-blue-200">+92 321 7654321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-200">info@binqasimEnterprises.com</p>
                    <p className="text-blue-200">projects@binqasimEnterprises.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-blue-200">
                      Office # 123, Main Boulevard,<br />
                      DHA Phase 2, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-blue-200">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-blue-200">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-800">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Facebook', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <button key={social} className="bg-blue-800 hover:bg-orange-500 p-2 rounded-lg transition-colors duration-200">
                      <span className="text-xs">{social[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-orange-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-800">Send Us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your project requirements, timeline, and any specific details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Response Time:</strong> We typically respond to all inquiries within 2-4 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* TODO for you: 
              1. Go to Google Maps and find your exact business location.
              2. Click "Share", then "Embed a map".
              3. Copy the HTML and paste it here, replacing this iframe.
            */}
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