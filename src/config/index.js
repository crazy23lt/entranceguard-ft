// #ifdef APP-PLUS
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : "http://192.168.1.230:3000/ft";
// #endif

// #ifdef H5 || MP-WEIXIN
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : "/api";
// #endif