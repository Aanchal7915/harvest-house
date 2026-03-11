import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_final.png';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Products', to: 'products' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Location', to: 'location' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-brand-cream/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3 border-b border-white/20'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center">
                        <Link to="home" smooth={true} duration={500} className="flex items-center gap-1.5 md:gap-2">
                            <img src={logo} alt="Harvest House Logo" className="h-[50px] sm:h-[70px] w-auto drop-shadow-sm hover:scale-105 transition-transform duration-300 rounded-full" />
                            <span className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
                                Harvest<span className="text-brand-primary">House</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className={`px-3 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 ease-in-out relative group ${isScrolled ? 'text-brand-dark hover:bg-brand-primary hover:text-white' : 'text-white hover:bg-white/20'}`}
                            >
                                {link.name}
                                <span className={`absolute left-1/2 bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-1/2 -translate-x-1/2 ${isScrolled ? 'bg-white' : 'bg-brand-primary'}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none transition-colors duration-300 ${isScrolled || isOpen ? 'text-brand-dark' : 'text-white'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute w-full bg-brand-cream shadow-lg transition-all duration-300 ${isOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-brand-dark hover:text-brand-primary hover:bg-brand-wheat/20 rounded-md font-medium cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
