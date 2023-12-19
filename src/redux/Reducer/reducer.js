import { counterVar,counterValue } from "../Action/action";

const initialState= {
    disableState:true,
    counter:0
}


export default (state = initialState, {type, payload})=>{
    switch (type){
        case counterVar:{
            return {...state,disableState: payload}
        }
        case counterValue:{
              return {...state,counter:payload}

          
        }
        default:return state
    }
    

}