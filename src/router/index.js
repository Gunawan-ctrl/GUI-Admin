import { createRouter, createWebHistory } from "vue-router";
import baseRoutes from "@/router/routes";

let routes = baseRoutes;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name
    ? `${to.name.charAt(0).toUpperCase()}${to.name.slice(
      1
    )} - GUI Admin`
    : "GUI - Solution Technologies";

  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const noSession = dataUser === null || dataUser === "undefined";

  if (to.matched.some((record) => record.meta.authAdmin)) {
    if (noSession) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestPage)) {
    if (noSession) {
      next();
    } else {
      next({ name: "dashboard" });
    }
  }
});

export default router;
