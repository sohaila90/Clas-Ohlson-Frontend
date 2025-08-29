<script setup>
import ClasFront from "./components/Layouts/ClasFront.vue";
import Login from "./components/Pages/Login.vue";
import SignUp from "./components/Pages/SignUp.vue";
import LoggedInUser from "./components/Pages/LoggedInUser.vue";

const selectedDisplay = 1;
</script>

<template>
  <nav>
    <router-link to="signup">Bli medlem</router-link>
    <router-link to="login">Logg inn</router-link>
    <router-link to="loggedinuser">Min profil</router-link>
  </nav>
  <header></header>

  <main>
    <!-- PAGE 1 -->
    <ClasFront v-if="selectedDisplay == 1" />
    <!-- PAGE 2 -->
    <SignUp v-if="selectedDisplay == 2" />
    <!-- PAGE 3 -->
    <Login v-if="selectedDisplay == 3" />
    <!-- PAGE 4 -->
    <LoggedInUser v-if="selectedDisplay == 4" />
    <router-view />
  </main>
</template>

<style scoped></style>
