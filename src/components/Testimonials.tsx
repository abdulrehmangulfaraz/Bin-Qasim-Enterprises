import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      position: 'Property Developer',
      company: 'Hassan Builders',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Bin Qasim Enterprises delivered our residential complex project with exceptional quality and professionalism. Their attention to detail and commitment to deadlines is remarkable.'
    },
    {
      name: 'Sarah Khan',
      position: 'Business Owner',
      company: 'Khan Enterprises',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with Bin Qasim Enterprises for our office building was a fantastic experience. They managed the entire project seamlessly and delivered beyond our expectations.'
    },
    {
      name: 'Muhammad Ali',
      position: 'Factory Owner',
      company: 'Ali Manufacturing',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The industrial facility they built for us is outstanding. The quality of construction and their project management skills are top-notch. Highly recommended!'
    },
    {
      name: 'Fatima Sheikh',
      position: 'Homeowner',
      company: 'Private Client',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Our dream home became a reality thanks to Bin Qasim Enterprises. Their team was professional, responsive, and delivered exactly what we envisioned.'
    },
    {
      name: 'Omar Malik',
      position: 'Retail Chain Owner',
      company: 'Malik Stores',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'They constructed multiple retail outlets for our chain. Each project was completed on time and within budget. Exceptional service and quality workmanship.'
    },
    {
      name: 'Aisha Rahman',
      position: 'Hotel Owner',
      company: 'Rahman Hospitality',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The hotel project they completed for us exceeded all expectations. Their expertise in commercial construction is evident in every detail of the building.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            What Our Clients
            <span className="text-orange-500 block">Say About Us</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients about their experience 
            working with Bin Qasim Enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 hover:bg-white rounded-lg p-8 transition-all duration-300 hover:shadow-xl border hover:border-orange-200 relative">
              <Quote className="text-orange-500 opacity-20 absolute top-4 right-4" size={40} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-orange-500 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Trusted by Leading Companies</h3>
            <p className="text-gray-600">We've had the privilege of working with industry leaders across Pakistan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { metric: '98%', label: 'Client Satisfaction Rate' },
              { metric: '150+', label: 'Completed Projects' },
              { metric: '24/7', label: 'Customer Support' },
              { metric: '14+', label: 'Years of Experience' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">{item.metric}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;