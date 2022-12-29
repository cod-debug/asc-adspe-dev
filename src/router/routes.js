const routes = [
  {
    name: "home",
    path: "/",
    requiresAuth: false,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home-page",
        path: "",
        component: () => import("pages/HomePage.vue"),
      },
      {
        name: "redirect-page",
        path: "/redirect",
        component: () => import("pages/RedirectPage.vue"),
      }
    ]
  },
  {
    name: "dashboard",
    path: "/asc/page/",
    component: () => import("layouts/ApplicantLayout.vue"),
    children: [
      // S1 APPLICATIONS
      {
        name: "dashboard",
        path: "",
        meta: {
          requiresAuth: true,
        },
        component: () => import("pages/AdSpe/AdSpeIndex.vue"),
      },
      {
        name: "individual-application-list",
        path: "application/s1/lists",
        meta: {
          requiresAuth: true,
        },
        component: () => import("pages/S1Applications/IndividualApp.vue"),
      },
      {
        name: "individual-application-update",
        path: "application/s1/update/:id",
        meta: {
          requiresAuth: true,
        },
        component: () => import("pages/S1Applications/DetailsIndex.vue"),
      },
      {
        name: "for-release-list",
        path: "application/s1/for-release",
        meta: {
          requiresAuth: true,
        },
        component: () => import("pages/S1Applications/ForReleaseApp.vue"),
      },
      {
        name: "special-application-list",
        path: "application/s1/released",
        meta: {
          requiresAuth: true,
        },
        component: () => import("pages/S1Applications/ReleasedIndex.vue"),
      },
      {
        name: "individual-application-list-s2",
        path: "application/s2/lists",
        meta: {
          requiresAuth: true,
        },
        component: () => import("pages/S2Applications/IndividualApp.vue"),
      },
      {
        name: "individual-application-update-s2",
        path: "application/s2/update/:id",
        meta: {
          requiresAuth: true,
        },
        component: () => import("pages/S2Applications/DetailsIndex.vue"),
      },
      {
        name: "announcement",
        path: "announcement",
        meta: {
          requiresAuth: true,
        },
        component: () => import("src/pages/AnnouncementsIndex.vue"),
      },
    ],
  },
  {
    path: "/account",
    name: "account",
    component: () => import("layouts/ApplicantLayout.vue"),
    children: [
      {
        path: "user-profile",
        name: "user-profile",
        component: () => import('pages/Profile/Account/UserProfile/UserProfileIndex.vue'),
      },
    ]
  },
];

export default routes;
