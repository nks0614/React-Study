import React from 'react'

const data = {
    gildong : {
        name : '홍길동',
        description : '갱'
    }
}

const Profile  = ({match}) => {
    const { userName } = match.params
    const profile = data[userName]

    if(!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return (
        <div>
            <h1>{userName}({profile.name})</h1>
            <p>{profile.description}</p>
        </div>
    )

}

export default Profile