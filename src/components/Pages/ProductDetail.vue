<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Api from "@/services/Api";
import { addProduct } from "@/store/cart";

const route = useRoute();
const product = ref(null);

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
    <router-link to="/electro" class="text-blue-500 undeline">
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

  <button
    @click="addProduct(product)"
    class="mt-3 w-full bg-black text-white font-bold py-2 rounded hover:bg-grey-500"
  >
    Legg til i handlekurv
  </button>
</template>
