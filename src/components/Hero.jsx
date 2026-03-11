import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const slides = [
    {
        id: 1,
        headline: "Fresh Fruits & Vegetables Every Day",
        subtext: "Locally sourced produce for your family.",
        buttonText: "Visit Our Store",
        to: "location",
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1920&q=80",
    },
    {
        id: 2,
        headline: "Premium Grocery Essentials",
        subtext: "Everything you need in one place.",
        buttonText: "Explore Products",
        to: "products",
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1920&q=80",
    },
    {
        id: 3,
        headline: "Farm Fresh Quality",
        subtext: "Quality produce from trusted suppliers.",
        buttonText: "Shop Fresh",
        to: "products",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80",
    },
    {
        id: 4,
        headline: "Your Local Fresh Market",
        subtext: "Serving Bacchus Marsh with freshness.",
        buttonText: "Find Us",
        to: "location",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=1920&q=80",
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-brand-dark">
            <AnimatePresence initial={false}>
                <motion.div
                    key={current}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    {/* Sophisticated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`h-${current}`}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                },
                                exit: { opacity: 0, y: -30, transition: { duration: 0.4 } }
                            }}
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl flex flex-wrap justify-center tracking-tight"
                        >
                            {slides[current].headline.split(' ').map((word, idx) => (
                                <motion.span
                                    key={idx}
                                    className="inline-block mr-[0.25em] mb-2"
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                    }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`p-${current}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-xl md:text-2xl text-brand-cream/90 mb-10 drop-shadow-md max-w-2xl mx-auto font-medium"
                        >
                            {slides[current].subtext}
                        </motion.p>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`b-${current}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                             <Link
                                to={slides[current].to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="inline-block px-10 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-[0_10px_20px_rgba(95,127,46,0.3)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] cursor-pointer text-lg md:text-xl uppercase tracking-wider"
                            >
                                {slides[current].buttonText}
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-brand-primary w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
