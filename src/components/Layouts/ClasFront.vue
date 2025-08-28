<template>
  <section id="dashboard">
    <div class="card">
      <h2>Velkommen</h2>
    </div>
  </section>
   <div>
    <input type="text" placeholder="Hva ser du etter i dag?" />
    <div>
      <button @click="fetchData">Søk</button>
    </div>
  </div>
</template>

<script>


</script>

<style>
input[type="text"] {
  background-color: aquamarine;
  padding: 5px;
}

button {
  color: rebeccapurple;
  padding: 10px;
  height: 40px;
  width: 100px;
}
</style>
