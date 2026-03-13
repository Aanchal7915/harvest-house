import React from 'react';

const messages = [
    "Harvest House is Opening Soon in Bacchus Marsh — Fresh Fruits & Vegetables at Your Doorstep.",
    "Harvest House — Your Neighbourhood Fresh Produce Store. Coming Very Soon to Bacchus Marsh.",
    "Handpicked. Farm-Fresh. Local. Harvest House is Almost Here — Watch This Space.",
    "Fresh from Local Farms to Your Table — Harvest House Opening Soon in Bacchus Marsh.",
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
