import { useState, useReducer } from "react"
const ReducerFunction = (state, action) => {
    switch (action.type) {
        case "Add_value":
            return (
                [...state, { text: action.name }]

            )
        case "DleleteItem":

            const UpdateItems = [...state];
            UpdateItems.splice(action.index, 1);
            return UpdateItems


    }


}

const TodoReducer = () => {
    const intialState = [];
    const [CurrentState, dispatch] = useReducer(ReducerFunction, intialState)
    const [todo, setNewtodo] = useState("")
    const addTodo = () => {
      
   
     
        dispatch({
            type: "Add_value", name: todo
        });
        setNewtodo("");
    
}
    const deleteTodo = (index) => {
        dispatch({
            type: "DleleteItem", index
        })

    }

    const ChangeTodo = (event) => {
        setNewtodo(event.target.value)
    }

    return (
        <>
            <input value={todo} onChange={ChangeTodo}  placeholder="add to do"/>
            <button type="button" onClick={addTodo}>todo add</button>
            {
               CurrentState .map((value, index) => {
                    return (
                        <li>
                            {value.text}
                            <button onClick={() => { deleteTodo(index) }}>delete</button>
                        </li>
                    )
                })

            }

        </>
    )
}
export default TodoReducer