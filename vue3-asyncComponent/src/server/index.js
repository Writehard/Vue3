import { resolve } from "path"

export  const axios = {
    get(url){
        return new Promise((resolve)=> {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState == 4  && xhr.status == 200){
                    JSON.parse(xhr.responseText);
                    setTimeout(()=>{
                        resolve()
                    }, 2000)
                }
            }
            xhr.send(null)
        })
    }
}