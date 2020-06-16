import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/charts",
      name: "charts",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ChartDemo.vue")
    }
  ]
});
router.beforeResolve((to, from, next) => {
  next();
});

export default router;
