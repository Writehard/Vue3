"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactive = void 0;
var reactive = function (target) {
    return new Proxy(target, {
        get: function (target, key, receiver) {
            // 改中方式会造成上下文的错乱
            // return target[key]
            // receiver来保证上下文正确
            var res = Reflect.get(target, key, receiver);
        },
        set: function (target, key, val, receiver) {
            var res = Reflect.set(target, key, val, receiver);
            return res;
        },
    });
};
exports.reactive = reactive;
