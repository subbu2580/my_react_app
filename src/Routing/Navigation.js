import { BrowserRouter, Routes,Route } from "react-router-dom"
//import Registraion from "./pages/Registraion";
import LoginScreen from "./pages/LoginScreen";
import HomeScreen from "./pages/HomeScreen";
import AboutScrren from "./pages/AboutScreen";
import ProductDetails from "./pages/ProductDetails";
import { createContext, useContext, useState } from "react";
import { LoginInfo } from "../App";
import AddCart from "./pages/AddCart";


export const  Addcart=createContext()
const NavigationStack = () => { 
    const[cart,setcart]=useState([])

    const CardHandeler=(card)=>{
        const exist=cart.find((item=>item.id===card.id))
        if(exist){
            setcart(card.map((item)=>item.id===card.id  ?
            {...exist,count:exist.count+1}:item

            ))
        }
        else{
            setcart([...cart,{...card}])
        }
    }
  const Loginflag=useContext(LoginInfo)
    return (
        <BrowserRouter>
        {/* {Loginflag.login? */}
        { true ?
           <Addcart.Provider value={{cart,CardHandeler}}>
            
            <Routes>
                <Route path="/" element={<HomeScreen/>} />
                <Route path="/about" element={<AboutScrren/>} />
                <Route path="/products/:id" element={<ProductDetails/>}/>
                <Route path="/cart"  element={<AddCart/>}/>
             

            </Routes>
            </Addcart.Provider>
            :
            <Routes>
               {/* <Route path="/" element={<Registraion/>} /> */}
                <Route path="/" element={<LoginScreen/>} />
            </Routes>
}
        </BrowserRouter>


    )
}
export default NavigationStack;