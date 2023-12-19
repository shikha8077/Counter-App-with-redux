
export const counterVar = "SET_BUTTON_TRUE"
export const counterValue = "SET_COUNTER_0"

export const counter = (payload)=>{
return (dispatch) => {dispatch({type : counterVar , payload:payload})}
}
export const counterFunc = (payload)=>{
    return (dispatch) =>{dispatch({type:counterValue,payload:payload})}
}