import"./ex.css"
const { useState } = require("react")


function ArrayComponent(){
   let s1=[{id:1,name:"subbu",age:21},{id:2,name:"subbu1",age:22}]

   const[currentArray,setArray]=useState(s1)
   const updateHandeler=()=>{
      const val={id:3,name:"subbaro",age:23}
      setArray(
        
         [...currentArray,val]
      )
   }

   const removeHandear=()=>{
      const Updated=[...currentArray]
      Updated.pop()
      setArray(Updated)
   }
   return(
      <>
      <h1>array object</h1>
      <table className="table">
         <tr>
            <th>id</th>
            <th>Name</th>
            <th>age</th>
         </tr>

      {
         currentArray.map((element)=>{
            return(
               <tr>

               <td>{element.id}</td>
               <td>{element.name}</td>
               <td>{element.age}</td>

               </tr>
            )
         })
      }
      </table>
            <button onClick={updateHandeler}>click on add</button>
            <button onClick={removeHandear}>delete</button> 
      </>

   )
}
export default ArrayComponent;