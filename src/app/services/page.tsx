"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import PhoneContactSection from '@/components/phoneContact';
import { Toaster, toast } from "react-hot-toast";

const steps = [
    {
        number: 1,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text"><path d="M15 12h-5" /><path d="M15 8h-5" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" /></svg>
        ),
        title: "Je maakt de factuur voor jouw klant en stuurt ons een kopie."
    },
    {
        number: 2,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Binnen 24 uur ontvang je het factuurbedrag op je rekening."
    },
    {
        number: 3,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
        ),
        title: "SOOF neemt het debiteurenbeheer over."
    },
    {
        number: 4,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
        ),
        title: "Jouw klant betaalt de factuur aan SOOF."
    }
];

const products = [
    {
        type: "Traditionele Factoring",
        HoogteUitbetaling: "90% wordt direct uitbetaald. Het restant als de klant betaalt.",
        FactorFee: "v.a. 1.5%",
        AchterafBerekendeRente: false,
        PastGoedBij: "Past in feite bij ieder bedrijf",
        VolledigOfPartieel: "Per factuur, per debiteur, volledige debiteurenportfeuille",
        Kredietverzekering: "Alle facturen zijn voor 80% verzekerd tegen wanbetaling en faillissement.",
        Debiteurenbeheer: "Volledig inbegrepen",
        Servicegebied: "Factoring mogelijk in heel Europa",
        MinimaleJaarlijkseOmzet: "500.000",
        Contactpersoon: "Vast"
    },
    {
        type: "MKB Factoring",
        HoogteUitbetaling: "100% wordt direct uitbetaald. De factor fee wordt direct verrekend.",
        FactorFee: "v.a. 1.3%",
        AchterafBerekendeRente: true,
        PastGoedBij: "Veel gekozen door het klein MKB",
        VolledigOfPartieel: "Per factuur, per debiteur, volledige debiteurenportfeuille",
        Kredietverzekering: "Alle facturen zijn voor 80% verzekerd tegen wanbetaling en faillissement.",
        Debiteurenbeheer: "Volledig inbegrepen",
        Servicegebied: "Factoring mogelijk in Nederland",
        MinimaleJaarlijkseOmzet: "2.500.000",
        Contactpersoon: "Vast"
    },
    {
        type: "American Factoring",
        HoogteUitbetaling: "100% wordt direct uitbetaald. De factor fee wordt direct verrekend.",
        FactorFee: "v.a. 3.9%",
        AchterafBerekendeRente: false,  
        PastGoedBij: "Veel gekozen door het klein MKB en ZZP",
        VolledigOfPartieel: "Per factuur, per debiteur, volledige debiteurenportfeuille",
        Kredietverzekering: "Alle facturen zijn voor 80% verzekerd tegen wanbetaling en faillissement.",
        Debiteurenbeheer: "Volledig inbegrepen",
        Servicegebied: "Factoring mogelijk in Nederland",
        MinimaleJaarlijkseOmzet: "100.000",
        Contactpersoon: "Vast"
    }
];

