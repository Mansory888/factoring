"use client";
import React from 'react';
import { AnimatedFAQItem } from '../../components/faq';
import { FileQuestion } from 'lucide-react';

const Aanmelden = [
    {
        question: 'Hoelang duurt de aanmeldprocedure?',
        answer: `
            Nadat wij je opdrachtgever kredietwaardig hebben bevonden, maken wij een afspraak voor een kennismakingsgesprek. Eén van onze medewerkers komt langs om alles door te nemen. Indien je besluit klant te worden, hebben wij een aantal gegevens nodig, voordat we samen een overeenkomst te tekenen.

Zodra wij de benodigde gegevens hebben ontvangen en de overeenkomst getekend retour is, kan je ons de eerste kopie van een factuur aan je klant toesturen. Daarop zet je – in plaats van je eigen gegevens – de naam en het rekeningnummer van SOOF Factoring. Je kunt er ook voor kiezen de volledige facturatie uit te besteden. In dat geval ontvangen wij een getekende urenstaat of werkbon. Binnen 2 werkdagen na factuurdatum ontvang je van SOOF Factoring het geld op je rekening.
        `
    },
    {
        question: 'Wat gebeurt er na het aanmelden?',
        answer: `
            Nadat je de samenwerking met SOOF Factoring hebt bevestigd, kun je direct facturen gaat factoren. In plaats van je eigen gegevens – zet je op je factuur de naam en het rekeningnummer van SOOF Factoring. Onderaan de factuur plaats je de volgende tekst: Deze vordering is gecedeerd dan wel verpand aan SOOF Factoring. Betaling kan slechts bevrijdend geschieden aan SOOF Factoring op IBAN NL02RABOXXXXXXXXXX o.v.v. factuurnummer. Een kopie van deze factuur stuur je eenvoudig in via de portal of e-mail je naar ons. Wij gaan je vervolgens betalen.
        `
    },
    {
        question: 'Aan welke criteria moet je voldoen om klant van SOOF Factoring te kunnen worden?',
        answer: `
            Wij doen niet ingewikkeld. Wij beoordelen alleen je opdrachtgever op kredietwaardigheid. Wil je snel weten of je gebruik kunt maken van de diensten van SOOF Factoring? Neem contact op. Een telefoontje of afspraak is voldoende.
        `
    },
    {
        question: 'Ja, ik wil klant worden bij SOOF Factoring. Hoe doe ik dat?',
        answer: `
            Vul het contactformulier in op de pagina ‘informatie aanvragen’. Dit verplicht je tot niets. Wij nemen vervolgens contact met je op om (vrijblijvend) de mogelijkheden voor jouw onderneming te bespreken. Je mag uiteraard ook zelf contact met ons opnemen via +31 06 51 950 524. Wij zijn bereikbaar op werkdagen van 9.00 tot 17.00 uur.
        `
    }
];


const Financiëel = [
    {
        question: 'Waaraan moet de kopie factuur voldoen?',
        answer: `
            Je factuur dient aan de gebruikelijke eisen te voldoen. Het enige verschil: in plaats van je eigen gegevens – zet je op je factuur de naam en het rekeningnummer van SOOF Factoring. Onderaan de factuur plaats je de volgende tekst: Deze vordering is gecedeerd dan wel verpand aan SOOF Factoring. Betaling kan slechts bevrijdend geschieden aan SOOF Factoring op IBAN NL02RABOXXXXXXXXXX o.v.v. factuurnummer.
        `
    },
    {
        question: 'Hoe lever ik de kopie factuur aan?',
        answer: `
            Je dient de factuur in via de portal, of je stuurt de factuur per mail aan je klant en zet SOOF Factoring in de ‘cc’. Belangrijk is wel: in plaats van je eigen gegevens – zet je op de factuur de naam en het rekeningnummer van SOOF Factoring. Onderaan de factuur plaats je de volgende tekst: Deze vordering is gecedeerd dan wel verpand aan SOOF Factoring. Betaling kan slechts bevrijdend geschieden aan SOOF Factoring op IBAN NL02RABOXXXXXXXXXX o.v.v. factuurnummer. . Je contactpersoon - die je krijgt toegewezen bij je aanmelding - neemt de factuur meteen in behandeling.
        `
    },
    {
        question: 'Wat is de beoordelingsprocedure van SOOF Factoring?',
        answer: `
           SOOF Factoring zal de kredietwaardigheid van je opdrachtgever beoordelen. Dat is eigenlijk het enige waar we op toetsen.
        `
    },
    {
        question: 'Hoe gaat SOOF Factoring te werk?',
        answer: `
            SOOF Factoring beoordeelt allereerst je opdrachtgever op kredietwaardigheid. Naar aanleiding van die beoordeling ontvang je van ons een bevestiging. Het enige wat SOOF Factoring van je nodig heeft, zijn de vaste gegevens, een getekende overeenkomst en een kopie van de factuur aan je klant. In plaats van je eigen gegevens – zet je op de factuur de naam en het rekeningnummer van SOOF Factoring. Onderaan de factuur plaats je de volgende tekst: Deze vordering is gecedeerd dan wel verpand aan SOOF Factoring. Betaling kan slechts bevrijdend geschieden aan SOOF Factoring op IBAN NL02RABOXXXXXXXXXX o.v.v. factuurnummer. . is je factuur verzonden, dan nemen wij het debiteurenbeheer van je over. SOOF Factoring betaalt het openstaande bedrag van de factuur vrijwel direct aan je uit. In ruil voor die service en zekerheid, betaal je een klein percentage van de factuuromzet.
        `
    },
    {
        question: 'Wat is de betaaltermijn van SOOF Factoring?',
        answer: `
           Zodra wij van jou de factuur aan je klant hebben ontvangen, betalen wij het openstaande bedrag op dezelfde werkdag uit.
        `
    }
];

