import React, {useState} from 'react'


const TodoInsert = () => {
    const [todo, setTodo] = useState([])
    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(1)

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const onClick = () => {
        const nextTodo = todo.concat({
            id : nextId,
            text : inputText
        })
        setNextId(nextId + 1)
        setTodo(nextTodo)
        setInputText('')
    }

    const onRemove = (id) => {
        const newTodo = todo.filter((todo) => todo.id !== id)
        setTodo(newTodo)
    }

    const todoList = todo.map((todo) => <li key={todo.id} onDoubleClick={() => onRemove(todo.id)}>{todo.text}</li>)

    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{todoList}</ul>
        </div>
    )
}

export default TodoInsert