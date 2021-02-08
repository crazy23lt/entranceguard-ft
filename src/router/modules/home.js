const BaseRouter = [
  {
    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
    path: "/",
    aliasPath: "/", //对于h5端你必须在首页加上aliasPath并设置为/
    name: "home",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      title: "主页",
    },
  },
  {
    path: "/control",
    name: "control",
    component: () => import("@/pages/control/index.vue"),
    meta: {
      title: "个人中心",
    },
  },
  // #ifdef APP-PLUS
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/app/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/registered",
    name: "registered",
    component: () => import("@/pages/registered/index.vue"),
    meta: {
      title: "注册",
    },
  },
  // #endif
  // #ifdef H5
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/wx/index.vue"),
    meta: {
      title: "登录",
    },
  },
  // #endif
];

export default BaseRouter;
