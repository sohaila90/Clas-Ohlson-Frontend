<script>
// import { banners } from "@/data/banners";
import { cart } from "@/store/cart";
import { addProduct } from "@/store/cart";
import Api from "@/services/Api";

export default {
  name: "Electro",
  data() {
    return {
      products: [], // fylles opp fra API
      // name: "",
      // price: "",
      // category: "",
      // image_url: "",
    };
  },

  async mounted() {
    const response = await Api.getProducts();
    this.products = response.data;
  },
};
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
          :src="product.image_url"
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
</template>
