const routes = [
  {
    path: "/pembeli",
    component: () => import("layouts/MainLayout1.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "pembelian",
        name: "pembelian",
        component: () => import("pages/PembelianBarang.vue"),
      },
      {
        path: "stok",
        name: "stok",
        component: () => import("pages/StokBarang.vue"),
      }
    ],
  },
  {
    path: "/su",
    component: () => import("layouts/MainLayoutSuperA.vue"),
    children: [
      {
        path: "dashboardSuperAdmin",
        name: "dashboardSuperAdmin",
        component: () => import("pages/SuperAdmin.vue"),
      },
      {
        path: "RegistAdmin",
        name: "RegistAdmin",
        component: () => import("pages/registAdmin.vue"),
      },
      {
        path: "DaftarAdmin",
        name: "DaftarAdmin",
        component: () => import("pages/DaftarAdmin.vue"),
      }
    ],
  },
  {
    path: "/admin",
    component: () => import("layouts/MainLayoutAdmin.vue"),
    children: [
      {
        path: "dashboardAdmin",
        name: "dashboardAdmin",
        component: () => import("pages/AdminPage.vue"),
      },
      {
        path: "RegistSeller",
        name: "RegistSeller",
        component: () => import("pages/RegistSeller.vue"),
      },
      {
        path: "DaftarSeller",
        name: "DaftarSeller",
        component: () => import("pages/DaftarSeller.vue"),
      }
    ],
  }

  // },
  // {
  //   path: '/LoginFormEmail',
  //   component: () => import('pages/loginemail.vue')
  // },
  // {
  //   path: '/LoginFormUser',
  //   component: () => import('pages/loginuser.vue')
  // },
  // {
  //   path: '/RegistrationForm',
  //   name: 'regist',
  //   component: () => import('pages/regist.vue')
  // },
  // {
  //   path: '/SampleDoang',
  //   component: () => import('pages/sample.vue')
  // },
  // {
  //   path: '/LatihanUi',
  //   component: () => import('pages/latihan.vue')
  // },
  // {
  //   path: '/PembelianBarang',
  //   name: 'pembelian',
  //   component: () => import('pages/PembelianBarang.vue')
  // }
  // {
  //   path: '/area-charts',
  //   component: () => import('pages/chartTypes/AreaCharts.vue')
  // }
]
export default routes
