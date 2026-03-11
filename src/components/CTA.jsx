import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';

const CTA = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section className="relative py-16 overflow-hidden bg-white border-t border-gray-100">
            {/* Background Image Enhancement */}
            <div 
                className="absolute inset-0 opacity-10 grayscale z-0 pointer-events-none"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />



            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-4 drop-shadow-sm">
                        Handpicked Freshness, Authentic Taste
                    </h2>
                    <p className="text-xl md:text-2xl text-brand-primary mb-4 font-medium tracking-tight">
                        "Delivering the finest local produce directly to your kitchen."
                    </p>
                    <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto font-normal">
                        Experience the premium quality and exceptional service of Harvest House. Proudly serving the Bacchus Marsh community.
                    </p>

                    <Link to="location" smooth={true} duration={500} offset={-80}>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-brand-primary text-white text-lg font-bold rounded-2xl shadow-xl hover:bg-brand-leaf transition-all duration-300 transform"
                        >
                            Visit Harvest House Today
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
