import axios from "axios";
import { Component } from "react";


class Mounting extends Component{
    constructor(){
        super()
        this.state={
            n:"my name is",
            n1:"text1"
        }
    }
  static getDerivedStateFromProps(){
    return null


    }
     componentDidMount(){

        axios.get("")

        
     }




    render(){
    
        const{n,n1}=this.state
        return(
            <>
            <h1>mounting phase</h1>
            {this.state.n}
           <h1>{n}</h1>
            {n1}
            </>
        )
    }
}
export default Mounting