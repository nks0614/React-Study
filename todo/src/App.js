import React from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'

const App = () => {
  return (
    <div>
        <TodoTemplate>
            <TodoInsert/>
        </TodoTemplate>
    </div>
    
  )
}

export default App;
