import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            {/* Soft Green Orb */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-brand-leaf/10 blur-3xl"
                animate={{
                    x: [0, 100, 0, -100, 0],
                    y: [0, -50, 100, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ top: '10%', left: '10%' }}
            />
            {/* Soft Wheat Orb */}
            <motion.div
                className="absolute w-[350px] h-[350px] rounded-full bg-brand-wheat/10 blur-3xl"
                animate={{
                    x: [0, -120, 0, 120, 0],
                    y: [0, 80, -80, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ bottom: '20%', right: '10%' }}
            />
            {/* Soft Primary Green Orb */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[100px]"
                animate={{
                    x: [0, 150, -50, 0],
                    y: [0, 150, 50, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ top: '40%', left: '40%' }}
            />
        </div>
    );
};

export default BackgroundElements;
