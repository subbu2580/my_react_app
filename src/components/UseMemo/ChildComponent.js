import { useCallback, useMemo } from "react";



const ChildComponent=({text})=>{
    //without use memo
    // function ConvertUppercase(){
    //     console.log("subbarao")
    //     return text.toUpperCase()
    // }
    const ConvertToUpperCase=useMemo(()=>{
           return text.toUpperCase()
    },[text])


    return(
        <>
        <h1>{ConvertToUpperCase}</h1>
        </>
    )
}
export default ChildComponent;