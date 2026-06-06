import type { CampsiteConfig } from "../types";

/**
 * Camping Winkler (Strandcamping Winkler) — Seeboden am Millstätter See, Kärnten.
 * Alle Texte/Fakten belegt aus camping-winkler.at (Stand-Scrape 2026-06).
 * EHRLICH:
 *  - Der ebene Rasenplatz liegt ZENTRAL in der Kurzone von Seeboden, nicht direkt
 *    am Wasser. Der Platz besitzt aber eine EIGENE Liegewiese DIREKT am See, die
 *    den Gästen exklusiv offensteht (Quelle) → `see` gesetzt, "am See" ehrlich.
 *  - KEINE Mietunterkünfte (nur Zelt-/Stellplätze) → `mobilheime` entfällt.
 *  - Eigene Platzfotos (Stellplatz, Sanitär, Seeufer/Klingerpark) ohne Wasser-
 *    zeichen; Region-/Erlebnisbilder = offizielle Fotos der Millstätter See
 *    Tourismus GmbH (wasserzeichenmarkiert), wie auf der Originalseite — nur als
 *    Region/Erlebnis betitelt, nie als Platzeigentum. Im REPORT geflaggt.
 *  - Kein eindeutiges Logo in der Bildbibliothek (nur Google-Translate-Logos) →
 *    `logo` entfällt, Footer nutzt die Wortmarke.
 *  - Keine Auszeichnung in der Quelle → `awards` bleibt leer.
 *  - Preise = reale Preisliste Saison 2026; Kalkulator zeigt transparente
 *    Vorsaison-Richtwerte (Platz + 2 Erw. inkl. Kurtaxe & Umweltgebühr).
 */
const IMG = "/campsites/camping-winkler";

