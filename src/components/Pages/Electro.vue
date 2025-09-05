<script setup>
import pepperkakehus from "@/assets/pepperkakehus.png";
import kamera from "@/assets/kamera.png";
import luftrenser from "@/assets/luftrenser.avif";
import utelampe from "@/assets/utelampe.avif";
const products = [
  { id: 1, name: "Luftrenser", price: 1999, image: luftrenser },

  { id: 2, name: "Utelampe", price: 1199, image: utelampe },

  { id: 3, name: "Overvåkningskamera", price: 2190, image: kamera },

  {
    id: 4,
    name: "Batteridrevet pepperkakehus",
    price: 150,
    image: pepperkakehus,
  },
];
</script>

<template>
  <div>
    <h1 class="text-5xl text-pink-500 font-bold">Elektro</h1>
    <p class="text-xl text-violet-700">
      God elektroprodukter gjør forskjell – fra sikker installasjon til riktig
      lys og smarte løsninger. Vi vet hvor viktig det er å lyse opp både hverdag
      og høytid, både sommer og vinter. Oppdag produkter som gir trygghet,
      komfort og kontroll, slik at du kan ta vare på det du liker – og få det
      til å vare!
    </p>

    <ul v-for="product in products">
      <img
        :src="product.image"
        alt="pepperkakehus"
        class="w-40 h-40 object-cover"
      />
      <li>{{ product.name }}</li>
      <li>{{ product.price }}</li>
      <button>Legg til i handlekurv</button>
    </ul>
  </div>
</template>

<style scoped></style>
