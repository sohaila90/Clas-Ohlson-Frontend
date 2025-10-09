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
      Phone: "",
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
          number: this.Phone,
          password: this.Password,
          confirmPassword: this.confirmPassword,
        };
        console.log("Backend are you getting this?", newUser);
        const response = await Api.addUser(newUser);
        console.log("Bruker opprettet:", response.data);

        this.users.push(response.data);

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

</template>

<style>
.logo {
  width: 200px;
  height: auto;
}
</style>
