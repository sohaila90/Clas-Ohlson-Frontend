import { spread } from "axios";
import { ref } from "vue";
export const cart = ref([]); //cart er reaktivt nå med ref

// fjern denne senere 
// cart.value = [];

// setter hele cart når man heter fra back
export function setCart(items) {
  cart.value = items;
}

export function addProduct(product) {
  const existing = cart.value.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity+= 1;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
  console.log("Handlekurv nå:", cart.value);
}


// export function removeProduct(item) {
//   cart.value = cart.value.filter((p) => p.id !== item.id); // fjerner produkt på første match på id
//   console.log("Hallo:", cart.value);
// }

// reduser antall / fjern produkt
export function reduceBtn(product) {
  const existing = cart.value.find((p) => p.id === product.id);
  
  if(existing) {
    existing.quantity -= 1;
    if(existing.quantity <= 0) {
      cart.value = cart.value.filter((p) => p.id === product.id)
    }
  }

  // if (item.quantity > 1) {
  //   item.quantity--;
  // } else {
  //   // hvis den var 1 fjern fra kurven
  //   cart.value = cart.value.filter((p) => p.id !== item.id);
  //   console.log("lalal", cart.value);
  // }
}