const factoringTypes = [
    {
        id: 'traditional',
        title: 'Traditionele Factoring',
        description: 'Bij Traditionele Factoring wordt een groot percentage van de factuur direct door de factoraar betaald. Doorgaans varieert dat van 80% tot 90%. De restwaarde van de factuur wordt betaald zodra de klant dat ook heeft gedaan. Hoe langer dat duurt, hoe hoger het percentage is dat de Factoraar rekent. Bij Traditionele Factoring betaalt SOOF in één keer tot 95% uit. Ons vergoedings-percentage behoort tot de scherpste in de markt. Bovendien het debiteurenbeheer uit handen. Dat scheelt je tijd en geld. ',
        subtitle: 'Samengevat ziet traditionele factoring er bij SOOF als volgt uit:',
        advantages: [
            "Na het sluiten van de overeenkomst betalen wij uiterlijk binnen 2 werkdagen uw uitgaande facturen.",
            "De uitbetaling bedraagt 90% van de factuurwaarde verminderd met de overeengekomen factorfee.",
            "De resterende 10% ontvangt u, zodra de debiteur de factuur aan ons heeft voldaan.",
            "U draagt uw volledige debiteurenportefeuille aan ons over."
        ],

    },
    {
        id: 'american',
        title: 'American Style Factoring',
        description: 'American Style Factoring wordt gezien als de meest flexibele vorm van Factoring, vooral geschikt voor MKBers en ZZPers.',
        subtitle: 'Samengevat ziet American Style Factoring er bij SOOF als volgt uit:',
        advantages: [
            "Na het sluiten van de overeenkomst betalen wij uiterlijk binnen 2 werkdagen uw uitgaande facturen.",
            "De uitbetaling bedraagt 100% van de factuurwaarde verminderd met de overeengekomen factorfee, deze factorfee ligt wel veel hoger dan bij traditionele factoring.",
            "U maakt zelf een selectie welke debiteuren en welke facturen u wilt factoren."
        ],
    },
    {
        id: 'mkb',
        title: 'MKB Factoring',
        description: 'MKB Factoring lijkt op American Style Factoring, maar werkt anders qua rentepercentages en uitbetaling.',
        subtitle: 'Samengevat ziet MKB Factoring er bij SOOF als volgt uit:',
        advantages: [
            "Na het sluiten van de overeenkomst betalen wij uiterlijk binnen 2 werkdagen uw uitgaande facturen.",
            "De uitbetaling bedraagt 100% van de factuurwaarde verminderd met de overeengekomen factorfee.",
            "Zodra de debiteur aan ons betaald heeft, ontvangt u een renteafrekening, deze dient u achteraf aan ons te voldoen.",
            "MKB Factoring is alleen mogelijk voor bedrijven met een jaaromzet van minimaal 2.500.000 EUR."
        ],
    }
];


