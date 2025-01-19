
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    return (
        <div className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <section >
                    <div className="text-center py-8 md:py-16">

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            OVER ONS
                        </motion.h1>

                        {/* Animate the subtitle */}
                        <motion.p
                            className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto text-secondary text-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            TRANSPARANTE EN BETROUWBARE FACTORINGDIENSTEN DIE UW CASHFLOW VERSTERKEN
                        </motion.p>

                        <div className="py-16">
                            <div className="space-y-20">
                                <div className="flex flex-col md:flex-row items-start md:items-center">
                                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                        <h2 className="text-3xl font-semibold text-secondary mb-2">Wie zijn wij</h2>
                                    </div>
                                    <div className="w-full md:w-2/3 text-secondary md:border-l-4 md:border-secondary leading-relaxed px-4">
                                        <p className="mb-4">
                                            Soof Factoring B.V., onderdeel van de Soof Group, staat voor pragmatische en efficiënte dienstverlening die klanten écht vooruithelpt. Met slimme automatisering maken wij werkkapitaal toegankelijk via flexibele debiteurenfactoring, zodat onze klanten hun marktaandeel kunnen vergroten en hun winstgevendheid kunnen verbeteren. Maar wat ons écht onderscheidt, is ons persoonlijke contact. Bij Soof Factoring geloven we dat menselijk maatwerk het verschil maakt.  Ons doel? Niet alleen financiële oplossingen bieden, maar ook een betrouwbare partner zijn die op een persoonlijke manier met u werkt aan groei en succes.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-start md:items-center">
                                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                        <h2 className="text-3xl font-semibold text-secondary mb-2">Hoe helpen wij u</h2>
                                    </div>
                                    <div className="w-full md:w-2/3 text-secondary leading-relaxed md:border-l-4 md:border-secondary px-4 ">
                                        <p className="mb-4">
                                            Soof Factoring biedt u de mogelijkheid om op een eenvoudige manier uw werkkapitaal te vergroten en daarmee ook direct het ondernemersrisico te verkleinen. Dit doen wij door uw factuur op te kopen - en deze direct aan u te betalen - om het uitstaande bedrag vervolgens zelf te innen bij uw opdrachtgever. Afhankelijk van de vorm van Factoring betaalt u Soof Factoring een klein percentage over het factuurbedrag en voert Soof Factoring het debiteurenbeheer. De vrijgekomen liquiditeit geeft u weer nieuwe investeringsmogelijkheden.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <motion.button
                                className="flex items-center bg-secondary text-beje rounded-full pr-1 pl-6 py-1 hover:bg-secondary transition-colors duration-200"
                                initial="initial"
                                whileHover="hover"
                                onClick={() => router.push("/contact")}
                                whileTap={{ scale: 0.95 }}
                                variants={{
                                    initial: {
                                        x: 0,
                                        scale: 1
                                    },
                                    hover: {
                                        x: 10,
                                        scale: 1.05,
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10
                                        }
                                    }
                                }}
                            >
                                <span className="text-lg font-medium mr-3">Neem nu contact op</span>
                                <div className="bg-primary rounded-full p-2.5 ">
                                    <svg
                                        className="w-4 h-4 text-beje"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 12H20M20 12L13 5M20 12L13 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </section>
            </div>



            <section className='mx-auto px-4 mt-6 overflow-x-hidden bg-primary text-beje rounded-t-3xl'>
                <div className='container mx-auto px-4 md:px-6'>
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-4">
                            {/* Image Container */}
                            <div className="w-full md:w-1/2">
                                <div className="relative">
                                    <img
                                        className='pt-16 px-16'
                                        src="/images/white.png"
                                        alt="Simon Adriaan Visscher in an office setting"
                                        width={600}
                                        height={600}
                                    />

                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="w-full md:w-1/2">

                                <p className="text-xl font-bold mb-2 text-secondary">
                                    CEO
                                </p>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ">
                                    Jaap van Aalst
                                </h1>

                                <div className="text-lg md:text-xl mb-8">
                                    <p className="mb-4">
                                        Met zijn uitgebreide kennis van debiteurenbeheer en bedrijfsfinanciering helpt hij ondernemers aan snelle en flexibele oplossingen. Als commercieel directeur is Jaap verantwoordelijk voor het aantrekken van nieuwe klanten, het onderhouden van klantrelaties en het ontwikkelen van klantgerichte strategieën. Zijn toewijding aan klanttevredenheid en inzicht in zakelijke financiering positioneren Soof Factoring als een betrouwbare partner voor bedrijven in uiteenlopende sectoren.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto px-4 overflow-x-hidden bg-secondary text-beje rounded-b-3xl">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 pt-6">
                            {/* Image Container */}
                            <div className="w-full md:w-1/2">
                                <div className="relative">
                                    <img
                                        src="/images/jap2.png"
                                        alt="Simon Adriaan Visscher in an office setting"
                                        width={600}
                                        height={600}
                                    />

                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="w-full md:w-1/2 ">
                                <p className="text-xl font-bold mb-2 text-primary">
                                    CFO
                                </p>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ">
                                    Arnold van Dijk
                                </h1>

                                <div className="text-lg md:text-xl mb-8">
                                    <p className="mb-4">
                                        Arnold van Dijk is registeraccountant (RA) met een brede achtergrond in zowel financiën als risico management. Hij heeft uitgebreide ervaring opgedaan als registeraccountant bij Deloitte en bij diverse klanten, variërend van non-profitorganisaties, middelgrote MKB-bedrijven, grote private ondernemingen tot financiële instellingen. Zijn expertise omvat interne controle, externe verslaggeving (RJ/IFRS), risicomanagement, consolidatie en jaarrekeningrecht, waarmee hij een sterke financiële basis biedt voor Soof Factoring. Daarnaast is hij vooral pragmatisch en zoekt altijd naar de meest passende oplossing in een gegeven situatie, dit heeft een grote positieve invloed op de kwaliteit van de diensten die wij aan onze klanten leveren.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>


    );
};

export default About;