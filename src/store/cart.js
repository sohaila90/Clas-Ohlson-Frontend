import { spread } from "axios";
import { ref } from "vue";
export const cart = ref([]); //cart er reaktivt nå med ref

// fjern denne senere 
cart.value = [];

export function addProduct(product) {
  // cart.value.push(product);
  const item = cart.value.find((findItem) => findItem.id == product.id);
  if (item) {
    item.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
  console.log("Handlekurv nå:", cart.value);
}

export function removeProduct(item) {
  cart.value = cart.value.filter((p) => p.id !== item.id); // fjerner produkt på første match på id
  console.log("Hallo:", cart.value);
}

export function reduceBtn(product) {
  const item = cart.value.find((p) => p.id === product.id);
  
  if(!item) return;

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    // hvis den var 1 fjern fra kurven
    cart.value = cart.value.filter((p) => p.id !== item.id);
    console.log("lalal", cart.value);
  }
}
