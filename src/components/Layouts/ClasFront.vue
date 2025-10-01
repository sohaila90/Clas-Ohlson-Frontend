<script setup>
import { ref } from "vue";
import { cart, addProduct, reduceBtn } from "@/store/cart";
import ClasLogo from "@/assets/ClasLogo.png";

const showCart = ref(false);
const showMenu = ref(false); // Til hamburger-menyen
</script>

<template>
  <header class="w-full bg-[#00AEEF]">
    <!-- Øverste rad: logo og ikoner -->
    <div class="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
      <!-- Logo -->
      <img class="h-14" :src="ClasLogo" alt="Clas Ohlson logo" />

      <!-- Ikoner -->
      <div class="flex items-center gap-6 text-white text-xl">
        <!-- Hamburger-meny -->
        <button @click="showMenu = !showMenu" class="hover:text-gray-200">☰</button>

        <!-- Konto / profil -->
        <button class="hover:text-gray-200">👤</button>

        <!-- Handlekurv -->
        <div class="relative">
          <button @click="showCart = !showCart" class="hover:text-gray-200">
            🛒
          </button>
          <span
            v-if="cart.length > 0"
            class="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-0.5 pointer-events-none"
          >
            {{ cart.reduce((total, item) => total + item.quantity, 0) }}
          </span>

          <!-- Handlekurv popup -->
          <div
            v-if="showCart"
            class="absolute right-0 mt-2 w-72 p-4 bg-white shadow-lg rounded-lg z-50 text-black"
          >
            <h2 class="font-bold mb-2">Handlekurv</h2>
            <ul>
              <li v-for="item in cart" :key="item.id" class="flex items-center justify-between gap-2 mb-2">
                <span class="flex-1">{{ item.name }} - {{ item.price * item.quantity }} kr</span>
                <div class="flex items-center gap-1">
                  <button @click="reduceBtn(item)" class="px-2 bg-red-500 text-white rounded">-</button>
                  <span class="w-6 text-center">{{ item.quantity }}</span>
                  <button @click="addProduct(item)" class="px-2 bg-green-500 text-white rounded">+</button>
                </div>
              </li>
              <li class="font-bold border-t pt-2">
                Totalt: {{ cart.reduce((total, item) => total + item.price * item.quantity, 0) }} kr
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Hamburger-meny links -->
    <div v-if="showMenu" class="bg-[#0072CE] text-white px-6 py-4 md:hidden">
      <ul class="flex flex-col gap-3">
        <li><a href="#" class="hover:underline">Forside</a></li>
        <li><a href="#" class="hover:underline">Produkter</a></li>
        <li><a href="#" class="hover:underline">Tilbud</a></li>
        <li><a href="#" class="hover:underline">Kundeservice</a></li>
      </ul>
    </div>

    <!-- Søkelinje under logo -->
    <div class="px-6 pb-4">
      <div class="relative w-full max-w-4xl mx-auto">
        <span class="absolute inset-y-0 left-3 flex items-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Hva ser du etter i dag?"
          class="w-full pl-10 pr-4 py-3 rounded-full bg-white text-gray-800
                 placeholder-gray-500 focus:outline-none focus:ring-2
                 focus:ring-[#0072CE] focus:border-[#0072CE] transition text-lg"
        />
        <button
          class="absolute right-0 top-0 mt-3 mr-1 bg-[#0072CE] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#005FA8] transition"
        >
          Søk
        </button>
      </div>
    </div>
  </header>
</template>
