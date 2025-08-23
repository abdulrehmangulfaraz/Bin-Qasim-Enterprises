import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      position: 'Property Developer',
      company: 'Hassan Builders',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Bin Qasim Enterprises delivered our residential complex project with exceptional quality and professionalism. Their attention to detail and commitment to deadlines is remarkable.'
    },
    {
      name: 'Sarah Khan',
      position: 'Business Owner',
      company: 'Khan Enterprises',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Working with Bin Qasim for our office building was a fantastic experience. They managed the entire project seamlessly and delivered beyond our expectations.'
    },
    {
      name: 'Muhammad Ali',
      position: 'Factory Owner',
      company: 'Ali Manufacturing',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'The industrial facility they built for us is outstanding. The quality of construction and their project management skills are top-notch. Highly recommended!'
    },
    {
      name: 'Fatima Sheikh',
      position: 'Homeowner',
      company: 'Private Client',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Our dream home became a reality thanks to their team. They were professional, responsive, and delivered exactly what we envisioned for our family.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Trusted By The Best
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the words of our valued clients.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
            <Swiper
                modules={[EffectCreative, Navigation, Pagination, Autoplay]}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: ['-120%', 0, -500],
                    },
                    next: {
                      shadow: true,
                      translate: ['120%', 0, -500],
                    },
                }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="testimonial-swiper"
            >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative h-64 md:h-auto">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <Quote className="text-orange-500 mb-4" size={40} />
                            <p className="text-gray-600 text-lg italic mb-6">
                                {testimonial.text}
                            </p>
                            <div className="flex items-center mb-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                ))}
                            </div>
                             <div>
                                <h4 className="font-bold text-xl text-gray-800">{testimonial.name}</h4>
                                <p className="text-gray-500">{testimonial.position}, <span className="font-semibold text-orange-500">{testimonial.company}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            {/* Custom Navigation */}
            <div className="flex items-center justify-center space-x-12 mt-8">
                <div className="swiper-button-prev static w-11 h-11"></div>
                <div className="swiper-pagination static w-auto"></div>
                <div className="swiper-button-next static w-11 h-11"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;