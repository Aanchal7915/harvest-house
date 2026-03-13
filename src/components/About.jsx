import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const yParallax = useTransform(scrollYProgress, [0, 1], [-80, 80]);

    return (
        <section id="about" className="py-14 relative overflow-hidden bg-brand-cream/10 transition-all duration-500 lg:py-16">
            {/* Background Image Enhancement */}
            <div 
                className="absolute top-0 right-0 w-[40%] h-full opacity-[0.1] pointer-events-none hidden lg:block"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">

                    {/* Image Side */}
                    <motion.div
                        className="hidden md:block md:w-1/2 relative group rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/20"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        style={{ y: yParallax }}
                    >
                        <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80"
                                alt="Fresh organic produce at Harvest House"
                                className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-[10px] font-bold tracking-[0.3em] text-brand-leaf uppercase mb-3">Our Story</h2>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 leading-tight tracking-tight">
                            Harvest House <br />
                            <span className="text-brand-primary">Fruits and Vegetables</span>
                        </h3>
                        <div className="w-16 h-1 bg-brand-primary mb-8 rounded-full opacity-30"></div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                            Harvest House is a newest local grocery store in Bacchus Marsh offering fresh fruits, vegetables, and everyday grocery essentials.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                            We focus on providing high-quality produce sourced from trusted suppliers and local farms. Our mission is to bring the freshest ingredients straight to your family's table, ensuring natural taste and peak nutrition in every bite.
                        </p>
                        
                        <div className="flex items-center gap-4 text-brand-dark font-bold text-sm sm:text-base">
                            <div className="w-10 h-px bg-brand-wheat"></div>
                            <span className="opacity-80">Handpicked Freshness, Authentic Taste</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;