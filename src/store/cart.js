import { ref } from "vue";
export const cart = ref([]); //cart er reaktivt nå med ref

export function addProduct(product) {
    cart.value.push(product);
    console.log("Handlekurv nå:", cart.value);
}

export function removeProduct(item) {
    cart.value = cart.value.filter((p) => p.id !== item.id); // fjerner produkt på første match på id
    console.log("Hallo:",cart.value);
}