const Services = () => {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        traditional: false,
        american: false,
        mkb: false,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ phoneNumber }),
            });
      
            const result = await response.json();
            if (result.success) {
              toast.success('Email sent successfully!');
            } else {
              toast.error('Failed to send email.');
            }
          } catch (error) {
            toast.error('Error sending email.');
          }
    };

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };



    return (
        <div className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
                <div className="text-center my-12 flex flex-col md:flex-row justify-between items-start">
                    <div className="flex flex-col items-center md:items-start w-full px-4 md:px-0 md:w-2/3">
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6 text-center md:text-left"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Welke vorm van Factoring <br className="hidden md:block" /> past bij jouw bedrijf?
                        </motion.h1>
                        <motion.p
                            className="text-sm md:text-base lg:text-lg max-w-2xl md:max-w-4xl text-center md:text-left text-secondary mt-6 md:mt-12"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            Factoring is een flexibele manier om werkkapitaal (liquiditeit) te vergroten, waarbij de financiering op een natuurlijke wijze meegroeit met jouw onderneming. Daarnaast zijn je debiteuren met Factoring via SOOF verzekerd voor wanbetaling en voeren wij professioneel debiteurenbeheer uit.
                        </motion.p>
                    </div>
                    <div className="bg-white mt-12 md:mt-0 w-full md:w-1/3 md:ml-6">
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-xl font-semibold text-secondary mb-3">
                                Maak een afspraak
                            </h2>
                            <p className="mb-4 text-secondary">
                                We komen graag bij je langs voor een persoonlijke toelichting. Laat je telefoonnummer achter en we plannen samen een afspraak.
                            </p>
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <input
                                    type="tel"
                                    placeholder="Telefoonnummer"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-primary text-white text-sm md:text-base px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                                >
                                    Bel mij terug
                                </button>
                            </form>
                        </motion.h1>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-secondary mb-4">
                        Laat je adviseren
                    </h2>
                    <p className="text-secondary mb-6">
                        Afhankelijk van de grootte van je bedrijf, de hoeveelheid facturen die je wilt factoren, je financiële reserves, je groeiambities, het betalingsgedrag van je klanten - en de kredietrisico&apos;s die ermee gepaard gaan - maakt het zeker uit welke vorm van Factoring je kiest.
                    </p>
                    <p className="text-secondary">
                        In dit blog leggen we je uit wat Factoring in de basis inhoudt, welke serieuze vormen van Factoring er zijn, hoe ze werken, én vertellen we over de voor- en nadelen. Toch adviseren we je met klem om niet op basis van internetkennis een beslissing te maken.
                    </p>
                </div>


                <div className='mt-8'>
                    <h2 className="text-2xl text-secondary font-bold mb-4">Zo werkt Factoring in de basis</h2>

                    <p className="mb-4 text-secondary">
                        Kijk eens goed naar de inkoopvoorwaarden van je klanten en de betalingstermijnen die ze hanteren. Die worden door de bank genomen steeds langer. Jij hebt je werk al lang gedaan, ondertussen moet je veel te lang wachten op je geld. Dat terwijl je dat geld zelf goed kunt gebruiken om aan je verplichtingen te voldoen of te investeren in jouw groei.
                    </p>

                    <p className="mb-4 text-secondary">
                        Door voor een factoraar als SOOF te kiezen, heb je jouw zuurverdiende geld nagenoeg direct op je rekening staan. Dat komt omdat wij jouw factuur als het ware opkopen, deze direct aan jou betalen - om het uitstaande bedrag vervolgens zelf te innen bij jouw opdrachtgever. Afhankelijk van de vorm van Factoring betaal je de factoraar een klein percentage over het factuurbedrag.
                    </p>

                    <p className="mb-4 text-secondary">
                        Op basis van de waarde van de te verwachten totale factuursom, wordt een kredietlimiet afgesproken. De factoraar betaalt elke factuur van jou direct uit, tót de grens van de kredietlimiet is bereikt.
                    </p>
                </div>

                <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-8 my-12">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative flex-1 text-center">
                            {/* Icon and Number Container */}
                            <div className="flex flex-col items-center mb-6">
                                {/* Large Icon Circle */}
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                                        <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white">
                                            {step.icon}
                                        </div>
                                    </div>
                                    {/* Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold">
                                        {step.number}
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[67%] w-[80%] h-0.5 bg-orange-200" />
                            )}

                            {/* Text Content */}
                            <p className="text-gray-700 max-w-xs mx-auto">
                                {step.title}
                            </p>
                        </div>
                    ))}
                </div>

                <section className="bg-white">
                    <div className="container mx-auto">
                        <div className="flex flex-row gap-4 justify-center">
                            {/* FAQ Balloon */}
                            <div className="flex-1 bg-blue-50 rounded-3xl p-4 shadow-md hover:shadow-lg transition-shadow max-w-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <HelpCircle className="w-6 h-6 text-secondary" />
                                    <h3 className="font-semibold text-lg text-secondary">FAQ</h3>
                                </div>
                                <p className="text-secondary">
                                    Bekijk onze veelgestelde vragen voor snelle antwoorden.
                                </p>
                                <button className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors" onClick={() => router.push("/veelgestelde-vragen")}>
                                    Naar FAQ
                                </button>
                            </div>

                            {/* Contact Balloon */}
                            <div className="flex-1 bg-orange-50 rounded-3xl p-4 shadow-md hover:shadow-lg transition-shadow max-w-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Phone className="w-6 h-6 text-primary" />
                                    <h3 className="font-semibold text-lg text-primary">Contact</h3>
                                </div>
                                <p className="text-primary">
                                    Bel direct voor snelle ondersteuning
                                </p>
                                <button className="mt-4 flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors" onClick={() => router.push("contact")}>
                                    <Phone className="w-4 h-4" />
                                    Bel nu
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className=" bg-secondary mx-auto text-beje px-8 py-2 rounded-3xl">


                <article className='my-8 max-w-7xl mx-auto px-8'>
                    <h1 className="text-4xl font-bold mb-8 text-beje text-center">De Drie Factoring Opties</h1>

                    <div className="space-y-6">
                        {factoringTypes.map((type) => (
                            <div key={type.id} className="bg-beje rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggleSection(type.id)}
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                >
                                    <h2 className="text-2xl font-bold text-primary">{type.title}</h2>
                                    {expandedSections[type.id] ? (
                                        <ChevronUp className="text-secondary" />
                                    ) : (
                                        <ChevronDown className="text-secondary" />
                                    )}
                                </button>

                                <AnimatePresence initial={false}>
                                    {expandedSections[type.id] && (
                                        <motion.div
                                            key={type.id} // Ensure unique keys for each section
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="p-6 pt-0 space-y-6"
                                        >
                                            <p className="text-secondary">{type.description}</p>

                                            <div>
                                                <div className="space-y-4">

                                                    <p className="text-primary font-bold border-l-4 border-primary pl-4">
                                                        {type.subtitle}
                                                    </p>
                                                    <ul className="list-disc pl-4 space-y-2 text-secondary">
                                                        {type.advantages.map((advantage, index) => (
                                                            <div className='flex items-center'>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-6 w-6 text-green-500 mr-3"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <p key={index}>{advantage}</p>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <PhoneContactSection></PhoneContactSection>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </article>


            </section>

            <div className="px-4 py-8 md:px-12 lg:px-24 my-8">
                <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Main Content Section */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold text-secondary lg:text-4xl mb-4">
                            SOOF maakt Factoring makkelijk
                        </h1>
                        <p className="text-secondary leading-relaxed lg:text-lg">
                            Door de verschillen zo klein mogelijk te maken tussen de verschillende vormen van
                            Factoring, maakt SOOF het eenvoudiger om een keuze te maken. Hoe minder verschillen, hoe
                            minder je hoeft af te wegen.
                        </p>
                    </div>

                    {/* Info Box Section */}
                    <div className="bg-gray-100 rounded-lg shadow-sm mt-6 lg:mt-0 lg:w-1/2 p-6">
                        <h2 className="text-xl font-semibold text-secondary mb-4">
                            Bij alle vormen van factoring door Soof:
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-500 mr-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-secondary">nemen wij je debiteurenbeheer uit handen</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-500 mr-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-secondary">is je factuurbedrag verzekerd</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-500 mr-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-secondary">hoef je niet alle facturen uit te besteden</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-green-500 mr-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-secondary">hanteren we de scherpste percentages als vergoeding</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl text-secondary font-bold text-center mb-2">Vergelijk alle SOOF Factoring producten</h1>
                <p className="text-center mb-8 text-secondary">
                    Kijk niet alleen naar onze vormen van Factoring, maar kijk ook naar alternatieven in de markt. Dan vind je steeds meer redenen om met ons af te spreken.
                </p>

                <div className="overflow-x-auto rounded-xl shadow">
                    <table className="min-w-full divide-y divide-gray-200 ">
                        <thead className="bg-primary">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-base font-semibold text-white">

                                </th>
                                {products.map((product) => (
                                    <th key={product.type} scope="col" className="px-6 py-3 text-left text-base font-semibold text-white">
                                        {product.type}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-beje divide-y divide-gray-200">
                            {Object.keys(products[0]).slice(1).map((key) => (
                                <tr key={key} className="hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 text-basefont-medium text-secondary text-left whitespace-nowrap">
                                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                                    </th>
                                    {products.map((product) => (
                                        <td key={`${product.type}-${key}`} className="px-6 py-4 text-base text-secondary">
                                            {key === 'AchterafBerekendeRente' ? (
                                                product[key] ?
                                                    <span className="text-green-600 text-base">Ja</span> :
                                                    <span className="text-red-600 text-base">Nee</span>
                                            ) : (
                                                key === 'FactorFee' ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-base font-medium bg-green-700 text-white">
                                                        {product[key]}
                                                    </span>
                                                ) : product[key as keyof typeof product]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}

export default Services;