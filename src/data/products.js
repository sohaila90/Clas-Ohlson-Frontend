import pepperkakehus from "@/assets/pepperkakehus.png";
import kamera from "@/assets/kamera.png";
import luftrenser from "@/assets/luftrenser.avif";
import utelampe from "@/assets/utelampe.avif";




export const products = [
  { id: 1, 
    name: "Luftrenser", 
    price: 1999, 
    image: luftrenser,
    description: " Renser luften for pollen, støv, mugg og røyk i hjemmet. Stillegående luftrenser – effektiv i større rom opptil 50 m². Fanger partikler ned til PM2,5 – vanlige i bymiljø. Med 5 viftehastigheter, berøringspanel, barnesikring og stillegående nattmodus. Timer og 3-trinns filtrering. Diameter: 29 cm. Høyde: 53,5 cm.",
    inStock: true,
},

  { id: 2, 
    name: "Utelampe", 
    price: 1199, 
    image: utelampe,
    description: " Lys opp huset ditt med en utelampe! Perfekt som vegglampe på husfasade, garasje etc. Velg lyskilde med lyssensor som passer seg selv. Høyde 36 cm.",
    inStock: true,
},

  { id: 3, 
    name: "Overvåkningskamera", 
    price: 2190, 
    image: kamera,
    description:  "Justerbar vinkel – 0 til 315 graders panorering og 0 til 75 graders tilt. Deltaco overvåkningskamera innendørs – Full HD-oppløsning.Infrarødt nattsyn med opptil 8 meters rekkevidde.Toveislys for enkel kommunikasjon via kameraet.Koble til mobilen og styr kameraet med smarttelefonen din via Deltaco Smart Home-appen.", 
    inStock: true,
},

  {
    id: 4,
    name: "Batteridrevet pepperkakehus",
    price: 150,
    image: pepperkakehus,
    description: " Pynt med et fargerikt lite pepperkakehus og tenn lyset i de små vinduene. Batteridrevet pepperkakehus med tidsur – lyser i 6 timer, slår seg automatisk av i 18 timer. Laget av solid polyresin – du kan bruke julepynten år etter år. Batteridrevet og kompakt, enkel å plassere i vinduet, på hyllen eller som en del av juledekorasjonen. Mål: 10 x 10 x 13,5 cm. Drives med 2 x AAA/LR03-batterier (selges separat).",
    inStock: true,
  },
];