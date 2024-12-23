
"use client"
import { motion} from 'framer-motion';
import { HomeIcon, Zap, ClipboardList } from 'lucide-react';
import { Article } from '@/types/article';
import Data from '../../public/data.json';
import NewsCard from '@/components/newsCard';
import HeroSection from "@/components/emailContact";

const MovingText = () => (
  <div className="overflow-hidden whitespace-nowrap absolute top-4 left-0 w-24 sm:w-32 md:w-32 lg:w-40">
    <motion.div
      animate={{
        x: [150, -150], // Adjust the range to fit smaller width
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      className="text-primary text-xl font-bold"
    >
      • VANAF €500.000
    </motion.div>
  </div>
);

const SpinningLogo = () => {
  return (
    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-24 h-24">
      {/* Circle Background */}
      <div className="absolute w-full h-full rounded-full bg-background"></div>

      {/* Spinning Logo */}
      <motion.img
        src="/images/logo.png" // Replace with your logo path
        alt="Spinning Logo"
        className="w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />
    </div>
  );
};

const ChangingText = () => {
  const words = ["Betaald", "Verzekerd"];

  return (
    <div className="h-8 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -30, 0], // Start at 0, move to -40, and return to 0
        }}
        transition={{
          duration: 4, // Total duration of one cycle
          repeat: Infinity,
          times: [0, 0.5, 1],
          ease: "easeInOut", // Equal time for each phase
        }}
        className="space-y-0"
      >
        {words.map((word) => (
          <div key={word} className="h-8 text-navy-blue text-3xl flex flex-col items-center justify-center">
            {word}
          </div>
        ))}
      </motion.div>
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

  const sortedNews: Article[] = [...Data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="bg-background">
      <section className="overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}

            <motion.div
              initial={{ x: "30%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-8 text-center lg:text-left">
                {/* Main Headings */}
                <div>
                  <h1 className="text-secondary">
                    <span className="block text-4xl md:text-5xl font-bold lg:text-6xl mb-2">
                      DIRECT
                    </span>
                    <span className="block text-4xl md:text-5xl font-bold lg:text-6xl mb-2">
                      EXTRA
                    </span>
                    <span className="block text-5xl md:text-6xl lg:text-7xl italic relative inline-block">
                      WERKKAPITAAL
                      <span
                        className="absolute left-0 bottom-0 w-full h-[2px] bg-primary rotate-[-2deg] transform origin-bottom-left"
                        style={{ height: '4px' }}
                      ></span>
                    </span>
                  </h1>
                </div>

                {/* Cards */}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  {/* First Card */}
                  <div className="bg-primary rounded-lg p-4 text-secondary flex flex-col items-center justify-center w-60 h-24">
                    <p className="text-sm mb-1">- JOUW FACTUREN METEEN -</p>
                    <ChangingText />
                  </div>

                  {/* Second Card */}
                  <div className="bg-secondary rounded-lg p-4 text-beje flex flex-col items-center justify-center w-60 h-24">
                    <h2 className="text-xl font-bold mb-1">Neem</h2>
                    <h2 className="text-xl font-bold mb-1">contact op</h2>
                  </div>
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
                <div className="aspect-w-16 aspect-h-10 md:aspect-h-12 rounded-3xl overflow-hidden bg-gray-100">
                  <img
                    src="/images/main.jpg"
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

      <section className="max-w-7xl mx-auto px-4 overflow-x-hidden">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            id="factoring-title"
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-beje bg-primary p-4 rounded-xl mx-auto w-full max-w-4xl"
          >
            Drie Soorten Factoring
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Traditionele Factoring */}
            <article
              className="bg-backgound border-4 border-secondary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-beje mb-4">
                <HomeIcon size={24} />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                Traditionele Factoring
              </h2>
              <ul className="space-y-2 mb-6 text-secondary">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  95% direct betaald
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Factorfee v.a. 1,5%
                </li>
              </ul>
              <button
                className="text-primary font-medium hover:underline flex items-center"
                aria-label="Leer meer over Traditionele Factoring"
              >
                Leer meer
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </article>

            {/* MKB Factoring */}
            <article
              className="bg-backgound border-4 border-secondary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-beje mb-4">
                <Zap size={24} />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                MKB Factoring
              </h2>
              <ul className="space-y-2 mb-6 text-secondary">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  100% direct betaald
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Factorfee v.a. 3%
                </li>
              </ul>
              <button
                className="text-primary font-medium hover:underline flex items-center"
                aria-label="Leer meer over MKB Factoring"
              >
                Leer meer
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </article>

            {/* American Factoring */}
            <article
              className="bg-backgound border-4 border-secondary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-beje mb-4">
                <ClipboardList size={24} />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                American Factoring
              </h2>
              <ul className="space-y-2 mb-6 text-secondary">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  100% direct betaald
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Factorfee v.a. 3%
                </li>
              </ul>
              <button
                className="text-primary font-medium hover:underline flex items-center"
                aria-label="Leer meer over American Factoring"
              >
                Leer meer
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          </div>
        </motion.div>
      </section>


      <section className="max-w-7xl mx-auto px-4 py-12 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img
                    src="/images/testimonial2.jpg"
                    alt="Simon Adriaan Visscher in an office setting"
                    className="w-full rounded-lg shadow-lg"
                    width={600}
                    height={600}
                  />

                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 border-l-4 border-secondary pl-4">
                  Soof Factoring is verankerd in mijn groeistrategie
                </h1>

                <p className="text-lg md:text-xl text-secondary mb-8">
                  -Adriaan Werkt, Simon Adriaan Visscher
                </p>

                <motion.button
                  className="flex items-center bg-secondary text-beje rounded-full pr-1 pl-6 py-1 hover:bg-secondary transition-colors duration-200"
                  initial="initial"
                  whileHover="hover"
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
                  <span className="text-lg font-medium mr-3">ONTDEK</span>
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


          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 py-6">
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img
                    src="/images/testimonial1.jpg"
                    alt="Simon Adriaan Visscher in an office setting"
                    className="w-full rounded-lg shadow-lg"
                    width={600}
                    height={600}
                  />

                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 border-l-4 border-secondary pl-4">
                  Ik hoef nooit meer sjaggerijnige belletjes te doen naar mijn klanten. Dat doet de relatie goed.
                </h1>

                <p className="text-lg md:text-xl text-secondary mb-8">
                  -Cees Schraag, Do-Bo transport
                </p>

                <motion.button
                  className="flex items-center bg-secondary text-beje rounded-full pr-1 pl-6 py-1 hover:bg-secondary transition-colors duration-200"
                  initial="initial"
                  whileHover="hover"
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
                  <span className="text-lg font-medium mr-3">ONTDEK</span>
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


      <section className="max-w-7xl mx-auto bg-secondary text-beje rounded-3xl">
        <div className="px-4 px-4 pt-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
            </div>

            <div className="border-t-2 border-beje text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  Nieuws
                </h2>

                <div className="p-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                      {sortedNews.map((news, index) => (
                        <NewsCard key={index} news={news} delay={0}/>
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
