import React, {useState} from 'react'

const EventFunction = () => {
    const [userName, setUserName] = useState()
    const [message, setMessage] = useState()

    const onChangeUserName = e => setUserName(e.target.value)
    const onChangeMessage = e => setMessage(e.target.value)

    const onClick = () => {
        alert(`${userName} : ${message}`)
        setUserName('')
        setMessage('')
    }

    const onKeyPress = e => {
        if(e.key === "Enter"){
            onClick()
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
                type="text"
                name = "userName"
                placeholder="아무거나"
                value={userName}
                onChange={onChangeUserName}/><br/>
            <input 
                type="text"
                name = "message"
                placeholder="아무거나"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}/>
            <button 
                onClick={onClick}>
                    클릭
            </button>
        </div>
    )
}

export default EventFunction