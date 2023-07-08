//  class Btn extends HTMLElement {
//     constructor(){
//         super()
//         const shaDom = this.attachShadow({mode: "open"})
//         this.p = this.h('p')
//         this.p.innerText = '我是webcomponents'
//         this.p.setAttribute('style', `width:200px; height:200px; border:1px solid black;`)
//         shaDom.appendChild(this.p)
//     }
//     h(el){
//         return document.createElement(el)
//     }

//  }
//  window.customElements.define('evanzhe-btn', Btn)
 class Btn extends HTMLElement {
    constructor(){
        super()
        //隔离样式 js
        const shaDom = this.attachShadow({mode: "open"})
        this.template = this.h('template')
        this.template.innerHTML = `
        <style>
            div {
                width:200px;
                height:200px;
                border:1px solid black;
            }
        </style>
        <div>
        evanzhe
        </div>`
        shaDom.appendChild(this.template.content.cloneNode(true))
    }
    h(el){
        return document.createElement(el)
    }
    connectedCallback() {
        console.log('我已经插入了！！！嗷呜')
    }
 
    //当自定义元素与文档 DOM 断开连接时被调用。
    disconnectedCallback() {
        console.log('我已经断开了！！！嗷呜')
    }
 
    //当自定义元素被移动到新文档时被调用
    adoptedCallback() {
        console.log('我被移动了！！！嗷呜')
    }
    //当自定义元素的一个属性被增加、移除或更改时被调用
    attributeChangedCallback() {
        console.log('我被改变了！！！嗷呜')
    }
 }
 window.customElements.define('evanzhe-btn', Btn)