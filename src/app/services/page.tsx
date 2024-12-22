"use client"
import React, { useState } from 'react';


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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
        ),
        title: "DBS2 neemt het debiteurenbeheer over."
    },
    {
        number: 4,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
        ),
        title: "Jouw klant betaalt de factuur aan DBS2."
    }
];

const products = [
    {
        type: "Traditionele Factoring",
        payment: "95% wordt direct uitbetaald. Het restant als de klant betaalt.",
        fee: "v.a. 1.5%",
        backCalculatedInterest: false,
        suitableFor: "Past in feite bij ieder bedrijf",
        completeness: "Per factuur, per debiteur, volledig; het is allemaal mogelijk.",
        paymentSpeed: "Altijd binnen 24 uur, meestal dezelfde werkdag",
        creditInsurance: "Alle facturen zijn voor 90% verzekerd tegen wanbetaling en faillissement.",
        debtorManagement: "Volledig inbegrepen",
        serviceArea: "Factoring mogelijk in heel Europa",
        contactPerson: "Vast"
    },
    {
        type: "MKB Factoring",
        payment: "100% wordt direct uitbetaald. De factor fee wordt direct verrekend.",
        fee: "v.a. 2.99%",
        backCalculatedInterest: true,
        suitableFor: "Veel gekozen door het klein MKB",
        completeness: "Per factuur, per debiteur, volledig; het is allemaal mogelijk.",
        paymentSpeed: "Altijd binnen 24 uur, meestal dezelfde werkdag",
        creditInsurance: "Alle facturen zijn voor 90% verzekerd tegen wanbetaling en faillissement.",
        debtorManagement: "Volledig inbegrepen",
        serviceArea: "Factoring mogelijk in Nederland",
        contactPerson: "Vast"
    },
    {
        type: "American Factoring",
        payment: "100% wordt direct uitbetaald. De factor fee wordt direct verrekend.",
        fee: "v.a. 3%",
        backCalculatedInterest: false,
        suitableFor: "Veel gekozen door het klein MKB en ZZP",
        completeness: "Per factuur, per debiteur, volledig; het is allemaal mogelijk.",
        paymentSpeed: "Altijd binnen 24 uur, meestal dezelfde werkdag",
        creditInsurance: "Alle facturen zijn voor 90% verzekerd tegen wanbetaling en faillissement.",
        debtorManagement: "Volledig inbegrepen",
        serviceArea: "Factoring mogelijk in Nederland",
        contactPerson: "Vast"
    }
];

