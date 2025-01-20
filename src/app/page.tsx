
"use client"
import { motion } from 'framer-motion';
import { HomeIcon, Zap, ClipboardList, Check, MessageCircle } from 'lucide-react';
import { Article } from '@/types/article';
import Data from '../../public/data.json';
import NewsCard from '@/components/newsCard';
import HeroSection from "@/components/emailContact";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import PhoneContactSection from '@/components/phoneContact';

const MovingText = () => (
  <div className="overflow-hidden whitespace-nowrap absolute top-1 md:top-4 left-0 w-24 sm:w-32 md:w-32 lg:w-[160px]">
    <div
      className="text-primary text-xl md:text-3xl font-bold"
    >
      • VANAF • <br /> €500.000
    </div>
  </div>
);

const SpinningLogo = () => {
  return (
    <div className="absolute left-1/2 bottom-[-45px] transform -translate-x-1/2 md:left-[40px] lg:left-[0px] md:bottom-[50%] flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
      {/* Circle Background */}
      <div className="absolute w-full h-full rounded-full bg-background"></div>

      {/* Spinning Logo */}
      <motion.img
        src="/images/logoSingle.png" // Replace with your logo path
        alt="Spinning Logo"
        className="w-20 h-20 md:w-28 md:h-28"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      />
    </div>
  );
};

