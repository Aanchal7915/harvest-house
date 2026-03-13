import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-14 bg-white transition-all duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[10px] font-bold tracking-[0.3em] text-brand-leaf uppercase mb-2">Find Us</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight">Visit Our Store</h3>
                        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full opacity-30"></div>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row bg-brand-cream/40 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-brand-wheat/10 overflow-visible">

                    {/* Map Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-3/5 h-[400px] lg:h-auto order-1 lg:order-none"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.402280797825!2d144.4379!3d-37.6749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQwJzI5LjYiUyAxNDTCsDI2JzE2LjQiRQ!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Harvest House Location"
                        ></iframe>
                    </motion.div>

                    {/* Details Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center order-2 lg:order-none"
                    >
                        <h4 className="text-2xl font-bold text-brand-dark mb-8">Store Information</h4>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-brand-primary mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h5 className="font-semibold text-brand-dark mb-1">Address</h5>
                                    <p className="text-gray-600 leading-relaxed">
                                        Shop 56<br />
                                        The Village Bacchus Marsh<br />
                                        160–194 Main Street<br />
                                        Bacchus Marsh VIC 3340<br />
                                        Australia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-brand-wheat mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h5 className="font-semibold text-brand-dark mb-1">Coming Soon </h5>
                                    <p className="text-gray-600">Mon-Fri: 7am - 7pm</p>
                                    <p className="text-gray-600">Sat-Sun: 7am - 5pm</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-brand-leaf mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h5 className="font-semibold text-brand-dark mb-1">Phone</h5>
                                    <p className="text-gray-600">+61 *** *** ***</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-brand-primary mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h5 className="font-semibold text-brand-dark mb-1">Email</h5>
                                    <p className="text-gray-600">contactus@harvesthouseaustralia.com.au</p>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="https://www.google.com/maps/dir/?api=1&destination=Shop+56+The+Village+Bacchus+Marsh+160–194+Main+Street+Bacchus+Marsh+VIC+3340+Australia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-10 px-6 py-3 bg-brand-primary text-white font-semibold flex items-center justify-center rounded-xl hover:bg-brand-dark transition-colors duration-300 w-full sm:w-auto"
                        >
                            Get Directions
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Location;
