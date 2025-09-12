<script>
import Api from "@/services/Api";

export default {
  name: "ProductsApi",
  data() {
    return {
      products: [],
      name: "",
      price: "",
      category: "",
      image_url: "",
    };
  },

  async mounted() {
    const response = await Api.getProducts();
    this.products = response.data;
  },
};
</script>

<template>
<div v-for="product in products">
    {{ product.name }}
</div>
</template>
