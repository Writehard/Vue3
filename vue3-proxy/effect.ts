let activeEffect: () => void;
export const effect = (fn:Function) => {
    const _effect = function () {
        activeEffect = _effect
        fn()
    };
    _effect()
    
}
// 依赖的收集
const targetMap = new WeakMap()
export const track = (target, key) => {
    // 创建第一层数据
    let depsMap = targetMap.get(target);
    if(!depsMap){
        // 初次进行赋值
        depsMap = new Map();
        targetMap.set(target, depsMap)
    }
    // 第一次组装完成
    // 创建第二层数据结构
    let deps = depsMap.get(key);
    // 初始状态
    if(!deps) {
        deps = new Set()
        // key;name value:deps
        depsMap.set(target,deps)
    }
    // 第二层组装完成
    // 创建第三层
    deps.add(activeEffect)
}
// 更新依赖
export const trigger  = (target, key) =>{
    const depsMap = targetMap.get(target);
    const deps = depsMap.get(key);

    deps.forEach(effect => effect())
}
