// import Button from "./components/button";
// import Image from "./components/imgaeComponent";
// import Subbu from "./components/exports and imports/greating";
// import { Greetting1 as Subbu1,Greetting2} from"./components/exports and imports/greating";
// import {Inline1,Inline2} from "./components/styling/inlinestyling";
// import Subbu123 from "./components/styling/externalstyling"
// import "./App.css";
//import Componentsss  from "./components/props/componentsss";
// import Mounting from "./components/class_components/mounting_phase";

// //import YoutubeButton from "./components/class_components/youtubbutton";
// var name=" what happend"
// var my_name=" subbarao"
// import Number from "../src/components/hooks/usestate/number"
// import String from "../src/components/hooks/usestate/string";
// import Objecttt from "./components/hooks/usestate/objects";
//import ArrayComponent from "../src/components/hooks/usestate/arrys";
//import ArrayComponent from "../src/components/hooks/usestate/arrayobjects";
//import Uncontrole from "./components/froms/uncontrole";
//import EmployyeData from "./components/froms/employee";
//import UseEffect from "./components/hooks/usestate/useeffect/useeffect";
//import UseEffect1 from "./components/hooks/usestate/useeffect/useeffect1";
//import ApiCalling from "./components/hooks/usestate/useeffect/Apicalling";
//import Apicard from "./components/hooks/usestate/useeffect/card";
//import ArrayComponent from "./components/hooks/usestate/arrayobjects";
import { createContext, useState } from "react";
import NavigationStack from "./Routing/Navigation";
//import PureCoponent from "./components/pureComponents/PureComponent";
//import UseMemo from "./components/UseMemo/UseMemo";
//import TodoReducer from "./components/hooks/UseReducer/TodoReducer";





export const LoginInfo = createContext()
function App() {
  const [login, setlogin] = useState(false)
  const LoginUser = () => {
    setlogin(true)
  }
  return (
    <div>
       <LoginInfo.Provider value={{login:login,LoginUser:LoginUser}}>
           <NavigationStack/> 

      </LoginInfo.Provider>
       {/* <PureCoponent/>  */}
       {/* <UseMemo/> */}
{/*  
     <TodoReducer/> */}
    
      
    </div>


  )
}

export default App;