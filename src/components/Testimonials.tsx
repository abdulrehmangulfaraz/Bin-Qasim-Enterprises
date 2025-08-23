import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      position: 'Property Developer',
      company: 'Hassan Builders',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Bin Qasim Enterprises delivered our residential complex project with exceptional quality and professionalism. Their attention to detail and commitment to deadlines is remarkable.'
    },
    {
      id: 2,
      name: 'Sarah Khan',
      position: 'Business Owner',
      company: 'Khan Enterprises',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Working with Bin Qasim for our office building was a fantastic experience. They managed the entire project seamlessly and delivered beyond our expectations.'
    },
    {
      id: 3,
      name: 'Muhammad Ali',
      position: 'Factory Owner',
      company: 'Ali Manufacturing',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'The industrial facility they built for us is outstanding. The quality of construction and their project management skills are top-notch. Highly recommended!'
    },
    {
        id: 4,
        name: 'Fatima Sheikh',
        position: 'Homeowner',
        company: 'Private Client',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
        rating: 5,
        text: 'Our dream home became a reality thanks to their team. They were professional, responsive, and delivered exactly what we envisioned for our family.'
    }
];

const Testimonials = () => {
    const [selectedTab, setSelectedTab] = useState(testimonials[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedTab(prev => {
                const nextIndex = (testimonials.findIndex(t => t.id === prev.id) + 1) % testimonials.length;
                return testimonials[nextIndex];
            });
        }, 5000); // Auto-cycle every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
                    <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
                        Voices of Our Satisfied Clients
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Our success is measured by the satisfaction of those we serve.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Left side: Client list navigation */}
                    <div className="flex flex-col justify-center">
                        <ul className="space-y-2">
                            {testimonials.map((item) => (
                                <li
                                    key={item.name}
                                    className={`relative cursor-pointer p-4 rounded-lg transition-colors duration-300 ${
                                        item === selectedTab ? 'bg-orange-50 text-orange-600' : 'hover:bg-gray-50'
                                    }`}
                                    onClick={() => setSelectedTab(item)}
                                >
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.company}</p>
                                    {item === selectedTab ? (
                                        <motion.div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-r-full" layoutId="underline" />
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right side: Selected testimonial display */}
                    <div className="lg:col-span-2 min-h-[400px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab ? selectedTab.id : "empty"}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full h-full bg-gray-50 rounded-xl shadow-lg p-8 flex items-center"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        <img
                                            src={selectedTab.image}
                                            alt={selectedTab.name}
                                            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
                                        />
                                    </motion.div>
                                    <div className="relative">
                                        {/* CORRECTED LINE: Moved quote to top-right */}
                                        <Quote className="absolute -top-6 -right-4 text-orange-500 opacity-10" size={60} />
                                        <div className="flex mb-3">
                                            {[...Array(selectedTab.rating)].map((_, i) => (
                                                <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-lg italic mb-6">
                                            {selectedTab.text}
                                        </p>
                                        <div>
                                            <h4 className="font-bold text-xl text-gray-800">{selectedTab.name}</h4>
                                            <p className="text-gray-500">{selectedTab.position}</p>
                                        </div>
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