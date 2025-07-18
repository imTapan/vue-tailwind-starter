import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/index.vue";
import Store from "@/views/store.vue";

const allRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes,
});

export default router;
