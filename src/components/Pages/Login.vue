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
      const loginInfo = {
        Email: this.Email,
        Password: this.Password,
      };
      console.log(loginInfo);

      const response = await Api.getUserInfo(loginInfo);
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
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded"
      @click="loginBtn()"
    >
      Logg inn
    </button>
  </div>
</template>
