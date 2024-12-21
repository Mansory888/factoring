"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 mt-auto mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex justify-center md:justify-start">
              <img 
                src="/images/logo.png" 
                alt="Company Logo" 
                className="h-10 w-10"
              />
            </div>
            <p className="text-gray-600">
              Jouw facturen meteen<br />betaald én verzekerd
            </p>
          </motion.div>

          {/* General Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Algemeen</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="/over-ons" className="text-gray-600 hover:text-gray-900 transition-colors">
                Over Ons
              </a>
              <a href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </a>
            </nav>
          </motion.div>

          {/* Pages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Pagina's</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <a href="/algemene-voorwaarden" className="text-gray-600 hover:text-gray-900 transition-colors">
                Algemene Voorwaarden
              </a>
              <a href="/privacy-beleid" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Beleid
              </a>
            </nav>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-primary"
        >
          <p className="text-gray-600 text-sm">
            © {currentYear} Soof Factoring B.V. Made by NovaGate Solutions
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;