<script setup>
import pepperkakehus from "@/assets/pepperkakehus.avif";
const products = [
  { id: 1, name: "Luftrenser", price: 1999 },
  { id: 2, name: "Utelampe", price: 1199 },
  { id: 3, name: "Overvåkningskamera", price: 2190 },
  {
    id: 4,
    name: "Batteridrevet pepperkakehus",
    price: 150,
    image: "pepperkakehus",
  },
];
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold">Elektro</h1>
    <p>
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
    </ul>
  </div>
</template>

<style scoped></style>