const Services = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Phone number submitted:', phoneNumber);
    };



    return (
        <div className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Welke vorm van Factoring past bij jouw bedrijf?
                    </h1>
                    <p className="text-secondary text-lg max-w-3xl mx-auto">
                        Factoring is een flexibele manier om werkkapitaal (liquiditeit) te vergroten, waarbij de financiering op een natuurlijke wijze meegroeit met jouw onderneming. Daarnaast zijn je debiteuren met Factoring via SOOF verzekerd voor wanbetaling en voeren wij professioneel debiteurenbeheer uit.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-secondary mb-4">
                        Laat je adviseren
                    </h2>
                    <p className="text-secondary mb-6">
                        Afhankelijk van de grootte van je bedrijf, de hoeveelheid facturen die je wilt factoren, je financiële reserves, je groeiambities, het betalingsgedrag van je klanten - en de kredietrisico's die ermee gepaard gaan - maakt het zeker uit welke vorm van Factoring je kiest.
                    </p>
                    <p className="text-secondary">
                        In dit blog leggen we je uit wat Factoring in de basis inhoudt, welke serieuze vormen van Factoring er zijn, hoe ze werken, én vertellen we over de voor- en nadelen. Toch adviseren we je met klem om niet op basis van internetkennis een beslissing te maken.
                    </p>
                </div>


                <div className="bg-secondary shadow overflow-hidden sm:rounded-lg my-12">
                    <div className="px-4 py-5 sm:p-6">
                        <h2 className="text-2xl font-bold text-beje mb-4">
                            Factoring is serious business
                        </h2>
                        <p className="text-beje mb-6">
                            Ook al zie je overal dezelfde termen - de voorwaarden en kosten zijn steeds verschillend.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-beje">
                            <li>Moet je alle facturen uitbesteden, of een deel?</li>
                            <li>Zijn je facturen verzekerd tegen wanbetaling vanuit je klant?</li>
                            <li>Moet je zelf factureren naar je klant en betaling najagen?</li>
                            <li>Welk percentage van je factuur wordt direct betaald?</li>
                            <li>Hoe werkt het als een klant niet betaalt?</li>
                        </ul>
                        <p className="mt-6 text-beje">
                            Zo zijn er nog meer zaken om rekening mee te houden.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl text-secondary font-bold mb-4">Zo werkt Factoring in de basis</h2>

                    <p className="mb-4 text-secondary">
                        Kijk eens goed naar de inkoopvoorwaarden van je klanten en de betalingstermijnen die ze hanteren. Die worden door de bank genomen steeds langer. Jij hebt je werk al lang gedaan, ondertussen moet je veel te lang wachten op je geld. Dat terwijl je dat geld zelf goed kunt gebruiken om aan je verplichtingen te voldoen of te investeren in jouw groei.
                    </p>

                    <p className="mb-4 text-secondary">
                        Door voor een factoraar als DBS2 te kiezen, heb je jouw zuurverdiende geld nagenoeg direct op je rekening staan. Dat komt omdat wij jouw factuur als het ware opkopen, deze direct aan jou betalen - om het uitstaande bedrag vervolgens zelf te innen bij jouw opdrachtgever. Afhankelijk van de vorm van Factoring betaal je de factoraar een klein percentage over het factuurbedrag.
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
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
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

                <div>
                    <h2 className="text-2xl text-secondary font-bold mb-4">Het addertje onder het gras</h2>

                    <p className="mb-4 text-secondary">
                        Er zijn steeds meer Factoraars op de markt die verschillende voorwaarden hanteren en verschillende percentages (4-8%) rekenen. Dat terwijl de service die ze bieden sterk uiteenloopt. Zo moet je meestal zélf de facturen versturen en deze najagen. In de wetenschap dat niet elke ondernemer daar even goed in is, zit daar zomaar een addertje onder het gras.
                    </p>

                    <p className="mb-4 text-secondary">
                        Afhankelijk van de vorm van Factoring wordt - bij latere betaling vanuit jouw opdrachtgever - een hoger percentage ingehouden op de factuurwaarde. Voor veel factoraars zit daar een belangrijk deel van hun verdienmodel. Hoe later je opdrachtgever betaalt, hoe meer er wordt verdiend. Kijk daarom goed naar het percentage voorstel, maar staar je niet gelijk blind op dat getal. De voorwaarden en meegeleverde services - zoals debiteurenbeheer - moet je spiegelen aan jouw organisatie en markt.
                    </p>
                </div>
            </div>

            <section className="max-w-7xl bg-secondary mx-auto text-beje px-4 py-8 rounded-3xl">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="text-center mb-8">
                        <p className="text-primary uppercase text-sm font-bold mb-4">
                            Oude wijn in nieuwe zakken
                        </p>
                        <h1 className="text-3xl  md:text-4xl font-bold mb-6">
                            In feite zijn er twee vormen van Factoring
                        </h1>
                        <p className="max-w-3xl mx-auto">
                            Factoring is hot. Er staan steeds meer partijen op. In een poging om onderscheid te creëren,
                            introduceren ze telkens weer nieuwe Factoring producten. Het heeft vaak een beetje weg van
                            oude wijn in nieuwe zakken. Sla je alles plat, zijn er ruwweg twee vormen die je overal terug ziet.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* First Option */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <h2 className="text-xl text-secondary font-bold mb-4">
                                100% in één keer uitbetaald
                            </h2>
                            <p className="text-secondary">
                                Bij deze vorm wordt de complete factuurwaarde door de factoraar in één keer uitbetaald - met
                            </p>
                        </div>

                        {/* Second Option */}
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <h2 className="text-xl text-secondary font-bold mb-4">
                                80-95% wordt uitbetaald
                            </h2>
                            <p className="text-secondary">
                                Een groot deel word uitbetaald. De rest wordt ingehouden totdat de factuur is betaald. Hoe
                            </p>
                        </div>
                    </div>
                </div>


                <div>
                    <h2 className="text-2xl text-primary font-bold mb-4">Traditionele Factoring</h2>

                    <p className="mb-4 ">
                        Traditionele Factoring wordt met name als geschikt gezien voor grote corporate bedrijven. Doorgaans (bij DBS2 hoeft dat niet) draag je je complete debiteurenportfolio over aan een factoraar. Op basis van de waarde van de te verwachten totale factuursom, wordt een kredietlimiet afgesproken. De factoraar betaalt elke factuur van jou direct uit, tót de grens van de kredietlimiet is bereikt. De kans dat je deze bereikt via DBS2 is zeer klein omdat wij de facturatie naar je klant voor rekening nemen.
                    </p>

                    <p className="mb-4 ">
                        Bij Traditionele Factoring wordt een groot percentage van de factuur direct door de factoraar betaald. Doorgaans varieert dat van 80% tot 90%. De restwaarde van de factuur wordt betaald zodra de klant dat ook heeft gedaan. Hoe langer dat duurt, hoe hoger het percentage is dat de Factoraar rekent.
                    </p>

                    <p className="mb-4 ">
                        Bij Traditionele Factoring betaalt DBS2 in één keer 95% uit. Ons vergoedings-percentage behoort tot de scherpste in de markt. Bovendien het debiteurenbeheer uit handen. Dat scheelt je tijd en geld.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto p-6">
                    <article className="bg-beje rounded-lg shadow-lg p-6 space-y-6">
                        {/* Header Section */}
                        <header>
                            <div className="text-primary uppercase text-sm font-semibold mb-2">
                                Voor wie?
                            </div>
                            <h1 className="text-2xl text-secondary sm:text-3xl font-bold mb-4">
                                Ook interessant voor kleine organisaties.
                            </h1>
                        </header>

                        {/* Main Content */}
                        <div className="text-secondary leading-relaxed">
                            <p>
                                Traditionele Factoring wordt met name als geschikt gezien voor grote corporate
                                bedrijven. Maar door de aantrekkelijke voorwaarden en services van DBS2, wordt
                                deze vorm ook interessant voor kleinere organisaties. Wil je hier meer over weten?
                                Maak een afspraak.
                            </p>
                        </div>

                        {/* Call to Action Section */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* Callback Form */}
                            <div className="text-secondary p-4 rounded-lg">
                                <h2 className="text-lg font-semibold mb-3">Bel mij terug</h2>
                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder="Telefoonnummer"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                        aria-label="Telefoonnummer"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                                    >
                                        Bel mij terug
                                    </button>
                                </form>
                            </div>

                            {/* Appointment Button */}
                            <a
                                href="/adviesgesprek"
                                className="block w-full bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-secondary hover:text-beje transition-colors duration-200 text-center font-semibold"
                            >
                                Adviesgesprek aanvragen
                                <span className="inline-block ml-2">→</span>
                            </a>
                        </div>
                    </article>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">De voordelen van Traditionele Factoring</h2>

                    <p className="mb-4 text-primary font-bold border-l-4 border-primary pl-4">
                        Die bij DBS2 groter zijn
                    </p>

                    <ul className="list-disc pl-8 space-y-2 text-beje">
                        <li>Kijk je naar de aanbieders in de markt, zie je dat de kosten van traditionele factoring relatief een stuk lager uitvallen. Welke vorm van factoring je ook kiest, bij DBS2 rekenen we het scherpste tarieven in de markt.</li>
                        <li>Er gelden er over het algemeen minder strenge eisen voor je debiteuren.</li>
                    </ul>
                </div>

                <div className='mt-8'>
                    <h2 className="text-2xl font-bold mb-4">De nadelen van Traditionele Factoring</h2>

                    <p className="mb-4 text-primary font-bold border-l-4 border-primary pl-4">
                        Ddie DBS2 wegneemt
                    </p>

                    <ul className="list-disc pl-8 space-y-2 text-beje">
                        <li>Je moet aan bij de gemiddelde factoraar aan substantiële omzet-eisen voldoen.</li>
                        <li>Er gelden meer voorwaarden: je bedrijf moet minimaal 3 jaar bestaan en meestal ben je verplicht om iedere factuur bij het factoringbedrijf onder te brengen. Je gaat hiermee all-in en krijgt niet de kans om de meerwaarde van Factoring rustig te ervaren. Bij DBS2 heb je dat probleem niet.</li>
                        <li>Bij Traditionele Factoring ligt het debiteurenrisico bij jou. Jij moet factureren. Betaalt jouw klant te laat, dan merk jij dat in je portemonnee. DBS factureert en int zelf. Dat scheelt jou tijd én geld.</li>
                        <li>Er wordt niet direct 100% uitbetaald, maar tussen de 80% en 90%. Bij DBS2 95%.</li>
                    </ul>
                </div>

                <div className="border-b-2 border-primary my-8"></div>

                <div>
                    <h2 className="text-2xl text-primary font-bold mb-4">American Style Factoring</h2>

                    <p className="mb-4 ">
                        American Style Factoring wordt als de meeste flexibele vorm van Factoring gezien. Zoals het meestal in de markt wordt aangeboden, is het vooral geschikt voor MKB'ers en ZZP'ers. Je hoeft dan namelijk niet al je facturen aan een factoraar uitbesteden, maar kan volstaan met een deel van je facturen; of zelfs een enkele factuur. Dus maak je gebruik van de service als het jou uitkomt. Bij DBS2 is dat niet anders, maar weet dat je bij onze vorm van Traditionele Factoring ook maar een gedeelte van je facturen kan factoren.
                    </p>

                    <p className="mb-4 ">
                        Bij American Style Factoring wordt doorgaans niet het volledige bedrag uitgekeerd. De meeste factoraars keren in eerste instantie 80% tot 90% uit. Het overige deel van de factuurwaarde wordt gereserveerd - in afwachting van de termijn waarop de opdrachtgever betaalt. Hoe langer dat duurt, hoe hoger het vergoedingspercentage is dat de factoraar rekent. Bij DBS2 heb je dat probleem niet, want bij American Style Factoring keren wij 100% van het bedrag uit - met aftrek van het vooraf overeengekomen vergoedingspercentage.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">De voordelen van American Style Factoring</h2>

                    <p className="mb-4 text-primary font-bold border-l-4 border-primary pl-4">
                        Die bij DBS2 groter zijn
                    </p>

                    <ul className="list-disc pl-8 space-y-2 text-beje">
                        <li>Een overeenkomst met een factoraar is vaak al binnen een dag geregeld, en meestal is je factuur direct verzekerd tegen wanbetaling. Bij DBS2 is dat áltijd het geval.</li>
                        <li>Je hoeft niet all-in te gaan en de behoudt de regie. Weet je dat een klant binnen een week betaalt, hoef je niet te factoren. Bij DBS2 kan je zelfs op klantniveau bepalen of je een enkele factuur wél of niet via ons laat verlopen.</li>
                    </ul>
                </div>

                <div className='mt-8'>
                    <h2 className="text-2xl font-bold mb-4">De nadelen van American Style Factoring</h2>

                    <p className="mb-4 text-primary font-bold border-l-4 border-primary pl-4">
                        Die DBS2 wegneemt
                    </p>

                    <ul className="list-disc pl-8 space-y-2 text-beje">
                        <li>Bij American Style Factoring mag een factoraar een debiteur weigeren als deze het risico te hoog wordt ingeschat. Als factoraar wil je natuurlijk voorkomen dat je service alleen wordt ingezet op probleemdossiers. Bij DBS2 maakt krachtig debiteurenbeheer standaard onderdeel uit van onze service; daardoor komt het zelden voor dat wij het risico als te hoog inschatten.</li>
                        <li>Het gerekende vergoedingspercentage valt hoger uit omdat de opgetelde factuurwaarde lager ligt. Welke vorm van factoring je ook kiest, bij DBS2 rekenen we de scherpste tarieven in de markt, hanteren we de beste voorwaarden en bieden we de meeste service.</li>
                        <li>Er wordt doorgaans niet direct 100% uitbetaald, maar tussen de 80% en 90%. Bij DBS2 100%.</li>
                        <li>Debiteurenbeheer - oftewel: factureren en najagen - is meestal niet inbegrepen. Bij DBS2 wel.</li>
                    </ul>
                </div>

                <div className="border-b-2 border-primary my-8"></div>

                <div>
                    <h2 className="text-2xl text-primary font-bold mb-4">MKB Factoring</h2>

                    <p className="mb-4 ">
                        Dit heeft veel weg van American Style Factoring. Toch is het wezenlijk anders. Al helemaal als je DBS2 met de concurrentie vergelijkt. Op het eerste gezicht lijken de rentepercentages nagenoeg gelijk. En wordt er bij beide Factoring vormen direct 100% uitgekeerd. Maar waarbij American Factoring een vast rentepercentage wordt ingehouden, werkt dat anders bij MKB Factoring.
                    </p>

                    <p className="mb-4 ">
                        Als je opdrachtgever later dan 30 dagen betaalt, krijg je achteraf een factuur vanuit de factoraar gestuurd op basis van een vooraf afgesproken rentepercentage. Na 30 dagen wordt er per 30 dagen pakweg 1 procent van de factuurwaarde naar je gefactureerd. Om de kans daarop zoveel mogelijk te verkleinen, nemen wij het debiteurenbeheer over. Wij kunnen - op vriendelijke wijze - nét even wat strenger zijn dan jij.
                    </p>
                </div>

                <div className='mt-8'>
                    <h2 className="text-2xl font-bold mb-4">De voordelen en nadelen</h2>

                    <p className="mb-4 text-primary font-bold border-l-4 border-primary pl-4">
                        van MKB Factoring
                    </p>

                    <p className="mb-4 ">
                        Ze zijn goed vergelijkbaar met die van American Style factoring. Betalen je klanten doorgaans binnen 30 dagen, ben je goedkoper uit. Betalen ze gemiddeld genomen later dan 30 dagen, dan betaal je nét wat meer.
                    </p>
                </div>


            </section>

            <div className="px-4 py-8 md:px-12 lg:px-24 my-8">
                <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Main Content Section */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold text-secondary lg:text-4xl mb-4">
                            DBS2 maakt Factoring makkelijk
                        </h1>
                        <p className="text-secondary leading-relaxed lg:text-lg">
                            Door de verschillen zo klein mogelijk te maken tussen de verschillende vormen van
                            Factoring, maakt DBS2 het eenvoudiger om een keuze te maken. Hoe minder verschillen, hoe
                            minder je hoeft af te wegen.
                        </p>
                    </div>

                    {/* Info Box Section */}
                    <div className="bg-gray-100 rounded-lg shadow-sm mt-6 lg:mt-0 lg:w-1/2 p-6">
                        <h2 className="text-xl font-semibold text-secondary mb-4">
                            Bij alle vormen van DBS2 Factoring:
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
                <h1 className="text-3xl text-secondary font-bold text-center mb-2">Vergelijk alle DBS2 Factoring producten</h1>
                <p className="text-center mb-8 text-secondary">
                    Kijk niet alleen naar onze vormen van Factoring, maar kijk ook naar alternatieven in de markt. Dan vind je steeds meer redenen om met ons af te spreken.
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-secondary">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-white">
                                    Kenmerken
                                </th>
                                {products.map((product) => (
                                    <th key={product.type} scope="col" className="px-6 py-3 text-left text-sm font-semibold text-white">
                                        {product.type}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Object.keys(products[0]).slice(1).map((key) => (
                                <tr key={key} className="hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 text-sm font-medium text-secondary whitespace-nowrap">
                                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                                    </th>
                                    {products.map((product) => (
                                        <td key={`${product.type}-${key}`} className="px-6 py-4 text-sm text-secondary">
                                            {key === 'backCalculatedInterest' ? (
                                                product[key] ?
                                                    <span className="text-green-600">✓</span> :
                                                    <span className="text-red-600">✗</span>
                                            ) : (
                                                key === 'fee' ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
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