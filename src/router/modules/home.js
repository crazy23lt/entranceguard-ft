const BaseRouter = [
  {
    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
    path: "/pages/home/index",
    aliasPath: "/", //对于h5端你必须在首页加上aliasPath并设置为/
    name: "home",
    meta: {
      title: "主页",
    },
  },
  {
    path: "/pages/control/index",
    name: "control",
    meta: {
      title: "个人中心",
    },
  },
  {
    path: "/pages/urgent/index",
    name: "urgent",
    meta: {
      title: "紧急服务",
    },
  },
  // #ifdef APP-PLUS
  {
    path: "/pages/login/app/index",
    name: "login",
    meta: {
      title: "登录",
    },
  },
  {
    path: "/pages/registered/index",
    name: "registered",
    meta: {
      title: "注册",
    },
  },
  // #endif
  // #ifdef H5
  {
    path: "/pages/login/wx/index",
    name: "login",
    meta: {
      title: "登录",
    },
  },
  // #endif
];

export default BaseRouter;
