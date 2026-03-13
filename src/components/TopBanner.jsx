import React from 'react';

const messages = [
    "Harvest House is Coming Soon to Bacchus Marsh — Fresh Fruits & Vegetables at Your Doorstep!",
    "Stay Tuned — We're Almost Ready to Serve You the Freshest Local Produce!",
    "Opening Very Soon — Handpicked Freshness, Authentic Taste. Watch This Space!",
    "Fresh from Local Farms — Harvest House Opens Soon in Bacchus Marsh!",
];

const TopBanner = () => {
    const repeated = [...messages, ...messages]; // duplicate for seamless loop

    return (
        <div data-banner className="fixed top-0 left-0 w-full overflow-hidden bg-brand-primary z-[60] py-2 select-none">
            <div className="marquee-track flex whitespace-nowrap">
                {repeated.map((msg, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center mx-3 text-white text-xs sm:text-sm font-semibold tracking-wide shrink-0"
                    >
                        {msg}
                        <span className="mx-3 text-white/40">•</span>
                    </span>
                ))}
            </div>

            <style>{`
                .marquee-track {
                    animation: marquee-scroll 8s linear infinite;
                    will-change: transform;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @media (min-width: 768px) {
                    .marquee-track {
                        animation-duration: 15s;
                    }
                }
            `}</style>
        </div>
    );
};

export default TopBanner;
