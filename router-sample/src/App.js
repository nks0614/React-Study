import React from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import About from './About'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>          
        <div>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
          </ul>
          <Route path="/" component={Home} exact={true}/>
          <Route path={["/about", "/info"]} component={About}/>
        </div>
    </BrowserRouter>
    
  )
}

export default App;
