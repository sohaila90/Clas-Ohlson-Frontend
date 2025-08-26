<template>
  <img class="logo" src="../src/assets/Clas_Ohlson.svg (1).png" />
  <p>Bli medlem</p>

  <form @submit.prevent="signUpBtn">
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

    <button type="submit">Bli medlem</button>
  </form>

  <p>Api fra Rider</p>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.firname }} {{ user.lastName }} {{ user.email }} {{ user.number }}
      {{ user.password }}
    </li>
  </ul>
</template>

<script>
import Api from "@/services/Api.js";

export default {
  name: "Signup",
  data() {
    return {
      users: [],
      firname: "",
      lastName: "",
      email: "",
      number: "",
      password: "",
    };
  },

  async mounted() {
    const response = await Api.getUsers();
    this.users = response.data;
  },

  methods: {
    async signUpBtn() {
      try {
        const newUser = {
          firname: this.firname,
          lastName: this.lastName,
          email: this.email,
          number: this.number,
          password: this.password,
        };

        const response = await Api.addUser(newUser);
        console.log("Bruker opprettet:", response.data);

        // legg til bruker i lista
        this.users.push(response.data);

        // tøm inputfeltene
        this.firname = "";
        this.lastName = "";
        this.email = "";
        this.number = "";
        this.password = "";
      } catch (error) {
        console.error("Feil ved registrerting", error);
      }
    },
  },
};
</script>

<style>
.logo {
  width: 200px;
  height: auto;
}
</style>
