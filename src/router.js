import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue")
    }
  ]
});
