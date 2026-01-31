// place files you want to import through the `$lib` alias in this folder.
export type WordItem = {
  word: string
  clue: string
  image: string
  link: string
}

export const words: WordItem[] = [
      { word: " thermal cycler", clue: "An instrument that cycles between temeperatures", image:"/images/thermalCyclers.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
      { word: " DNA polymerase", clue: "An enzyme that synthesizes long chains of nucleic acids from a template", image:"/images/ThermoTaqPolymerases.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
      { word: " EGel Power Snap Electrophoresis System", clue: "A benchtop system that seamlessly integrates DNA sample separation and gel imaging into one workflow", image:"/images/eGelElectrophoresis.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
      { word: " Qubit Fluorometer", clue: "An instrument that delivers fast, accurate, sensitive, and specific quantification of DNA, RNA, protein, and endotoxin detection", image:"/images/qubit.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
      { word: " real time PCR", clue: "A laboratory technique used to amplify and simultaneously quantify a targeted DNA molecule", image:"/images/RTpcrMachine.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
      { word: " fluorophore", clue: "A compound used in immunofluorescence microscopy", image:"/images/nhsFluoresceinKit.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
      { word: " electrophoresis", clue: "A technique used to separate molecules based on their charges", image:"/images/electrophoresis.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
      { word: " SYBR Safe", clue: "A compound used to stain DNA in agarose gels to visualize it under UV or blue light", image:"/images/sybrSafe.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
    ];


export const standardDNAPolymerases: WordItem[] = [
    {word: " Platinum Taq DNA Polymerase", clue: "A convenient and reliable hot start thermostable polymerase for PCR that provides enhanced specificity from Invitrogen.", image: "/images/PlatinumTaqDNAPolymerase.jpg", link: "https://www.thermofisher.com/order/catalog/product/10966083?SID=srch-srp-10966083"},
    {word: " DreamTaq DNA Polymerase", clue: "An polymerase with higher sensitivity, longer PCR products, and higher yields from Thermo Scientific.", image: "/images/DreamTaqDNAPolymerase.jpg", link: "https://www.thermofisher.com/order/catalog/product/EP0714?SID=srch-srp-EP0714"},
    {word: " Phire Hot Start II DNA Polymerase", clue: "A hot start polymerase that is faster, extremely robust, and can amplify long DNA fragments with high yields from Thermo Scientific.", image: "/images/PhireHotStartIIDNAPolymerase.jpg", link: "https://www.thermofisher.com/order/catalog/product/F124S?SID=srch-srp-F124S"},
    {word: " Phusion High Fidelity DNA Polymerases", clue: "A polymerase with an error rate 50-fold lower than that of Taq. Features short protocol times, even in the presence of PCR inhibitors from Thermo Scientific.", image: "/images/PhusionHighFidelityDNAPolymerases.jpg", link: "https://www.thermofisher.com/order/catalog/product/F124S?SID=srch-srp-F124S"},
    {word: " AccuPrime GC Rich DNA Polymerase", clue: "A polymerase designed to provide high-yield, high-specificity amplification of difficult-to-amplify templates, such as those with >65% GC content from Invitrogen", image: "/images/AccuPrimeGCRichDNAPolymerase.jpg", link: "https://www.thermofisher.com/order/catalog/product/12337024?SID=srch-srp-12337024"},
    {word: " AmpliTaq Gold three sixty DNA Polymerase", clue: "This polymerase amplifies targets present at low copy number and GC rich or degraded DNA templates from Applied Biosystems", image: "/images/AccuPrimeGCRichDNAPolymerase.jpg", link: "https://www.thermofisher.com/order/catalog/product/4398813?SID=srch-srp-4398813"},
    {word: " Platinum SuperFi II DNA Polymerase", clue: "A polymerase that combines superior fidelity with an innovative buffer, enabling universal primer annealing at 60°C from Invitrogen", image: "/images/PlatinumSuperFiIIDNAPolymerase.jpg", link: "https://www.thermofisher.com/order/catalog/product/12361250?SID=srch-srp-12361250"}
];

