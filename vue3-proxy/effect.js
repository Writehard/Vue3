"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trigger = exports.track = exports.effect = void 0;
var activeEffect;
var effect = function (fn) {
    var _effect = function () {
        activeEffect = _effect;
        fn();
    };
    _effect();
};
exports.effect = effect;
// 依赖的收集
var targetMap = new WeakMap();
var track = function (target, key) {
    // 创建第一层数据
    var depsMap = targetMap.get(target);
    if (!depsMap) {
        // 初次进行赋值
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    // 第一次组装完成
    // 创建第二层数据结构
    var deps = depsMap.get(key);
    // 初始状态
    if (!deps) {
        deps = new Set();
        // key;name value:deps
        depsMap.set(target, deps);
    }
    // 第二层组装完成
    // 创建第三层
    deps.add(activeEffect);
};
exports.track = track;
// 更新依赖
var trigger = function (target, key) {
    var depsMap = targetMap.get(target);
    var deps = depsMap.get(key);
    deps.forEach(function (effect) { return effect(); });
};
exports.trigger = trigger;
