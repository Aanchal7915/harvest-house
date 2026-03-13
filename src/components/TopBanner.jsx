import React from 'react';

const TopBanner = () => {
    return (
        <div data-banner className="fixed top-0 left-0 w-full bg-brand-primary z-[60] py-2 select-none">
            <p className="text-center text-white text-sm sm:text-sm font-semibold tracking-wide">
                Harvest House is Opening Soon. Stay Tuned!
            </p>
        </div>
    );
};

export default TopBanner;
