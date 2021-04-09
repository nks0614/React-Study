import React from 'react'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profiles from './Profiles'
import HistorySample from './HistorySample'

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
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to="/history">예제</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path={["/about", "/info"]} component={About}/>
                <Route path="/profiles" component={Profiles}/>
                <Route path="/history" component={HistorySample}/>
                <Route render={({location}) => (
                    <div>
                        <h2>없는 페이지입니다.</h2>
                        <p>{location.pathname}</p>
                    </div>
                
                )}/>
            </Switch>
            
        </div>
    </BrowserRouter>
    
  )
}

export default App;
