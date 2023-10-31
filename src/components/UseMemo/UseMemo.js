import { useState } from "react"
import ChildComponent from "./ChildComponent";



const UseMemo=()=>{
    const[text,setText]=useState("my name is subbaro")
    const[count,setCount]=useState(0)

  const ChangeText=()=>{
    setText("where are you")
  }
    const Increment=()=>{ 
        setCount(count+1)
    }

    return(
        <>
        <ChildComponent text={text}/>
        <button onClick={Increment}>click value{count}</button>
        <button onClick={ChangeText}>change</button>

        </>

    )
}
export default UseMemo;
