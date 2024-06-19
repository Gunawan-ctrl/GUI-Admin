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
        meta: {
          title: "Dashboard",
        },
        component: () => import("@/views/admin/Dashboard.vue"),
      },
      {
        path: "/table-default",
        name: "tableDefault",
        meta: {
          title: "Table Default"
        },
        component: () => import("@/views/admin/TableDefault.vue"),
      },
      {
        path: "/table-pagination",
        name: "tablePagination",
        meta: {
          title: "Table Pagination"
        },
        component: () => import("@/views/admin/TablePagination.vue"),
      },
      {
        path: "/ChartJs",
        name: "chartJS",
        meta: {
          title: "chartJS"
        },
        component: () => import("@/views/admin/ChartJS.vue"),
      },
      {
        path: "/Apexchart",
        name: "apexchart",
        meta: {
          title: "Apexchart"
        },
        component: () => import("@/views/admin/Apexchart.vue"),
      },
      {
        path: "/Echart",
        name: "echart",
        meta: {
          title: "Echart"
        },
        component: () => import("@/views/admin/Echart.vue"),
      },
      {
        path: "/leaflet",
        name: "leaflet",
        meta: {
          title: "Leaflet"
        },
        component: () => import("@/views/admin/Leaflet.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        meta: {
          title: "Default"
        },
        component: () => import("@/views/admin/Profile.vue"),
      },
      {
        path: "/blank",
        name: "blank",
        meta: {
          title: "Blank"
        },
        component: () => import("@/views/admin/Blank.vue"),
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
          title: "login"
        },
        component: () => import("@/views/auth/LoginPage.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/views/auth/Register.vue"),
      }
    ],
  },
];
