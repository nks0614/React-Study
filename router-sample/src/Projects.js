import React from 'react'
import {Link, Route} from 'react-router-dom'
import Project from './Project'

const Projects = () => {
    return (
        <div>
            <h2>프로젝트</h2>
            <ul>
                <li><Link to="/project/eatMeal">잇밀</Link></li>
                <li><Link to="/project/webProgramming">웹프</Link></li>
            </ul>
            <Route path="/project" exact={true} 
                render={() => <div>사용자 선택</div>}/>
            <Route path="/project/:projectName" component={Project} />
        </div>
    )
}

export default Projects