<template>
  <div>
    <input type="text" placeholder="Hva ser du etter i dag?" />
    <div>
      <button @click="fetchData">Søk</button>
    </div>
    <div>
        <!-- <h1>API data from Rider</h1> -->
        <pre>{{ myData }}</pre>
    </div>
  </div>
</template>

<script>
// export default {
//     data() {
//         return {
//             myData: "Laster... "
//         }
//     },
//     // async mounted() { // Kjøres når komponenten er ferdig lastet
//     //     await this.fetchData();
//     // },
//         methods: {
//             async fetchData() {
//              try {
//             const response = await fetch('http://localhost:5072/api/Notes');
//             if(!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.text();
//             console.log(data);
//             //lagre data i en variabel inni Vue-komponenten, så du kan bruke den i HTML-en.
//             this.myData = data;
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 this.myData = "Kunne ikke hente data";
//             }

//             }
//         }
//     }

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