const OverigeVragen = [
    {
        question: 'Wat is de minimale looptijd?',
        answer: `
            Je bepaalt zelf voor welke opdrachtgever je factoring wilt inzetten. Heb je met een klant afgesproken dat er wordt betaald, dan heb je SOOF niet nodig. In tegenstelling tot alternatieven in de markt is het geheel vrijblijvend welke facturen je bij SOOF Factoring indient. Wij hanteren bovendien geen minimale looptijd. Wil je op enig moment stoppen met SOOF Factoring, dan kan dat.
        `
    },
    {
        question: 'Wat is factoring?',
        answer: `
            Bij factoring neemt SOOF Factoring het betalingsrisico en debiteurenbeheer van je over. SOOF Factoring beoordeelt allereerst jouw opdrachtgever op kredietwaardigheid. Naar aanleiding van die beoordeling ontvang je van ons een bevestiging. Het enige wat SOOF Factoring - naast de vaste gegevens en het getekende contract - van je nodig heeft, is een kopie van de factuur aan je klant. In plaats van je eigen gegevens – zet je op de factuur de naam en het rekeningnummer van SOOF Factoring. Onderaan de factuur plaats je de volgende tekst: Deze vordering is gecedeerd dan wel verpand aan SOOF Factoring. Betaling kan slechts bevrijdend geschieden aan SOOF Factoring op IBAN NL02RABOXXXXXXXXXX o.v.v. factuurnummer. . SOOF Factoring betaalt vrijwel direct het openstaande bedrag van de factuur uit. In ruil voor die service en zekerheid, betaal je een vergoeding.
        `
    },
    {
        question: 'Welke voordelen biedt factoring?',
        answer: `
           Het grote voordeel van factoring is dat SOOF Factoring binnen 2 werkdagen je openstaande facturen betaalt. Je hebt geen zorgen meer over te late betalingen of risico’s bij faillissementen. Daarbij creëer je direct werkkapitaal, bijvoorbeeld om te kunnen groeien. Voor de diensten van SOOF Factoring betaal je een klein percentage van je factuurbedrag. Het gemak en de voordelen van factoring zijn deze kosten ruimschoots waard.
        `
    },
    {
        question: 'Voor welke bedrijven is factoring geschikt?',
        answer: `
            Factoring is geschikt voor ieder bedrijf: van de grote corporatie, tot het groot MKB; van het klein-MKB tot freelancers, ZZP’ers en zelfstandigen. In zijn algemeenheid geldt: heb je last van oplopende betalingstermijnen van je debiteuren? Of heb je werkkapitaal nodig om versneld te kunnen groeien? Dan is het slim om SOOF Factoring in te schakelen.
        `
    },
    {
        question: 'Met welke facturen kan ik niet terecht bij SOOF Factoring?',
        answer: `
           Wij nemen geen oude, reeds openstaande vorderingen in behandeling. Wij behandelen geen facturen van particulieren, maar alleen van B2B.
        `
    },
    {
        question: 'Wat zijn de kosten van factoring?',
        answer: `
           Afhankelijk van de vorm van factoring die je kiest, zijn er in de basis twee manieren waarop we kosten doorberekenen. 1. We rekenen een vaste fee per factuur 2. We rekenen een vast percentage voor de eerste maand, dat licht oploopt naar mate jouw klant later betaalt. Met factoring zorg je voor financiële rust binnen jouw onderneming. Denk aan het wegnemen van onzekerheid het al dan niet betaald worden, en op welke termijn. Verder bespaar je veel tijd en geld bij het beheer van jouw openstaande facturen, zoals het versturen van herinneringen en aanmaningen.
        `
    },
    {
        question: 'Komt bemiddeling bij openstaande facturen vaker voor?',
        answer: `
          Het gebruik van factoring is algemeen bekend en wordt tegenwoordig steeds vaker toegepast. Met SOOF Factoring bespaar je tijd en maak je het debiteurenbeheer richting jouw opdrachtgever beter.
        `
    }
];

