import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import {useDispatch,useSelector} from "react-redux"
import { counter, counterFunc } from "../redux/Action/action";



 export const Home =()=>{
  const dispatch = useDispatch()
  const dispatchState = useSelector(state=>state.userInfo)
 
  useEffect(()=>{
    if(dispatchState.counter === 5){
      dispatch(counter(true))
   
    }
    setTimeout(()=>{
    if(!dispatchState.disableState){
     let counterNew = dispatchState.counter;
     if(dispatchState.counter < 5){
      counterNew++
      dispatch(counterFunc(counterNew))

     }

    
     
    }
  },1000)
  
  


  },[dispatchState.counter,!dispatchState.disableState])

  const handelSendOtp=()=>{
  dispatch(counter(false))


  }

  console.log(dispatchState,"dispatchState")
  
  return(
    <>
    <h1>Hello Counter App</h1>
    <Button disabled={!dispatchState.disableState}  onClick={()=>handelSendOtp()}>Send Otp</Button>
    {dispatchState.counter}
    </>
  )
}

