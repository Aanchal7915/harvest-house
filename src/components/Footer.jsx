import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo_final.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Footer = () => {
    return (
        <footer id="contact" className="bg-brand-dark pt-10 pb-4 text-brand-cream border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            {/* Variable 'logo' is now used here */}
                            <img 
                                src={logo} 
                                alt="Harvest House Logo" 
                                className="h-24 w-24 rounded-full shadow-lg ring-2 ring-white/10 object-cover" 
                            />
                            <h3 className="text-xl font-bold text-white">
                                Harvest<span className="text-brand-primary">House</span>
                            </h3>
                        </div>
                        <p className="text-sm text-brand-cream/60 mb-6 leading-relaxed max-w-xs">
                            Your trusted local grocery store offering fresh fruits, vegetables, and everyday essentials in Bacchus Marsh.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-cream/40 hover:text-brand-primary hover:bg-white/10 transition-all duration-300">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-cream/40 hover:text-brand-primary hover:bg-white/10 transition-all duration-300">
                                <Instagram size={16} />
                            </a>
                            {/* Variable 'Twitter' is now used here */}
                            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-cream/40 hover:text-brand-primary hover:bg-white/10 transition-all duration-300">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 opacity-80">Quick Links</h4>
                        <ul className="grid grid-cols-1 gap-3 text-sm">
                            <li><Link to="home" smooth={true} className="text-brand-cream/60 hover:text-white cursor-pointer transition-colors flex items-center gap-2 px-1">Home</Link></li>
                            <li><Link to="about" smooth={true} className="text-brand-cream/60 hover:text-white cursor-pointer transition-colors flex items-center gap-2 px-1">About Us</Link></li>
                            <li><Link to="products" smooth={true} className="text-brand-cream/60 hover:text-white cursor-pointer transition-colors flex items-center gap-2 px-1">Store Products</Link></li>
                            <li><Link to="testimonials" smooth={true} className="text-brand-cream/60 hover:text-white cursor-pointer transition-colors flex items-center gap-2 px-1">Customer Reviews</Link></li>
                        </ul>
                    </motion.div>

                    {/* Categories */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 opacity-80">Categories</h4>
                        <ul className="grid grid-cols-1 gap-3 text-sm text-brand-cream/60">
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 px-1">Fresh Fruits & Veg</li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 px-1">Grocery Essentials</li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 px-1">Organic Selection</li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 opacity-80">Contact</h4>
                        <ul className="space-y-3 text-xs text-brand-cream/50">
                            <li className="flex items-start gap-3">
                                <span className="text-white/40 font-bold uppercase tracking-tighter w-8">Loc:</span>
                                <span>The Village Bacchus Marsh, VIC 3340</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-white/40 font-bold uppercase tracking-tighter w-8">Tel:</span>
                                <span>+61 449 891 019</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-white/40 font-bold uppercase tracking-tighter w-8">Mail:</span>
                                <span className="truncate">harvesthouseaustralia@gmail.com</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-white/5 pt-3 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-tighter text-brand-cream/20"
                >
                    <p>&copy; {new Date().getFullYear()} Harvest House. Handpicked Freshness, Authentic Taste.</p>
                    <div className="flex space-x-6 mt-2 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;