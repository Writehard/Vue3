import { defineStore } from "pinia";

import {Names} from "./store-name";

type User =  {
  name:string,
  age:number,
}

let result:User = {
  name:'飞机',
  age:999
}
const Login = ():Promise<User>=> {
  return new Promise((reslove)=> {
    setTimeout(()=> {
      reslove({
        name:'evanzhe',
        age:1
      })
    }, 2000)
  })
}
export const useTestStore = defineStore(Names.TEST, {
  state:()=>{
    return {
      user: <User>{},
      current:1000,
      name:''
    }
  },
  //computed装饰一些值 有缓存的
  getters:{
    newName():string{
      return `$-${this.name}-${this.getUserName}`
    },
    getUserName():number{
      return this.user.age
    }
  },
  //methods 可以做同步 异步都可以做提交 state
  actions:{
    setCurrent(num:number) {
      this.current = num
    },
    setUser(){
      this.user = result
    },
    async setUserAsync(){
      let asyncUser = await Login()
      this.user =  asyncUser
      this.setName('john wick')
    },
    setName(name:string){
        this.name = name
    }
  }
})