import { createRouter, createWebHistory } from "vue-router";
import { createWebHashHistory } from "vue-router";
import ClasFront from "../../src/components/Layouts/ClasFront.vue";
import SignUp from "@/components/Pages/SignUp.vue";
import Login from "@/components/Pages/Login.vue";
import LoggedInUser from "@/components/Pages/LoggedInUser.vue";

const routes = [
  { path: "/clasfront", component: ClasFront },
  { path: "/signup", component: SignUp },
  { path: "/login", component: Login },
  { path: "/loggedinuser", component: LoggedInUser }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
