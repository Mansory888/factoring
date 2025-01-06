"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

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
            className="space-y-4"
          >
            <div className="relative w-48 h-14 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                className="h-full w-full object-contain"
                fill
              />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
                <p className="text-secondary">
                Schuitegatstraat 37, 
                <br />2225 MD Katwijk
                </p>
              </div>
              <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4">
                <a
                  href="mailto:info@SOOF.nl"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  info@sooffactoring.nl
                </a>
              </div>
              <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4">
                <a
                  href="tel:07140881164"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  +31 06 51 950 524
                </a>
              </div>
            </div>
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
            <h3 className="text-lg font-semibold">Pagina&apos;s</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <a href="/veelgestelde-vragen" className="text-gray-600 hover:text-gray-900 transition-colors">
                Veelgestelde vragen
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