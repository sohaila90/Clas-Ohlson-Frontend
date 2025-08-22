<template>
  <div>
    <p>Logg inn eller bli medlem</p>
    <input type="text" placeholder="E-postadresse" />
    <input type="text" placeholder="Passord" />
    <button @click="loginBtn()">Logg inn</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginBtn() {
        this.email = {
            
        }
      console.log("login are you there?");
    },
  },
};
</script>
