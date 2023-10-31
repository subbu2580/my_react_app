import { useState } from "react"

function String(){
    const[text,settext]=useState(true)
    const change=()=>{
        settext(!text)
    }
    return(
        <>
        <h1>using string</h1>
        <h3>{text}</h3> 
        <h4>{change}</h4>   
       
              {
                text?
                <h1>unsuccsfull </h1>
                :
                <h1>succsfull</h1>
             }
              <button onClick={change}>login</button> 

        </>
    )
}
export default String;