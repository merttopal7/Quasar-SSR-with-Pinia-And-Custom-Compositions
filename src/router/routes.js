import Home from "pages/IndexPage.vue";
import Login from "pages/auth/loginPage.vue";
import NotFound from "pages/ErrorNotFound.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/auth/login",
    component: Login,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: NotFound,
  },
];

export default routes;
