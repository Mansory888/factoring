"use client"
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus, MapPin, Mail, Phone } from 'lucide-react';
import { AnimatedFAQItem } from '@/components/faq';



const faqs = [
    {
        question: 'What Is Investing?',
        answer: 'Investing is the process of allocating resources, usually money, with the expectation of generating future returns. This can include purchasing stocks, bonds, real estate, or starting a business.'
    },
];


const Contact = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Add form submission logic here
    };


    return (
        <div className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
                <section id="contact">
                    <div className="max-w-5xl mx-auto px-4">


                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",

                            }}
                        >
                            <h1 className="text-4xl text-primary font-bold mb-4">Contact</h1>
                            <p className="text-secondary">
                                Iemand aan de lijn die jouw taal spreekt? Vul het onderstaande formulier in, dan nemen we nemen zo snel mogelijk contact met je op.
                            </p>
                            <p className="text-secondary mt-2">
                                Direct contact met commercieel directeur Jaap van Aalst
                                Bel Jaap, of stuur hem een Whatsapp bericht
                            </p>
                        </motion.div>



                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 10,
                                delay: 0.4
                            }}
                        >

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Company Information */}
                                <div className="space-y-8 text-center lg:text-left">
                                    <div>
                                        <h2 className="text-2xl font-bold text-secondary mb-6">Soof Factoring</h2>
                                        <div className="space-y-4">
                                            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
                                                <MapPin className="w-6 h-6 text-primary mb-2 lg:mb-0 flex-shrink-0" />
                                                <p className="text-secondary">
                                                Schuitegatstraat 37,<br />2225 MD Katwijk
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4">
                                                <Mail className="w-6 h-6 text-primary mb-2 lg:mb-0 flex-shrink-0" />
                                                <a href="mailto:info@SOOF.nl" className="text-secondary hover:text-primary transition-colors">
                                                info@sooffactoring.nl
                                                </a>
                                            </div>
                                            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-4">
                                                <Phone className="w-6 h-6 text-primary mb-2 lg:mb-0 flex-shrink-0" />
                                                <a href="tel:07140881164" className="text-secondary hover:text-primary transition-colors">
                                                +31 06 51 950 524
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-base font-bold text-secondary mb-1">
                                                Voor- en achternaam
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"                                   
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-base font-bold text-secondary mb-1">
                                                E-mailadres
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-base font-bold text-secondary mb-1">
                                                Telefoonnummer
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="company name" className="block text-base font-bold text-secondary mb-1">
                                                Bedrijfsnaam of KvK nummer
                                            </label>
                                            <input
                                                type="text"
                                                id="company name"
                                                name="company name"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-base font-bold text-secondary mb-1">
                                                Vraag of opmerking
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-200"
                                        >
                                            Verzenden
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>


                    </div>
                </section>


                {/* <div className="overflow-x-hidden">
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <section id="faq" className="py-12">
                            <div className="max-w-3xl mx-auto px-4">
                                <div className="text-center mb-12">
                                    <h2 className="text-6xl text-secondary font-bold mb-4">FAQ</h2>
                                    <p className="text-secondary">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm">
                                    {faqs.map((item: any, index: any) => (
                                        <AnimatedFAQItem key={index} question={item.question} answer={item.answer} />
                                    ))}
                                </div>
                            </div>
                        </section>

                    </motion.div>
                </div> */}

            </div>
        </div>
    );
};

export default Contact;