// Testimonials.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    { id: 1, name: 'Shehzada Waseem', position: 'Property Developer', company: 'An-Naffy Enterprises', image: '', rating: 5, text: 'Bin Qasim Enterprises delivered our residential complex project with exceptional quality and professionalism. Their attention to detail and commitment to deadlines is remarkable.' },
    { id: 2, name: 'Khliq-o-Zaman', position: 'Business Owner', company: 'KKB Pvt Ltd', image: '', rating: 5, text: 'Working with Bin Qasim for our office building was a fantastic experience. They managed the entire project seamlessly and delivered beyond our expectations.' },
    { id: 3, name: 'Maqsood Ahmad', position: 'Property Developer', company: 'Tahir Builders', image: '', rating: 5, text: 'The industrial facility they built for us is outstanding. The quality of construction and their project management skills are top-notch. Highly recommended!' },
    { id: 4, name: 'Fatima Sheikh', position: 'Homeowner', company: 'Private Client', image: '', rating: 5, text: 'Our dream home became a reality thanks to their team. They were professional, responsive, and delivered exactly what we envisioned for our family.' }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const selectedTab = testimonials[currentIndex];

    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-50 rounded-full"></div>
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                    <span className="text-orange-500 font-semibold uppercase tracking-wider">Client Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-3 mb-6">
                        Voices of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Satisfied Clients</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Our success is built on the trust and satisfaction of the clients and communities we serve.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-center">
                    <div className="lg:col-span-4">
                        <ul className="space-y-3">
                            {testimonials.map((item, index) => (
                                <li
                                    key={item.id}
                                    className="relative cursor-pointer p-4 rounded-xl transition-all duration-300"
                                    onClick={() => setCurrentIndex(index)}
                                    style={{ background: index === currentIndex ? 'rgba(255, 247, 237, 1)' : 'transparent' }}
                                >
                                    <h3 className={`font-bold text-lg transition-colors ${index === currentIndex ? 'text-orange-600' : 'text-gray-800'}`}>{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.position}, {item.company}</p>
                                    {index === currentIndex && (
                                        <motion.div className="absolute inset-0 border-2 border-orange-500 rounded-xl" layoutId="activeBox" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="lg:col-span-8 min-h-[350px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                                className="w-full bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row items-center gap-8"
                            >
                                <motion.img
                                    key={`img-${selectedTab.id}`}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                                    src={selectedTab.image}
                                    alt={selectedTab.name}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-200 shadow-lg flex-shrink-0"
                                />
                                <div className="relative text-center md:text-left">
                                    <Quote className="absolute -top-8 -left-4 text-orange-500 opacity-10" size={60} />
                                    <div className="flex mb-3 justify-center md:justify-start">
                                        {[...Array(selectedTab.rating)].map((_, i) => (
                                            <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-md md:text-lg italic mb-6">"{selectedTab.text}"</p>
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-800">{selectedTab.name}</h4>
                                        <p className="text-gray-500 text-sm">{selectedTab.position}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;