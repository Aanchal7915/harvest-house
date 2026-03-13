import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Store, Users, MapPin, ThumbsUp } from 'lucide-react';

const AnimatedCounter = ({ from, to, suffixClassName = "", suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        let controls;
        if (isInView && ref.current) {
            const node = ref.current;
            // Immediate start on view for mobile responsiveness
            controls = animate(from, to, {
                duration: 1.5,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = Math.floor(value);
                }
            });
        }
        return () => {
            if (controls) controls.stop();
        };
    }, [from, to, isInView]);

    return (
        <span className="tabular-nums">
            <span ref={ref}>{from}</span>
            <span className={suffixClassName}>{suffix}</span>
        </span>
    );
};

const statsData = [
    {
        id: 1,
        title: "Fresh Products",
        value: 100,
        suffix: "+",
        icon: <Store className="w-5 h-5 text-brand-primary" />,
    },
    {
        id: 2,
        title: "Local Suppliers",
        value: 50,
        suffix: "+",
        icon: <MapPin className="w-5 h-5 text-brand-leaf" />,
    },
    
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Stats = () => {
    return (
        <section className="py-4 bg-brand-cream/50 relative z-10 w-full border-y border-gray-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {statsData.map((stat, index) => (
                        <React.Fragment key={stat.id}>
                            <motion.div 
                                variants={itemVariants}
                                className="flex items-center gap-2 sm:gap-3 group cursor-default py-2 overflow-hidden"
                            >
                                {/* Icon (More subtle) */}
                                <div className="p-1.5 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {React.cloneElement(stat.icon, { className: "w-4 h-4 text-brand-primary" })}
                                </div>
                                
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
                                    {/* Number */}
                                    <h4 className="text-lg sm:text-xl font-bold text-brand-dark tabular-nums flex items-center">
                                        <AnimatedCounter 
                                            from={0} 
                                            to={stat.value} 
                                            suffix={stat.suffix}
                                        />
                                    </h4>
                                    
                                    {/* Title */}
                                    <p className="text-[10px] sm:text-xs font-bold text-brand-leaf/80 uppercase tracking-wider">
                                        {stat.title}
                                    </p>
                                </div>
                            </motion.div>
                            
                            {/* Dot Divider */}
                            {index < statsData.length - 1 && (
                                <div className="hidden lg:block w-1 h-1 rounded-full bg-brand-wheat/30 mx-2" />
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
