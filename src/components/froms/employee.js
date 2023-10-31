import { useState } from "react"
import "./em.css"


const EmployyeData=()=>{
    const[employeename,setEmployeename]=useState("")
    const[age,setage]=useState("")
    const[mobilenumber,setmobilenumber]=useState("")
    const[salary,setsalary]=useState("")
    const[designation,setdesignation]=useState("")
    const[tabledata,settabledata]=useState([])

    
    
    const formHandelr=(event)=>{
        event.preventDefault()
       const employee={
         name:employeename,
         age:age,
         number:mobilenumber,
         salary:salary,
         designation:designation,
       }
       settabledata([...tabledata,employee])
       setEmployeename("")
       setage("")
       setmobilenumber("")
       setsalary("")
       setdesignation("")

    }

    const name=(event)=>{
        setEmployeename(event.target.value )
      
    }
    const ageHandeler=(event)=>{
        setage(event.target.value )
      
    }
    const mobilenumberHandeler=(event)=>{
        setmobilenumber(event.target.value)

    }
    const salaryHandeler=(event)=>{
        setsalary(event.target.value)

    }
    const designationHandeler=(event)=>{
        setdesignation(event.target.value)

    }

    return(
        
        <form onSubmit={ formHandelr} id="form" >
        <h1>employee data</h1>
        <div>
        <label>employeename</label>
        <input type={"text"} value={employeename} onChange={(event)=>name(event)}/>
        </div>
        <div>
            <label>age</label>
            <input type={"number"} value={age} onChange={(event)=>ageHandeler(event)}/>
        </div>
        <div>
            <label>mobile number</label>
            <input  type={"number"} value={mobilenumber} onChange={(event)=>mobilenumberHandeler(event)}/>
        </div>
        <div>
            <label>salary</label>
            <input type={"number"}  value={salary} onChange={(event)=>salaryHandeler(event)}/>
        </div>
        <div>
            <label>designation</label>
            <select value={designation} onChange={(event)=>designationHandeler(event)}>
                <option></option>
                <option>reactdevelopper</option>
                <option>paythondevelopper</option>
                <option>javadevelopper</option>
            </select>
        </div>
        <div>
            <input type={"submit"}/>
        </div>
        <div>

        <table id="table">
            <tr>
                <th>name</th>
                <th>age</th>
                <th>mobilenumber</th>
                <th>salary</th>
                <th>designation</th>
            </tr>
            {
                tabledata.map((event)=>{
                    return(
                        <>
                        <tr>
                            <td>{event.name}</td>
                            <td>{event.age}</td>
                            <td>{event.number}</td>
                            <td>{event.salary}</td>
                            <td>{event.designation}</td>
                        </tr>
                        </>
                    )

                })
            }
        </table>
        </div>
        </form>

        
    )
}
export default EmployyeData