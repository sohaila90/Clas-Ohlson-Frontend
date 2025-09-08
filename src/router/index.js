import { createRouter, createWebHistory } from "vue-router";
import { createWebHashHistory } from "vue-router";
import ClasFront from "../../src/components/Layouts/ClasFront.vue";
import LoggedInUser from "@/components/Pages/LoggedInUser.vue";
import Home from "@/components/Pages/Home.vue";
import Electro from "@/components/Pages/Electro.vue";
import Fritid from "@/components/Pages/Fritid.vue";
import Jernvare from "@/components/Pages/Jernvare.vue";
import Multimedia from "@/components/Pages/Multimedia.vue";
import Tilbud from "@/components/Pages/Tilbud.vue";
import SignUp from "@/components/Pages/SignUp.vue";
import Login from "@/components/Pages/Login.vue";
import ProductDetail from "@/components/Pages/ProductDetail.vue";

const routes = [
  { path: "/", component: ClasFront },
  { path: "/loggedinuser", component: LoggedInUser },
  { path: "/home", component: Home },
  { path: "/electro", component: Electro },
  { path: "/fritid", component: Fritid },
  { path: "/jernvare", component: Jernvare },
  { path: "/multimedia", component: Multimedia },
  { path: "/tilbud", component: Tilbud },
  { path: "/signup", component: SignUp },
  { path: "/login", component: Login },
  { path: "/product/:id", component: ProductDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
