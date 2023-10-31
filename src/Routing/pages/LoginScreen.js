import { useContext, useEffect, useState } from "react";
import { LoginInfo } from "../../App";
import axios from "axios";
import "../pages/loginScrren.css"




const LoginScreen=()=>{
    const[Input,setUserput]=useState({username:"",password:""})
   const[data,setdata]=useState([])



      useEffect(()=>{
        axios.get("https://fakestoreapi.com/users")
        .then((Response)=>setdata(Response.data))
      

      },[])



     const InputHandeler=(event)=>{
        setUserput(
            {...Input,[event.target.name]:event.target.value}
        )

     }
      
    const Loginflag=useContext(LoginInfo)
    const LoginHandeler=(event)=>{
        event.preventDefault() 
        const user= data.find((userData)=>{
            return userData.username===Input.username && userData.password===Input.password
        })


        if(user){
        Loginflag.LoginUser()

        }else{
            alert("this is not correct password")
            
        }
        setUserput(
            {username:"",password:""}
        )

    }


    return(
        <>
        <form  onSubmit={LoginHandeler} id="login">
          <h1 style={{marginLeft:"80px"}}>Login Page</h1>
        <div>
        <label><h6>UserName:</h6></label>
        <input type="text" value={Input.username} onChange={InputHandeler} name="username" style={{marginTop:"30px",marginLeft:"24px"}}/>
        </div>
        <div>
        <label><h6>Password:</h6></label>
        <input type="password" value={Input.password} onChange={InputHandeler} name="password" style={{marginTop:"10px",marginLeft:"30px"}}/>
        </div>
        <input type="submit"   style={{marginTop:"10px",marginLeft:"70px"}}/>
        </form>
        
        </>
    )
}

export default  LoginScreen;