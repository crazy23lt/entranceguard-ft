
const BaseRouter = [
    {
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
        path: '/pages/home/index',
        aliasPath: '/',  //对于h5端你必须在首页加上aliasPath并设置为/
        name:"home",
        meta: {
            title: '首页',
        },
    }, {
        path: "/pages/login/index",
        name:"login",
        meta: {
            title: '登录',
        },
    }, {
        path: "/pages/control/index",
        name:"control",
        meta: {
            title: '个人中心',
        },
    }
]

export default BaseRouter
