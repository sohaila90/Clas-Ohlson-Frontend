<template>
  <section id="dashboard">
    <img class="logo" src="/src/assets/Clas_Ohlson.svg (1).png" />
    <div class="card">
      <h2>Velkommen</h2>
    </div>
  </section>
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

<script></script>

<style>
/* input[type="text"] {
  background-color: aquamarine;
  padding: 5px;
} */

/* button {
  color: rebeccapurple;
  padding: 10px;
  height: 40px;
  width: 100px;
} */
</style>
