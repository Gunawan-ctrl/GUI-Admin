export default [
  {
    path: "/",
    redirect: ({ name: "dashboard" }),
    meta: {
      authAdmin: true,
    },
    component: () => import("@/layouts/AdminLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/admin/Dashboard.vue"),
      },
      {
        path: "/table-default",
        name: "Table Default",
        component: () => import("@/views/admin/TableDefault.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/admin/Profile.vue"),
      },

    ],
  },
  {
    path: "/blank",
    component: () => import("@/layouts/Blank.vue"),
    children: [
      {
        path: "/:pathMatch(.*)",
        meta: {
          authAdmin: true,
        },
        name: "404",
        component: () => import("@/views/error/ErrorNotFound.vue"),
      },
      {
        path: "/sign-in",
        name: "login",
        meta: {
          guestPage: true,
        },
        component: () => import("@/views/auth/LoginPage.vue"),
      }
    ],
  },
];
