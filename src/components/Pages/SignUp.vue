<script>
import Api from "@/services/Api.js";

export default {
  name: "Signup",
  data() {
    return {
      users: [],
      Firname: "",
      Lastname: "",
      Email: "",
      Phone: "", // husk at denne kan hete phone pga det er internt
      Password: "",
      ConfirmPassword: "",
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
          firname: this.Firname,
          lastname: this.Lastname,
          email: this.Email,
          number: this.Phone, // må bruke number som er riktig nøkkel for å sende til backend
          password: this.Password,
          confirmPassword: this.confirmPassword,
        };
        console.log("Backend are you getting this?", newUser);
        const response = await Api.addUser(newUser);
        console.log("Bruker opprettet:", response.data);

        // legg til bruker i lista
        this.users.push(response.data);

        // tøm inputfeltene
        this.Firname = "";
        this.Lastname = "";
        this.Email = "";
        this.Phone = "";
        this.Password = "";
        this.ConfirmPassword = "";
      } catch (error) {
        console.error("Feil ved registrerting", error);
      }
    },
  },
};
</script>

<template>
  <img class="logo" src="/src/assets/Clas_Ohlson.svg (1).png" />
  <p>Bli medlem</p>

  <form @submit.prevent="signUpBtn">
    <p>Fornavn</p>
    <input type="text" v-model="Firname" placeholder="Skriv inn ditt fornavn" />

    <p>Etternavn</p>
    <input
      type="text"
      v-model="Lastname"
      placeholder="Skriv inn ditt etternavn"
    />

    <p>E-post</p>
    <input type="text" v-model="Email" placeholder="Skriv inn din e-post" />

    <p>Mobilnummer</p>
    <input type="text" v-model="Phone" placeholder="+47" />

    <input
      type="password"
      v-model="Password"
      placeholder="Lag et nytt passord"
    />

    <input
      type="password"
      v-model="ConfirmPassword"
      placeholder="Gjenta passordet"
    />

    <button type="submit">Bli medlem</button>
  </form>

  <!-- <p>Api fra Rider</p>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.Firname }} {{ user.lastName }} {{ user.email }} {{ user.number }}
      {{ user.password }}
    </li>
  </ul> -->
</template>

<style>
.logo {
  width: 200px;
  height: auto;
}
</style>
