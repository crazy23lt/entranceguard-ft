// #ifdef APP-PLUS || MP-WEIXIN
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : "http://172.16.4.33:3000/ft";
// #endif

// #ifdef H5 
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : "/api";
// #endif