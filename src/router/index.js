import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GenerosView from "../views/GenerosView.vue";
import ClassView from "../views/ClassView.vue";
import PerfilView from "../views/PerfilView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/g",
      name: "Generos",
      component: GenerosView,
    },

    {
      path: "/Classificação",
      name: "Classificação",
      component: ClassView,
    },
    {
      path: "/Perfil",
      name: "Perfil",
      component: PerfilView,
    },
  ],
});

export default router;
