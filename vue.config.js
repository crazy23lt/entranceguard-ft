
const port = 8589; // dev port
module.exports = {
    transpileDependencies: ['uni-simple-router'],
    devServer: {
        port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            "/api": {
                target: "http://192.168.1.230:3000",
                ws: true,        // 如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 是否改变域名
                pathRewrite: {
                    "^/api": "/ft" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
                }
            }
        }
    }
}