export const campingWinkler: CampsiteConfig = {
  name: "Camping Winkler",
  shortName: "Camping Winkler",
  slug: "camping-winkler",
  ort: "Seeboden am Millstätter See",
  region: "Kärnten",
  brandKind: "Camping",
  see: "Millstätter See",
  regionLong: "Urlaubsregion Millstätter See · Kärnten · Österreich",

  claim: "Dein Campingsommer am Millstätter See",
  claimEmphasis: "am Millstätter See",
  intro:
    "Ebener Rasenplatz mitten in der Kurzone von Seeboden — mit moderner Ausstattung und exklusivem Zugang zu unserer Liegewiese direkt am Millstätter See. Erholung in familiärer Atmosphäre.",

  // Kein eindeutiges Platz-Logo in der Bildbibliothek → Wortmarke im Footer.

  statement: {
    text: "Bei uns beginnt der Urlaub am See — zentral in Seeboden, mit eigener Liegewiese direkt am Millstätter See.",
    emphasis: "direkt am Millstätter See",
  },

  pillars: [
    {
      title: "Direkt am Millstätter See",
      text: "Als Campinggast genießt du exklusiven Zugang zu unserer Liegewiese direkt am See — ideal für sonnige Badetage am Wasser.",
      image: { src: `${IMG}/baden-millstaettersee.webp`, alt: "Kinder beim Baden im klaren Millstätter See" },
    },
    {
      title: "Berge, Wege & Aussichten",
      text: "Rund um Seeboden laden Wander- und Radwege ein — vom Seeufer bis hinauf zu den Aussichtsplätzen in den Nockbergen.",
      image: { src: `${IMG}/aussichtsplattform-mirnock.webp`, alt: "Aussichtsplattform mit Blick über den Millstätter See" },
    },
    {
      title: "Aktiv in der Region",
      text: "Biken, Schwimmen, Wassersport oder ein Bummel durch Seeboden — die Urlaubsregion Millstätter See beginnt direkt vor dem Platz.",
      image: { src: `${IMG}/mountainbike-millstaettersee.webp`, alt: "Mountainbiken in den Bergen über dem Millstätter See" },
    },
  ],

  usps: [
    "Eigene Liegewiese am See",
    "Zentral in der Kurzone",
    "Moderne Sanitäranlagen",
    "Wohnmobil-Servicestation",
    "Kinderspielplatz nebenan",
    "Hunde willkommen",
    "Familiäre Atmosphäre",
  ],

  trust: {
    heading: "Worauf du dich bei Camping Winkler verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Dr. Edda Winkler, zentral in der Kurzone von Seeboden, mit eigener Liegewiese direkt am Millstätter See und moderner Ausstattung — die Basis für entspannte Tage in Kärnten.",
  },

  // Keine eindeutige Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "17. Mai", bis: "Ende September" },

  hero: {
    aerial: { src: `${IMG}/campingplatz-stellplatz.webp`, alt: "Stellplatz mit Wohnmobil und modernem Servicegebäude am Campingplatz Winkler in Seeboden" },
  },

  camping: {
    heading: "Unser Campingplatz",
    intro:
      "Ebener Rasenplatz in zentraler Lage inmitten der Kurzone von Seeboden — mit moderner Ausstattung, gepflegten Sanitäranlagen und exklusivem Zugang zur Liegewiese am See.",
    features: [
      {
        title: "Rasenplatz in zentraler Lage",
        text: "Unser ebener Rasenplatz liegt mitten in der Kurzone von Seeboden — ruhig, zentral und ein idealer Ausgangspunkt für Ausflüge und Bergtouren.",
        image: { src: `${IMG}/campingplatz-panorama.webp`, alt: "Campingplatz Winkler mit Stellplätzen und Blick auf die Berge" },
      },
      {
        title: "Sanitär & Wohnmobil-Servicestation",
        text: "Moderne Ausstattung, sehr gepflegte Sanitäranlagen und eine Wohnmobil-Servicestation sorgen für unbeschwerten Komfort.",
        image: { src: `${IMG}/sanitaergebaeude.webp`, alt: "Modernes Sanitär- und Servicegebäude am Campingplatz Winkler" },
      },
      {
        title: "Exklusiver Seezugang",
        text: "Unsere Campinggäste haben exklusiven Zugang zu einer Liegewiese direkt am Millstätter See — mit eigenem Kinderbereich am Ufer.",
        image: { src: `${IMG}/seeufer-klingerpark.webp`, alt: "Seeufer mit Blick auf den Millstätter See in Seeboden" },
      },
    ],
  },

  // Keine Mietunterkünfte (nur Zelt-/Stellplätze) → mobilheime entfällt.
  // Kein eigenes Foto von Spielplatz/Kinderbereich → kinder-Sektion entfällt;
  // das Familienangebot ist in usps/camping/booking ehrlich beschrieben.
  // Aktivitäten der Region werden in der Galerie gezeigt (eigene Sektion entfällt,
  // da nicht genug eindeutig zuordenbare Bilder).

  anreise: {
    heading: "So findest du uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Seepromenade 33, mitten in Seeboden — ein idealer Stopp auch auf der Durchreise Richtung Italien oder Slowenien.",
      },
      {
        title: "Zentrale Lage",
        text: "Inmitten der Kurzone, nur wenige Schritte zum Millstätter See sowie zu Geschäften, Lokalen und Supermärkten in Seeboden.",
      },
      {
        title: "Öffnungszeiten",
        text: "Saison 17. Mai bis Ende September 2026. Rezeption täglich von 08:00–12:00 und 14:00–19:00 Uhr.",
      },
    ],
  },

  galerie: {
    heading: "Die Region Millstätter See",
    headingEmphasis: "Millstätter See",
    intro:
      "Baden, Radeln, Wandern und Wassersport — ein paar Eindrücke aus der Urlaubsregion rund um Seeboden am Millstätter See.",
    tag: "Mai bis September",
    images: [
      { src: `${IMG}/radfamilie-seeufer.webp`, alt: "Familie radelt am Ufer des Millstätter Sees" },
      { src: `${IMG}/schnorcheln-millstaettersee.webp`, alt: "Schnorcheln im klaren Wasser des Millstätter Sees" },
      { src: `${IMG}/kanu-drau.webp`, alt: "Kanutour auf der Drau in der Region" },
      { src: `${IMG}/granattor-nockberge.webp`, alt: "Das Granattor in den Nockbergen über dem Millstätter See" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Platzart und Personen — wir melden uns mit deiner persönlichen Verfügbarkeit für Camping Winkler in Seeboden.",
    pricesArePlaceholder: false,
    priceNote: "Richtwert: Platz + 2 Erw., Vorsaison – inkl. Kurtaxe & Umweltgebühr. Hauptsaison & weitere Gäste lt. Preisliste. Zahlung nur in bar (Euro).",
    highlight: {
      title: "Seezugang inklusive",
      text: "Der Zugang zu unserer Liegewiese direkt am Millstätter See ist im Preis inkludiert.",
    },
    categories: [
      // Reale Preisliste Saison 2026, Vorsaison-Richtwert pro Nacht =
      // Platzgebühr + 2 Erwachsene (€11,20) + Kurtaxe (2×€2,70) + Umweltgebühr (€3,60).
      // perExtraGuest = weiterer Erwachsener (€11,20) + Kurtaxe (€2,70) = €13,90 ≈ €14.
      { id: "zelt", label: "Zeltplatz", perNight: 45, perExtraGuest: 14 },
      { id: "stellplatz", label: "Stellplatz ohne Strom", perNight: 49, perExtraGuest: 14 },
      { id: "stellplatz-strom", label: "Stellplatz inkl. Strom", perNight: 54, perExtraGuest: 14 },
    ],
  },

  kontakt: {
    tel: "+43 4762 81927",
    telHref: "tel:+43476281927",
    mail: "info@camping-winkler.at",
    adresse: "Seepromenade 33 · 9871 Seeboden am Millstätter See · Kärnten",
    // Explizite Koordinaten aus dem Google-Maps-Link der Kontaktseite (Ziel-Pin).
    coords: { lat: 46.8152266, lng: 13.5204601 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Rasenplatz", href: "#camping" },
        { label: "Sanitär & Service", href: "#camping" },
        { label: "Seezugang", href: "#camping" },
      ],
    },
    {
      label: "Region",
      href: "#galerie",
      children: [
        { label: "Millstätter See", href: "#galerie" },
        { label: "Baden & Wassersport", href: "#galerie" },
        { label: "Wandern & Radeln", href: "#galerie" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Tarife 2026", href: "#booking" },
        { label: "Saison", href: "#booking" },
      ],
    },
    {
      label: "Kontakt",
      href: "#anreise",
      children: [
        { label: "Anreise", href: "#anreise" },
        { label: "Öffnungszeiten", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingWinkler;
