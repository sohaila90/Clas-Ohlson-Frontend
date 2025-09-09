<script setup>
import { useRoute } from "vue-router";
import { products } from "@/data/products";

const route = useRoute();
const id = Number(route.params.id);
const product = products.find((p) => p.id === id);
</script>

<template>
    <router-link 
    to="/electro"
    class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
    ← Tilbake
</router-link>
  <h1 class="text-3xl font-bold">{{ product.name }}</h1>
  <img class="w-64 h-64 object-cover" :src="product.image" alt="luftrenser" />
  <p class="text-xl">{{ product.price }},00</p>
  <p class="text-gray-600">(inkl. moms)</p>
  <p class="text-gray-600">{{ product.description }}</p>
  <p :class="product.inStock ? 'text-green-600' : 'text-red-600'">
    {{ product.inStock ? "På lager" : "Ikke på lager" }}
  </p>
  <button>Legg til i handlekurv</button>
</template>
