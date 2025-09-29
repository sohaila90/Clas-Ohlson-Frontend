<script setup>
import { ref } from "vue";
import { cart, addProduct, reduceBtn } from "@/store/cart";

const showCart = ref(false);
</script>

<template>
  <section id="dashboard" class="flex justify-between items-center p-4 bg-blue-500">

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
      {{ 
      cart.reduce((total, item) => total + item.quantity, 0) 
      }}
     </span>
     </div>
    <!-- Handlekurv pop-up -->
    <div v-if="showCart" class="p-4 bg-white shadow rounded mt-4">
      <h2 class="font-bold mb-2">Handlekurv</h2>
      
      <ul>
        <li v-for="item in cart" :key="item.id" 
        class="flex items-center gap-2">
          <span class="flex-1">{{ item.name }} - {{ item.price * item.quantity }} kr</span>

          <!-- minus btn -->
           <button
           @click="reduceBtn(item)"
           class="px-2 bg-red-500 text-white rounded"
           >
           -
          </button>

          <!-- antall -->
           <span class="w-6 text-center">{{ item.quantity }}</span>
        
           <!-- pluss -->
            <button
            @click="addProduct(item)"
            class="px-2 bg-green-500 text-white rounded"
            >
            +
            </button>

            <!-- fjerne helt -->
          <!-- <button 
          @click="removeProduct(item)" 
          class="text-red-500 hover:text-red-700"
          >
          ❌
        </button> -->
        </li>

        <li class="font-bold border-t mt-2 pt-2">
          Totalt: {{ 
            cart.reduce((total, item) => total + item.price * item.quantity, 0) 
           }} kr

        </li>
      </ul>

    </div>
  </section>

    <div class="card">
    
    </div>

  <div>

    <div class="relative w-full max-w-lg mx-auto">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <!-- Forstørrelseglass-ikon -->
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 + 1110.5 3a7.5 7.5 0 016.15 13.65z" />
         </svg>
      </span>
    <input
      type="text"
      placeholder="Hva ser du etter i dag?"
      class="
      w-full
      pl-10
      pr-4
      py-2
      rounded-lg
      border
      border-gray-300
      bg-white
      text-gray-800
      placeholder-gray-400
      shadow-sm
      focus:outline-none
      focus:ring-2
      focus:ring-[#003DA5]
      focus:border-[#003DA5]
      transition
      duration-200
      hover:border-gray-400
      "
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
  </div>
</template>


