<script setup>
import { useRoute } from "vue-router";
import { products } from "@/data/products";

const route = useRoute();
const id = Number(route.params.id);
const product = products.find((p) => p.id === id);
</script>

<template>
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
