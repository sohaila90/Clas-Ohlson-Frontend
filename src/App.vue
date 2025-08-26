<script setup>
// import ClasFront from "./components/ClasFront.vue";
import LoggedInUser from "./components/Pages/LoggedInUser.vue";
import Login from "./components/Pages/Login.vue";
import SignUp from "./components/Pages/SignUp.vue";
import Api from "./services/Api.js";
</script>

<template>
  <header>
    <div class="wrapper">
      <!--      
      <h1>Clas Ohlson</h1> -->
    </div>
  </header>

  <main>
    <!-- <ClasFront /> -->
    <Login />
    <SignUp />
    <LoggedInUser />
    <Api />
  </main>
</template>

<style scoped></style>
