import { useEffect, useState } from "react";



const UseEffect1=()=>{
     const[timer,settimer]=useState(0)
    useEffect(()=>{
      const interval=setInterval(()=>{
          settimer(timer+1)
      },1000)
      return ()=>{
        clearInterval(interval)
      }

    },[timer])

    return(
        <>
        <h1>useeefect example</h1>
        <h2>{timer}</h2>
        </>
    )
}
export default UseEffect1;
//component will mount