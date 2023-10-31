import { useEffect, useState } from "react"






const UseEffect=()=>{
    const[count,setcount]=useState(0)
    const[count1,setcount2]=useState(0)



    useEffect(
        ()=>{
            document.title=`count ${count*count1}`

        },[count,count1]
    )


    const incresee=()=>{
        setcount(count+1)
    }

    const decresee=()=>{
        setcount2(count1+1)
    }
    
    return(
        <>
        <h1>useeefect</h1>
        <h2>{count}</h2>
        <button onClick={incresee}>click</button>
        <h1>{count1}</h1>
        <button onClick={decresee}>click to incresee</button>

    
        
        </>
    )
}
export default UseEffect;
//componet did mount
// componet did up date