const Riskos = [
    {
        question: 'Neemt mijn administratiewerk toe?',
        answer: `
            Nee, na het inleveren van een kopie van de openstaande factuur (met daarop - in plaats van je eigen gegevens - de naam en het rekeningnummer van SOOF Factoring ) heb je geen werk meer aan je debiteurenbeheer. SOOF Factoring neemt dat van je over.
        `
    },
    {
        question: 'Wat gebeurt er bij betwiste vorderingen?',
        answer: `
            Als de vordering achteraf betwist wordt, of als er onduidelijkheid ontstaat, dan koppelen wij dat direct terug. Indien blijkt dat de vordering onterecht is, bespreken wij dat met je. Wanneer de vordering terecht is - en de opdrachtgever niet betaalt - neemt SOOF Factoring het kredietrisico van je over. Je ontvangt in dat geval dus gewoon je geld.

        `
    },
    {
        question: 'Wat gebeurt er als een opdrachtgever niet betaalt?',
        answer: `
           Mocht uiteindelijk een factuur onbetaald blijven, dan heb je hier geen last van. SOOF Factoring neemt het kredietrisico over. Je ontvangt dus gewoon je geld. Eventueel begint SOOF Factoring een incassoprocedure. Dit geldt alleen in het geval van een onbetwiste vordering.
        `
    },
    {
        question: 'Zal mijn opdrachtgever denken dat ik in de financiële problemen zit?',
        answer: `
           Zeker niet. Factoring is inmiddels een wijd geaccepteerde service in de markt. Bedrijven die gebruik maken van factoring hebben geen financiële problemen, maar doen dit omdat zij bijvoorbeeld snel (willen) groeien. Zij hebben voldoende liquide middelen nodig om deze groei te financieren. SOOF Factoring neemt het debiteurenbeheer op professionele wijze over.
        `
    },
    {
        question: 'Wat is mijn kredietrisico s?',
        answer: `
          SOOF Factoring neemt het eventuele kredietrisico dat de opdrachtgever niet betaalt van je over. Op deze manier werkt onze dienstverlening ook nog eens als een kredietverzekering. In het geval van een faillissement van een opdrachtgever lijd je geen verlies. Wanneer een goedgekeurde opdrachtgever toch niet aan zijn financiële verplichtingen kan voldoen, dan komt dat voor rekening van SOOF Factoring. Met facturering via SOOF Factoring is je liquiditeit dus verzekerd en je kredietrisico afgedekt.
        `
    },
    {
        question: 'Welke facturen kan ik wel insturen en welke facturen niet?',
        answer: `
           - SOOF Factoring accepteert alleen vorderingen op bedrijven, niet op particulieren;
- De vorderingen hoeven niet branche-gebonden te zijn;
- Er geldt geen minimum of maximum bedrag;
- SOOF Factoring accepteert alleen onbetwiste vorderingen;
- Er geldt geen minimum of maximum aantal voor de vorderingen die je ons toestuurt. Je beslist daar zelf over, afhankelijk van je eigen cash behoefte of omzet;
- Je opdrachtgever dient kredietwaardig te zijn (volgens beoordeling SOOF Factoring).
        `
    }
];


const Algemene = () => {
    return (
        <div className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
                <section id='privacy-beleid' className="text-secondary space-y-6">
                    <h1 className="text-4xl font-bold text-center mb-6">Veelgestelde vragen</h1>
                    <div >
                        <p className='text-2xl font-bold mt-12 mb-4'>Aanmelden bij SOOF</p>
                        {Aanmelden.map((item, index) => (
                            <AnimatedFAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                        <p className='text-2xl font-bold mt-12 mb-4'>Financiëel</p>
                        {Financiëel.map((item, index) => (
                            <AnimatedFAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                        <p className='text-2xl font-bold mt-12 mb-4'>Overige vragen</p>
                        {OverigeVragen.map((item, index) => (
                            <AnimatedFAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                        <p className='text-2xl font-bold mt-12 mb-4'>Risico's</p>
                        {Riskos.map((item, index) => (
                            <AnimatedFAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Algemene;


