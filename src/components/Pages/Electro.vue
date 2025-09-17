<script setup>
import { ref, onMounted } from "vue";
import { cart, addProduct, reduceBtn } from "@/store/cart";
import Api from "@/services/Api";

const products = ref([]);

onMounted(async () => {
  const response = await Api.getProducts();
  products.value = response.data;
});
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
  </div>

  <!-- grid container -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="border rounded-lg p-6 shadow hover:shadow-lg transition"
    >
      <router-link :to="'/product/' + product.id" class="block">
        <img
          :src="product.imageUrl"
          alt="pepperkakehus"
          class="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        <p class="text-gray-700">{{ product.price }}</p>
      </router-link>
      <button
        @click="addProduct(product)"
        class="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Legg i handlekurv
      </button>
    </div>
  </div>
  // Se handlekurv
  <h2 class="mt-8 text-xl font-bold">Handlekurv</h2>
  <ul>
    <li v-for="item in cart" :key="item.id" class="flex items-center gap-2">
      <span>{{ item.name }} - {{ item.price * item.quantity }} kr</span>

      <!-- minus btn -->
       <div class="flex items-center gap-2">
      <button
        @click="reduceBtn(item)"
        class="px-2 bg-red-500 text-white rounded"
      >
        -
      </button>

      <!-- vis antall -->
      <span class="w-6 text-center">{{ item.quantity }}</span>

      <!-- pluss btn -->
      <button @click="addProduct(item)"
      class="px-2 bg-green-500 text-white rounded">+</button>
      </div>
    </li>
  </ul>
</template>
