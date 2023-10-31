import { useState } from "react"

const ArrayComponent=()=>{
    const[currentAarray,setArray]=useState([1,2,3,4,5,6])
       
       const update=()=>{
        setArray(

             [...currentAarray,7,8,9]


        )
       }

       const Deletevalue=()=>{
           const Updated=[...currentAarray]
           Updated.pop()
           setArray(Updated)
       }
       const remove=()=>{
        setArray([0])
       }
      
    return(
        <>
        <h1>{currentAarray}</h1>
        <button onClick={update}>click</button>
        <button onClick={Deletevalue}>delete</button>
        <button onClick={remove}>reset</button>
        </>

    )
}
export default ArrayComponent;