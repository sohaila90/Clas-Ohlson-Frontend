<script setup>
import { ref } from "vue";
import { cart, removeProduct, addProduct, reduceBtn } from "@/store/cart";

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


