import axios from "axios"
import { useEffect, useState } from "react"
import "./api.css"





const ApiCalling=()=>{
 const[Product,setproduct]=useState([])


    useEffect(()=>{
             axios.get("https://jsonplaceholder.typicode.com/photos")
             .then((res)=>setproduct(res))

    },[])



    return(
        <>
        <h1>products</h1>
    <table>
        <tr >
        <th>albumId</th>
        <th>Id</th>
        <th>title</th>
        <th>image</th>
        </tr>
        {
           Product.map((item)=>{
                return(
                    <tr>
                    <td>{item.albumId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                  <td><img src={item.url}  style={{width:"500px",height:"400px"}}></img></td>
                    </tr>
                )

            })
        }
        </table>

        </>
    )
}
export default ApiCalling