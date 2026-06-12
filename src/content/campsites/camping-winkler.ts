import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-winkler";

const campingWinkler: CampsiteConfig = {
  name: "Strandcamping Winkler",
  shortName: "Winkler",
  slug: "camping-winkler",
  ort: "Seeboden am Millstätter See",
  region: "Kärnten",
  brandKind: "Strandcamping am Millstätter See",
  see: "Millstätter See",
  regionLong: "Region Millstätter See · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Dein Sommerplatz direkt am Millstätter See",
  claimEmphasis: "am Millstätter See",
  emailDetail: "euer eigener Zugang zur Liegewiese direkt am Seeufer",
  intro:
    "Ein gepflegter Rasenplatz mitten in der Kurzone von Seeboden, exklusiver Zugang zur Liegewiese am Seeufer und kurze Wege zu Bergen und Radwegen — hier kommst du an, und der Millstätter See liegt direkt vor dir.",

  statement: {
    text: "Die Liegewiese am Seeufer ist nur für unsere Gäste — der Millstätter See beginnt gleich hinter deinem Stellplatz.",
    emphasis: "nur für unsere Gäste",
  },

  pillars: [
    {
      title: "Direkt am Millstätter See",
      text: "Klares Wasser, Liegewiese am Ufer und kurze Wege zum Baden — der See gehört bei uns zum Urlaubstag dazu.",
      image: { src: `${IMG}/gallery-ecca0bbd52.webp`, alt: "Uferpromenade am Millstätter See in Seeboden" },
    },
    {
      title: "Familiäre Atmosphäre",
      text: "Ein Rasenplatz in der Kurzone, gepflegte Wege und persönlicher Empfang — bei Strandcamping Winkler erholt man sich in familiärer Atmosphäre.",
      image: { src: `${IMG}/gallery-87d8c9eb74.webp`, alt: "Stellplätze auf dem Rasenplatz von Strandcamping Winkler unter einem Regenbogen" },
    },
    {
      title: "Gepflegte Sanitäranlagen",
      text: "Moderne, sehr gepflegte Sanitäranlagen und eine Wohnmobil-Servicestation — bei Strandcamping Winkler gehört das zum Standard.",
      image: { src: `${IMG}/gallery-99362704a6.webp`, alt: "Modernes Sanitärgebäude von Strandcamping Winkler mit Holzpergola" },
    },
  ],

  usps: [
    "Exklusiver Seezugang",
    "Zentral in der Kurzone",
    "Moderne Sanitäranlagen",
    "Wohnmobil-Servicestation",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Darauf ist am Millstätter See Verlass",
    headingEmphasis: "am Millstätter See",
    intro:
      "Familiäre Atmosphäre, ein zentral gelegener Rasenplatz und exklusiver Seezugang — bei Strandcamping Winkler ist alles Wichtige fußläufig und der Empfang persönlich.",
  },

  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: {
      src: `${IMG}/gallery-10cca3a030.webp`,
      alt: "Wohnmobil-Stellplatz auf dem Rasenplatz von Strandcamping Winkler",
    },
  },

  camping: {
    heading: "Campingplatz mitten in der Kurzone",
    intro:
      "Ebener Rasenplatz, gepflegte Sanitäranlagen und der See gleich nebenan — bei Strandcamping Winkler liegt alles nah beieinander.",
    features: [],
  },

  anreise: {
    heading: "So erreichst du Seeboden",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 Tauern Autobahn bis zur Abfahrt Seeboden/Spittal, dann wenige Minuten an den Millstätter See — der Platz liegt zentral in Seeboden.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Spittal-Millstättersee an der Tauernbahn, von dort per Bus oder Taxi nach Seeboden in rund 15 Minuten.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Klagenfurt liegt etwa eine Autostunde entfernt, Salzburg rund zwei Stunden.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Millstätter See",
    headingEmphasis: "Millstätter See",
    intro:
      "Glasklares Wasser, Wanderwege und lange Sommertage — ein paar Eindrücke aus der Region rund um Seeboden.",
    tag: "Mai bis September",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am See",
    headingEmphasis: "am See",
    intro:
      "Wähle Zeitraum und Stellplatz — wir bestätigen deine Reservierung persönlich per E-Mail oder Telefon.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Vorsaison · Stellplatz inkl. 2 Erwachsene · zzgl. Ortstaxe € 2,70 pro Erwachsenem & Umweltabgabe · Hauptsaison höher",
    highlight: {
      title: "Seezugang inklusive",
      text: "Der Zugang zur Liegewiese am Millstätter See ist für unsere Gäste inklusive.",
    },
    categories: [
      { id: "stellplatz-strom", label: "Stellplatz mit Strom", perNight: 44.9, perExtraGuest: 11.2 },
      { id: "stellplatz", label: "Stellplatz ohne Strom", perNight: 39.9, perExtraGuest: 11.2 },
      { id: "zelt", label: "Zeltplatz", perNight: 36.2, perExtraGuest: 11.2 },
    ],
  },

  kontakt: {
    tel: "+43 4762 81927",
    telHref: "tel:+43476281927",
    mail: "info@camping-winkler.at",
    adresse: "Seepromenade 33 · 9871 Seeboden am Millstätter See · Kärnten",
    coords: { lat: 46.8152266, lng: 13.5204601 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default campingWinkler;
