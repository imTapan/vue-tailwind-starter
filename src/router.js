import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/index.vue";
import about from "@/views/about.vue";

const allRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes,
});

export default router;
