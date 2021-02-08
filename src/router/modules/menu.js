export const constantRoutes = [
    {
        path: "/apply",
        name: "apply",
        component: () => import("@/pages/apply/index.vue"),
        meta: {
            title: '申请钥匙',
            icon: 'key',
            order: 1
        },
    },
    {
        path: "/helper",
        name: "helper",
        component: () => import("@/pages/helper/index.vue"),
        meta: {
            title: '紧急求助',
            icon: 'urgent',
            order: 5
        },
    },
    {
        path: "/setting",
        name: "setting",
        component: () => import("@/pages/setting/index.vue"),
        meta: {
            title: '设置',
            icon: 'setting',
            order: 4
        },
    }
];
export const asyncRoutes = [
    {
        path: "/house",
        name: "house",
        component: () => import("@/pages/house/index.vue"),
        meta: {
            title: '我的房屋',
            icon: 'urgent',
            necessary: ["doorkeys"],
            order: 3
        },
    },

    {
        path: "/population",
        name: "population",
        component: () => import("@/pages/population/index.vue"),
        meta: {
            title: '流动人口信息',
            icon: 'population',
            necessary: ["auth"],
            order: 2
        },
    },

];
const MenuRouter = constantRoutes.concat(asyncRoutes)
export default MenuRouter;
