import { useState } from "react"

function Objecttt(){
    const[obj,setObj]=useState({id:1,name:"subbu",age:21})
    const update=()=>{
        const obj2={
            name:"kiran",
            age:30,id:2
        }
        setObj(obj2)
    }
    return(
        <>
           <h1>{obj.name}</h1>
           <h2>{obj.age}</h2>
           <button  onClick={update}>Click</button>
        
        </>
    )
}
export default Objecttt;