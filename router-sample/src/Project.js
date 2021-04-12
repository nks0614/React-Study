import React from 'react'

const data = {
    eatMeal : {
        name : '잇밀',
        description : '급식앱',
    },
    webProgramming : {
        name : '웹 프로그래밍',
        description : '웹 프로그래밍 연습',
    }
}

const Project = ({match}) => {
    const { projectName } = match.params
    const project = data[projectName]

    if(!project){
        return <div>존재하지 않는 프로젝트입니다.</div>
    }

    return (
        <div>
            <h3>{projectName}({project.name})</h3>
            <p>{project.description}</p>
        </div>
    )
}

export default Project