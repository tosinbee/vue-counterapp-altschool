import { createRouter, createWebHistory } from "vue-router";
import Counter from "../pages/VueCounter.vue";
import NotFound from "../pages/NotFound.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/counter",
    name: "VueCounter",
    component: Counter,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
