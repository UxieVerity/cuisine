import axios from "axios";

const baseURL = "http://localhost:3001"

export const get = (url:string,params:any)=>axios.get(url,{params,baseURL})
export const post = (url:string,query:any)=>axios.post(url,{data:query,baseURL})