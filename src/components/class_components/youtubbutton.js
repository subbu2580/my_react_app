import { Component } from "react";



class YoutubeButton extends Component{

    state={
        textMessage:"please subcribe",
        count:0

    }
    click=()=>{
        alert("press")
        
    }


    increment=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )

    }

    decrement=()=>{
        this.setState(
            {
                count:this.state.count-1
            }
        )
        
    }
    reset=()=>{
        this.setState(
            {
                count:this.count=0
            }
        )

    }

    render(){
        return(
            <div>
            <button style={{backgroundColor:"red"}} onClick={this.click} >{this.state.textMessage}</button>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default YoutubeButton;