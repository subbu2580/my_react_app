import { useRef } from "react"



const Uncontrole=()=>{
    const inputref=useRef()
    const passwordref=useRef()


    const handleSubmit=(event)=>{
        event.preventDefault()
     alert(inputref.current.value +passwordref.current.value )

        }
   

    return(
        <>
        <form onSubmit={handleSubmit}>
         <label>username</label>
        <input type={"text"} ref={inputref} placeholder="username"/>
        <label>password</label>
        <input type={"text"} ref={passwordref} placeholder="password"/>
        <input type={"submit"}/>

        </form>

        </>
    )
}
export default Uncontrole