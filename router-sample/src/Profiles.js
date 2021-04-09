import React from 'react'
import {Link, Route} from 'react-router-dom'
import Profile from './Profile'

const Profiles = () => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                <li>
                    <Link to="/profile/gildong">길동</Link>
                </li>
            </ul>
            <Route path="/profiles" exact={true} 
                render={() => <div>사용자 선택</div>}/>
            <Route path="profile/:userName" component={Profile} />
        </div>
    )
}

export default Profiles