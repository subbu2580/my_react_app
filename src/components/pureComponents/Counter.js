import { useState } from "react"


const Counter=()=>{
    const[count,setCount]=useState(0)
    const Increment=()=>{
        setCount(count+1)
    }

    return(
        <>

         <h1>{count}</h1>
         <button onClick={Increment}>click</button>
        </>
    )
}
export default Counter;