import {track, trigger} from './effect.js'
export const reactive = <T extends object>(target:T) =>{
    return new Proxy(target,{
        get(target, key, receiver){
            // 改中方式会造成上下文的错乱
            // return target[key]
            // receiver来保证上下文正确
            let res = Reflect.get(target, key, receiver);
            track(target, key)
            return res
        },
        set(target, key, val, receiver){
            let res = Reflect.set(target, key, val, receiver);
            trigger(target, key)
            return res
        },
    })
}