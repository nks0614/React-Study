import React, {useState} from 'react'

const InterationSample = () => {
    const [names, setNames] = useState([
        {id : 1, text : '눈사람'},
        {id : 2, text : '눈사람'},
        {id : 3, text : '사람'},
        {id : 4, text : '눈사람'}
    ])
    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(5)

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        })
        setNextId(nextId + 1)
        setNames(nextNames)
        setInputText('')
    }

    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id)
        setNames(nextNames)
    }

    const nameList = names.map((name) => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)

    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
}

export default InterationSample