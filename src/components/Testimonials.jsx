import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Rahul Sharma",
        image: "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?auto=format&fit=crop&w=150&q=80",
        text: "Very fresh vegetables and fruits. Quality is always excellent. I've been a regular for months and never disappointed.",
        role: "Regular Customer"
    },
    {
        id: 2,
        name: "Priya Patel",
        image: "https://plus.unsplash.com/premium_photo-1682092039530-584ae1d9da7f?auto=format&fit=crop&w=150&q=80",
        text: "Best place to buy fresh produce. Everything feels farm fresh and the variety is impressive for a local store.",
        role: "Weekly Shopper"
    },
    {
        id: 3,
        name: "Amit Verma",
        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=150&q=80",
        text: "Affordable prices and great quality groceries. The staff is very helpful and the organic section is top-notch.",
        role: "Home Cheif"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section id="testimonials" className="py-14 bg-brand-cream/20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-leaf uppercase mb-2">Testimonials</h2>
                        <h3 className="text-3xl font-bold text-brand-dark">What Our Customers Say</h3>
                    </motion.div>
                </div>

                <div className="relative group max-w-2xl mx-auto">
                    <div className="overflow-hidden bg-white p-6 md:p-10 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100/50 min-h-[280px] flex flex-col items-center justify-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="flex flex-col items-center"
                            >
                                {/* Circular Profile Image */}
                                <div className="w-16 h-16 mb-5 relative group/img">
                                    <div className="absolute inset-0 bg-brand-primary rounded-full blur-md opacity-10 transform scale-125 transition-all duration-500 group-hover/img:opacity-30"></div>
                                    <img 
                                        src={reviews[current].image} 
                                        alt={reviews[current].name}
                                        className="w-full h-full object-cover rounded-full border-2 border-white shadow-md relative z-10 transition-transform duration-500 group-hover/img:scale-105"
                                    />
                                </div>

                                {/* Stars */}
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-brand-wheat fill-current" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-base md:text-lg text-gray-600 italic leading-relaxed mb-6 max-w-xl px-4 line-clamp-3 md:line-clamp-none font-medium">
                                    "{reviews[current].text}"
                                </p>

                                {/* Identity */}
                                <div>
                                    <h4 className="font-bold text-brand-dark text-lg">{reviews[current].name}</h4>
                                    <span className="text-sm text-brand-leaf font-medium uppercase tracking-widest">{reviews[current].role}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg text-brand-dark hover:bg-brand-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden sm:flex"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg text-brand-dark hover:bg-brand-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden sm:flex"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-8 space-x-3">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`transition-all duration-300 rounded-full h-2 ${
                                index === current ? 'bg-brand-primary w-8' : 'bg-gray-300 w-2 hover:bg-brand-leaf'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
