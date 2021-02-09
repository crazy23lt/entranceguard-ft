export const constantRoutes = [
    {
        path: "/pages/apply/index",
        name: "apply",
        meta: {
            title: '申请钥匙',
            icon: 'key',
            order: 1
        },
    },
    {
        path: "/pages/helper/index",
        name: "helper",
        meta: {
            title: '紧急求助',
            icon: 'urgent',
            order: 5
        },
    },
    {
        path: "/pages/setting/index",
        name: "setting",
        meta: {
            title: '设置',
            icon: 'setting',
            order: 4
        },
    }
];
export const asyncRoutes = [
    {
        path: "/pages/house/index",
        name: "house",
        meta: {
            title: '我的房屋',
            icon: 'urgent',
            necessary: ["doorKeys"],
            order: 3
        },
    },

    {
        path: "/pages/population/index",
        name: "population",
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