const ChangingText = () => {
  const words = ["Betaald", "Verzekerd"];
  const extendedWords = [...words, words[0]];

  return (
    <div className="h-8 overflow-hidden">
      <motion.div
        animate={{
          y: [0, 0, -32, -32, -64, -64],
        }}
        transition={{
          duration: 5,
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        {extendedWords.map((word, i) => (
          <div
            key={i}
            className="h-8 text-navy-blue text-4xl flex items-center justify-center"
          >
            {word}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const FeatureBar = () => {
  const features = [
    'Beste voorwaarden',
    'Lage kosten',
    'Lage acceptatiedrempel',
    'Optimale kredietverzekering',
    'Direct en persoonlijk contact',
    'Overeenkomst binnen 2 dagen'
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col space-y-6">
          {/* First row with 4 elements */}
          <div className="flex flex-col md:flex-row justify-center items-center 
                          space-y-4 md:space-y-0 md:space-x-8">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base md:text-xl font-medium text-secondary whitespace-nowrap">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Second row with 2 elements */}
          <div className="flex flex-col md:flex-row justify-center items-center
                          space-y-4 md:space-y-0 md:space-x-8">
            {features.slice(4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base md:text-xl font-medium text-secondary whitespace-nowrap">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const stats = [
  { value: '36K', label: 'Klanten', id: 'customers' },
  { value: '28', label: 'Landen', id: 'countries' },
  { value: '1 Mld.', label: 'Gefinancierd', id: 'financed' },
  { value: '100%', label: 'Klanttevredenheid', id: 'satisfaction' }
];


export default function Home() {
  const router = useRouter();

  const sortedNews: Article[] = [...Data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const [phoneNumber, setPhoneNumber] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Phone number submitted:', phoneNumber);
  };

  const NeemContactOp = () => {
    router.push("/contact"); // Navigate to the contact page
  };

  return (
    <div className="bg-background">
      <section className="overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}

            <motion.div
              initial={{ x: "30%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center lg:text-left">
                {/* Main Headings */}
                <div>
                  <h1 className="text-secondary">
                    <span className="block text-7xl md:text-8xl lg:text-9xl mb-2">
                      DIRECT
                    </span>
                    <span className="block text-7xl md:text-8xl lg:text-9xl mb-2">
                      EXTRA
                    </span>

                    <span className="block text-5xl sm:text-7xl md:text-7xl lg:text-7xl border-b-8 border-primary inline-block">
                      WERKKAPITAAL
                    </span>
                  </h1>
                </div>

                {/* Cards */}

                <div
                  onClick={NeemContactOp}
                  className="bg-[#2E8B57] rounded-lg p-6 mt-16 text-white flex flex-row items-center justify-center gap-4 h-32 cursor-pointer hover:bg-[#15853f] transition-colors duration-200 shadow-lg"
                >
                  <MessageCircle size={48} />
                  <h2 className="text-4xl font-bold">Neem contact op</h2>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ x: "-30%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Right Image */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-10 md:aspect-h-12 rounded-3xl overflow-hidden">
                  <img
                    src="/images/main.png"
                    alt="Business people discussing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <MovingText />
                <SpinningLogo />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureBar />



      <section className="max-w-7xl mx-auto px-4 py-12 overflow-x-hidden">

        <motion.h1
          id="factoring-title"
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-beje bg-primary p-4  rounded-xl mx-auto w-full max-w-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Drie Soorten Factoring
        </motion.h1>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img
                    src="/images/tradfactoring.jpg"
                    alt="Traditionele Factoring"
                    className="w-full rounded-lg shadow-lg"
                    width={600}
                    height={600}
                  />

                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 border-l-4 border-secondary pl-4">
                  Traditionele Factoring
                </h1>

                <ul className="space-y-4 mb-8 text-secondary text-lg ">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500" />
                    <span>90% direct betaald</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500" />
                    <span >Factorfee v.a. 1,5%</span>
                  </li>
                </ul>

                <p className="text-lg md:text-xl text-secondary mb-4">
                  Traditionele factoring is vooral geschikt voor grote bedrijven, waarbij het volledige debiteurenportfolio wordt overgedragen aan Soof Factoring. Op basis van de verwachte openstaande factuursom wordt een kredietlimiet afgesproken. Soof Factoring betaalt de facturen tot deze limiet is bereikt.
                </p>

                <motion.button
                  className="flex items-center bg-secondary text-beje rounded-full pr-1 pl-6 py-1 hover:bg-secondary transition-colors duration-200"
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/services")}
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
                  <span className="text-lg font-medium mr-3">Leer meer</span>
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
          </motion.div>
          <PhoneContactSection />


          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img
                    src="/images/americanF.jpg"
                    alt="American Style Factoring"
                    className="w-full rounded-lg shadow-lg"
                    width={600}
                    height={600}
                  />

                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 border-l-4 border-secondary pl-4">
                  American Style Factoring
                </h1>

                <ul className="space-y-4 mb-8 text-secondary text-lg ">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500" />
                    <span>100% direct betaald</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500" />
                    <span >Factorfee v.a. 3,9%</span>
                  </li>
                </ul>

                <p className="text-lg md:text-xl text-secondary mb-4">
                  American Style Factoring wordt als de meeste flexibele vorm van Factoring gezien. Zoals het meestal in de markt wordt aangeboden, is het vooral geschikt voor MKB'ers en ZZP'ers. U hoeft dan namelijk niet al uw facturen aan een factoraar uit te besteden, maar kan volstaan met een deel van de facturen, of zelfs een enkele factuur. Waar andere factoraars tussen de 80% en 90% uitkeren, keren wij tot 100% van het bedrag uit - met aftrek van het vooraf overeengekomen vergoedingspercentage.
                </p>

                <motion.button
                  className="flex items-center bg-secondary text-beje rounded-full pr-1 pl-6 py-1 hover:bg-secondary transition-colors duration-200"
                  initial="initial"
                  whileHover="hover"
                  onClick={() => router.push("/services")}
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
                  <span className="text-lg font-medium mr-3">Leer meer</span>
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
          </motion.div>
          <PhoneContactSection />


          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img
                    src="/images/MkbF.jpg"
                    alt="MKB Factoring"
                    className="w-full rounded-lg shadow-lg"
                    width={600}
                    height={600}
                  />

                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 border-l-4 border-secondary pl-4">
                  MKB Factoring
                </h1>

                <ul className="space-y-4 mb-8 text-secondary text-lg ">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500" />
                    <span>100% direct betaald</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500" />
                    <span >Factorfee v.a. 1,3%</span>
                  </li>
                </ul>

                <p className="text-lg md:text-xl text-secondary mb-4">
                  Bij MKB-Factoring keren wij tot 100% van het bedrag uit - met aftrek van het vooraf overeengekomen vergoedingspercentage. De rente over de looptijd wordt achteraf in rekening gebracht. Let op dit is voor bedrijven met een minimale jaaromzet van 2.500.000 EUR.
                </p>

                <motion.button
                  className="flex items-center bg-secondary text-beje rounded-full pr-1 pl-6 py-1 hover:bg-secondary transition-colors duration-200"
                  initial="initial"
                  whileHover="hover"
                  onClick={() => router.push("/services")}
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
                  <span className="text-lg font-medium mr-3">Leer meer</span>
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
          </motion.div>



        </div>
      </section>



      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <motion.div
              initial={{ y: -100, opacity: 0 }}  // Start from up (y = -100)
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }} // Move to center
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Factoring voor Elke Organisatie
                </h2>
                <p className="text-lg text-secondary mb-6">
                  Ontdek hoe SOOF's aantrekkelijke voorwaarden factoring toegankelijk maken voor kleinere bedrijven.
                </p>
                <p className="text-secondary">
                  Traditionele factoring wordt vaak geassocieerd met grote bedrijven, maar SOOF maakt het nu ook aantrekkelijk voor kleinere organisaties. Ontdek hoe wij uw bedrijfsfinanciering kunnen optimaliseren, ongeacht de grootte van uw organisatie.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}  // Start from down (y = 100)
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}  // Move to center
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >

              <div className="border-2 border-secondary rounded-lg p-6 shadow-md w-full max-w-md mx-auto">
                <h3 className="text-2xl font-semibold text-secondary mb-2">Bel mij terug</h3>
                <p className="text-sm text-secondary mb-4">
                  Laat uw nummer achter, en wij nemen zo snel mogelijk contact met u op.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Uw telefoonnummer"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 font-semibold"
                  >
                    Verzoek terugbelafspraak
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="mx-auto bg-secondary text-beje rounded-3xl">
        <div className="px-4 py-4">
          <div className="max-w-7xl mx-auto">
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.id === 'customers' ? 0 : stat.id === 'countries' ? 0.2 : stat.id === 'financed' ? 0.4 : 0.6 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="text-sm md:text-base text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div> */}

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mt-4">
                  Nieuws
                </h2>

                <div className="border-b-4 mb-12 mt-4"></div>

                <div className="p-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                      {sortedNews.map((news, index) => (
                        <NewsCard key={index} news={news} delay={0} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex items-center justify-center">
                <motion.button
                  className="flex items-center bg-primary text-beje rounded-full pr-1 pl-6 py-1 hover:bg-primary transition-colors duration-200"
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/nieuws")}
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
                  <span className="text-lg font-medium mr-3">bekijk alles</span>
                  <div className="bg-secondary rounded-full p-2.5 ">
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
          </div>
        </div>
        <HeroSection />
      </section>



    </div>
  );
}
