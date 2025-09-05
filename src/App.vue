<script setup>
import ClasFront from "./components/Layouts/ClasFront.vue";
import Login from "./components/Pages/Login.vue";
import Home from "./components/Pages/Home.vue";
import Electro from "./components/Pages/Electro.vue";
import Fritid from "./components/Pages/Fritid.vue";
import Jernvare from "./components/Pages/Jernvare.vue";
import Multimedia from "./components/Pages/Multimedia.vue";
import Tilbud from "./components/Pages/Tilbud.vue";
import SignUp from "./components/Pages/SignUp.vue";
import LoggedInUser from "./components/Pages/LoggedInUser.vue";

const selectedDisplay = 1;
</script>

<template>
  <nav>
    <router-link to="home">Hjem</router-link>
    <router-link to="electro">Elektro</router-link>
    <router-link to="loggedinuser">Min profil</router-link>
    <router-link to="fritid">Fritid</router-link>
    <router-link to="jernvare">Jernvare</router-link>
    <router-link to="multimedia">Multimedia</router-link>
    <router-link to="tilbud">Tilbud</router-link>
    <router-link to="signup">Bli medlem</router-link>
    <router-link to="login">Logg inn</router-link>
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
    <!-- PAGE 5 -->
    <Home v-if="selectedDisplay == 5" />
    <!-- PAGE 6 -->
    <Electro v-if="selectedDisplay == 6" />
    <!-- PAGE 7 -->
    <Fritid v-if="selectedDisplay == 7" />
    <!-- PAGE 8 -->
    <Jernvare v-if="selectedDisplay == 8" />
    <!-- PAGE 9 -->
    <Multimedia v-if="selectedDisplay == 9" />
    <!-- PAGE 10 -->
    <Tilbud v-if="selectedDisplay == 10" />
    <router-view />
  </main>
</template>

<style scoped></style>
