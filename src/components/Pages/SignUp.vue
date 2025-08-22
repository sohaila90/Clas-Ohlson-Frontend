<template>
  <img class="logo" src="../src/assets/Clas_Ohlson.svg (1).png" />
  <p>Bli medlem</p>
  <div>
    <p>Fornavn</p>
    <input type="text" v-model="firname" placeholder="Skriv inn ditt fornavn" />
    <p>Etternavn</p>
    <input
      type="text"
      v-model="lastName"
      placeholder="Skriv inn ditt etternavn"
    />
    <p>E-post</p>
    <input type="text" v-model="email" placeholder="Skriv inn din e-post" />
    <p>Mobilnummer</p>
    <input type="number" v-model="number" placeholder="+47" />
    <input
      type="password"
      v-model="password"
      placeholder="Lag et nytt passord"
    />
    <input type="password" v-model="password" placeholder="Gjenta passordet" />
    <button @click="singUpBtn()">Bli medlem</button>

    <p>Api fra Rider</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.firname }} {{ user.lastName }} {{ user.email }}
        {{ user.number }} {{ user.password }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      firname: "",
      lastName: "",
      email: "",
      number: "",
      password: "",
      users: [], // vi lager tom liste til å begynne med
    };
  },
  methods: {
    singUpBtn() {
      this.firname = {
        name: "Sohaila",
      };
      console.log("funker dette tro?", this.firname);
    },

    async fetchData() {
      try {
        const response = await fetch("http://localhost:5072/users");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        this.users = data;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
  mounted() {
    // kjører fetchdata når comp starter
    this.fetchData();
  },
};
</script>

<style>
.logo {
  width: 200px;
  height: auto;
}
</style>
