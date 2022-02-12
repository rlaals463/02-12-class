import "./todoList.css"


//Props

interface TodoProps {
    number: number
    text: string
    done: boolean
}
const Todo =(props:TodoProps) =>{
    
    
    return (
        <div className="Container">
            <p>{props.number}</p>
            <input type = "checkbox"></input>
            <input type = "text"></input>
        </div>
    )
}

export default Todo

