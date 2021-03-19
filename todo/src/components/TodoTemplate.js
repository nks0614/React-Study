import React from 'react'
import './TodoTemplate.css'

const TodoTemplate = ( { children } ) => {
    return (
        <div className='TodoTemplate'>
            <h2>3학년 2반 10번 남규석</h2>
            <div className='app-title'>일정 관리</div>
            <div className='content'>
                <input className="checkBox" type="checkbox"/>
                {children}
            </div>
        </div>
    )
}

export default TodoTemplate