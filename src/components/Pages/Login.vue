<script>
import Api from "@/services/Api";
export default {
  name: "Login",
  data() {
    return {
      Email: "",
      Password: "",
    };
  },
  methods: {
    async loginBtn() {
      const userInfo = {
        email: this.Email,
        password: this.Password,
      };
      console.log(userInfo);

      const response = await Api.getUserInfo(userInfo);
      console.log("Svar fra back:", response.data);
    },
  },
};
</script>

<template>
  <div>
    <p>Logg inn eller bli medlem</p>
    <input v-model="Email" type="text" placeholder="E-postadresse" />

    <input v-model="Password" type="text" placeholder="Passord" />
    <button @click="loginBtn()">Logg inn</button>
  </div>
</template>
