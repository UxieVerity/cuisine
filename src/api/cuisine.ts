import { get } from "./request"

type CuiSineParam = {
    page:number,
    size:number
}

export function listApi(params:CuiSineParam){
    return get('/cuisineList',params)
}
