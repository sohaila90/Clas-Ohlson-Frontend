<script setup>
import { cart } from "@/store/cart"
import { ref } from "vue";

const showCart = ref(false);
</script>

<template>
  <section id="dashboard" class="flex justify-between items-center p-4 bg-gray-100">

    <img class="h-12" src="/src/assets/Clas_Ohlson.svg (1).png" />
    <div class="relative">
    <button @click="showCart = !showCart" class="text-2xl"> 
       🛒
    </button>
    <!-- Boble med antall -->
     <span
     v-if="cart.length > 0"
     class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 pointer-events-none"
     >
      {{ cart.length }}
     </span>
     </div>
    <!-- Handlekurv pop-up -->
    <div v-if="showCart" class="p-4 bg-white shadow rounded mt-4">
      <h2 class="font-bold mb-2">Handlekurv</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.price }},-
        </li>
      </ul>

    </div>
  </section>

    <div class="card">
      <h2>Velkommen</h2>
    </div>
  <div>
    <input
      type="text"
      placeholder="Hva ser du etter i dag?"
      class="text-pink px-4 py-2 rounded"
    />
    <div>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        @click="fetchData"
      >
        Søk
      </button>
    </div>
  </div>
</template>


