import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Carrot, ShoppingBasket, Award } from 'lucide-react';

const categories = [
    {
        id: 1,
        title: "Fresh Fruits",
        description: "A wide selection of seasonal fruits sourced from trusted farms ensuring freshness and natural taste.",
        icon: <Apple className="w-10 h-10 text-white" />,
        color: "bg-red-500/20",
        bgImage: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Fresh Vegetables",
        description: "Daily farm-fresh vegetables carefully selected for quality and nutrition, bringing health to your table.",
        icon: <Carrot className="w-10 h-10 text-white" />,
        color: "bg-green-500/20",
        bgImage: "https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Grocery Essentials",
        description: "All everyday grocery items available conveniently in one place, from pantry staples to household needs.",
        icon: <ShoppingBasket className="w-10 h-10 text-white" />,
        color: "bg-amber-500/20",
        bgImage: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Quality Produce",
        description: "We ensure strict quality checks so customers always receive the freshest and highest quality products.",
        icon: <Award className="w-10 h-10 text-white" />,
        color: "bg-blue-500/20",
        bgImage: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80"
    }
];

const Products = () => {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(0);
    const [visibleCount, setVisibleCount] = React.useState(3);

    // Full responsive logic to handle screen resizing
    const updateVisibleCount = React.useCallback(() => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width >= 1024) setVisibleCount(3);
            else if (width >= 640) setVisibleCount(2);
            else setVisibleCount(1);
        }
    }, []);

    React.useEffect(() => {
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, [updateVisibleCount]);

    const nextSlide = React.useCallback(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % categories.length);
    }, []);

    const prevSlide = React.useCallback(() => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + categories.length) % categories.length);
    }, []);

    React.useEffect(() => {
        const timer = setInterval(nextSlide, 2000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const slideVariants = {
        enter: (d) => ({
            x: d > 0 ? 150 : -150,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 }
            }
        },
        exit: (d) => ({
            zIndex: 0,
            x: d < 0 ? 150 : -150,
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.6 }
        })
    };

    return (
        <section id="products" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[10px] font-bold tracking-[0.4em] text-green-600 uppercase mb-2">Our Offerings</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">What We Provide</h3>
                        <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full opacity-40"></div>
                    </motion.div>
                </div>

                {/* 2x2 Layout Simulation - We use your slider logic but style it for 2 items per row on large screens */}
                <div className="relative group max-w-6xl mx-auto">
                    <div className="flex gap-6 lg:gap-8 justify-center min-h-[450px]">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            {[0, 1, 2].slice(0, visibleCount).map((offset) => {
                                const currentIndex = (index + offset) % categories.length;
                                const category = categories[currentIndex];
                                
                                if (!category) return null;

                                return (
                                    <motion.div
                                        key={`${category.id}-${offset}`}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        layout
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="flex-1 min-w-0 max-w-[400px] rounded-[3rem] shadow-2xl transition-all duration-500 flex flex-col items-center text-center group/card cursor-pointer relative overflow-hidden bg-black"
                                    >
                                        {/* Background Image: Now Clear at 100% Opacity */}
                                        <div 
                                            className="absolute inset-0 opacity-100 group-hover/card:scale-110 transition-all duration-1000 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${category.bgImage})` }}
                                        />
                                        
                                        {/* Dark Bottom Scrim (The Fix for the "Tint") */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-0 transition-opacity duration-500" />
                                        
                                        {/* Content container aligned to bottom */}
                                        <div className="relative z-10 mt-auto p-8 w-full flex flex-col items-center">
                                            {/* Icon Bubble */}
                                            <div className={`mb-6 p-4 rounded-3xl shadow-lg backdrop-blur-md transition-all duration-500 group-hover/card:rotate-6 ${category.color}`}>
                                                {category.icon}
                                            </div>

                                            <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                                {category.title}
                                            </h4>

                                            <p className="text-gray-200 leading-relaxed text-sm antialiased line-clamp-2 px-2 mb-8">
                                                {category.description}
                                            </p>
                                            
                                            {/* Hover indicator line */}
                                            <div className="w-full pt-4 border-t border-white/20 flex justify-center items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                                <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em] animate-pulse">View Details</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-slate-900 hover:bg-green-600 hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 z-20"
                    >
                        ←
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-12 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-slate-900 hover:bg-green-600 hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 z-20"
                    >
                        →
                    </button>
                </div>

                {/* Progress Indicators (Dots) */}
                <div className="flex justify-center gap-3 mt-12">
                    {categories.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > index ? 1 : -1);
                                setIndex(i);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                i === index ? 'bg-green-600 w-10' : 'bg-gray-200 w-3 hover:bg-gray-300'
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Products;