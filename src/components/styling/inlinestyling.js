export function Inline1(){
    var obj={
        color:"red",
       backgroundColor:"black",
       margin:"200px 300px 400px",
       padding:"200px",
       
    }

    return(
        <div>
            <p style={obj}>You can now view my_react_app in the browser.</p>
        </div>
    )
}

export function Inline2(){

    return(
        <div>
            <p style={
                {color:"red",
       backgroundColor:"black",
       margin:"200px 300px 400px",
       padding:"200px"
            }
       }>You can now view my_react_app in the browser.</p>
       <h1 className="name">hello world</h1>
        </div>
    )
}
