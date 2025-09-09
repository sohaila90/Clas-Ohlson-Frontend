import { ref } from "vue";
export const cart = ref([]); //cart er reaktivt nå med ref

export function addProduct(product) {
    cart.value.push(product);
    console.log("Handlekurv nå:", cart.value);
}

export function removeProduct() {
    cart.value = cart.value.filter((p) => p.id !== productId); // fjerner produkt på første match på id
}