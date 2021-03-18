import React, {useState} from 'react'

const Say = () => {
    const [message, setMessage] = useState('')
    const onClickEnter = () => setMessage('hello')
    const onClickLeave = () => setMessage('bye')

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <div>{message}</div>

        </div>
    )
}

export default Say