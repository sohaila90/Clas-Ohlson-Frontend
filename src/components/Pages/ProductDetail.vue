<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Api from "@/services/Api";
import { addProduct } from "@/store/cart";

// Hent id fra url
const route = useRoute();
const product = ref(null);

// Når comp laster inn hent produktet fra API
onMounted(async () => {
  try {
    const response = await Api.getProduct(route.params.id);
    product.value = response.data;
    console.log("Hentet produkt:", product.value);
  } catch (err) {
    console.error("Feil ved henting av produkt", err);
  }
});
</script>

<template>
  <div v-if="product" class="p-6">
    <router-link
      to="/electro"
      class="text-blue-500 undeline">
      ← Tilbake
    </router-link>

    <h1 class="text-3xl font-bold">{{ product.name }}</h1>
    <img 
    class="w-64 h-64 object-cover" 
    :src="product.imageUrl"
    :alt="product.name" 
    />
    <p class="text-xl">{{ product.price }},00</p>
    <p class="text-gray-600">(inkl. moms)</p>
    <p class="text-gray-600">{{ product.category }}</p>
  </div>

    <!-- <p :class="product.inStock ? 'text-green-600' : 'text-red-600'">
    {{ product.inStock ? "På lager" : "Ikke på lager" }}
  </p> -->
  <button @click="addProduct(product)"
  class="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
  Legg til i handlekurv</button>
</template>
