/**
 * 校验电话号
 * @param {Number} num 电话号码
 * @returns {Boolean} 
 */
export function phoneNumber(num) {
    let reg = /^((13[0-9])|(14[5-9])|(15([0-3]|[5-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[1|3])|(19[5|6])|(19[8|9]))\d{8}$/;
    if (!reg.test(num)) {
        return false;
    } else {
        return true;
    }
};

export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result;
    const later = function () {
        const last = +new Date() - timestamp;
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {

        }
    };
    return function (...args) { };
}