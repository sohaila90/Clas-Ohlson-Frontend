<script setup>
import { ref, onMounted } from "vue";
import { cart, setCart, addProduct, reduceBtn } from "@/store/cart";
import Api from "@/services/Api";
import addToCartApi from "@/services/Api";

const products = ref([]);

onMounted(async () => {
  const response = await Api.getProducts();
  products.value = response.data;

  const cartResponse = await Api.getCartItems();
  setCart(cartResponse.data);
});

async function addToCart(product) {
  addProduct(product);
  try {
    await Api.addToCartApi({
      productId: product.id,
      quantity: 1,
      userId: 1,
    });
    console.log("Lagt til i kurven:", product.id);
  } catch (err) {
    console.error("Error status:", err.response?.status);
    console.error("Backend response:", err.response?.data);
    console.error("Full error:", err);
  }
}

async function removeFromCart(product) {
  reduceBtn(product);
  await Api.removeFromCart({
    productId: product.id,
    userId: 1,
  });
}
</script>

<template>
  <div class="bg-white-500 min-h-screen p-6">
    <!-- Overskrift -->
    <div class="mb-8">
      <h1 class="text-5xl text-coRed font-bold mb-2">Elektro</h1>
      <p class="text-xl text-coDark">
        God elektroprodukter gjør forskjell – fra sikker installasjon til riktig
        lys og smarte løsninger. Vi vet hvor viktig det er å lyse opp både
        hverdag og høytid, både sommer og vinter. Oppdag produkter som gir
        trygghet, komfort og kontroll, slik at du kan ta vare på det du liker –
        og få det til å vare!
      </p>
    </div>

    <!-- grid container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white border rounded-lg p-4 shadow hover:shadow-lg flex flex-col justify-between"
      >
        <router-link :to="'/product/' + product.id" class="block">
          <img
            :src="product.imageUrl"
            alt=""
            class="w-full h-48 object-contain rounded-md mb-4 bg-gray-100"
          />
          <h2 class="text-lg font-semibold mb-1 text-coDark">
            {{ product.name }}
          </h2>
          <p class="text-coDark font-medium mb-2">{{ product.price }} kr</p>
        </router-link>
        <button
          @click="addToCart(product)"
          class="w-full py-2 rounded bg-black text-white font-bold hover:bg-coAccent transition"
        >
          Legg i handlekurv
        </button>
      </div>
    </div>

    <!-- Handlekurv -->
    <div class="mt-10 bg-white p-4 rounded shadow-md max-w-md">
      <h2 class="text-xl font-bold mb-4 text-coDark">Handlekurv</h2>
      <ul class="space-y-3">
        <li
          v-for="item in cart"
          key="item.id"
          class="flex justify-between items-center"
        >
          <div>
            <span class="font-medium text-coDark">{{ item.name }}</span>
            <span class="text-coDark ml-2"
              >{{ item.price * item.quantity }} kr</span
            >
          </div>

          <!-- minus btn -->
          <div class="flex items-center gap-2">
            <button
              @click="removeFromCart(item)"
              class="px-2 bg-coRed text-white rounded hover:bg-coAccent transition"
            >
              -
            </button>

            <!-- vis antall -->
            <span class="w-6 text-center text-coDark">{{ item.quantity }}</span>

            <!-- pluss btn -->
            <button
              @click="addToCart(item)"
              class="px-2 bg-coRed text-white rounded hover:bg-coAccent transition"
            >
              +
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
