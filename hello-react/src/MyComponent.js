import React from 'react';
import PropTypes from 'prop-types'

const MyComponent = props => {
    const { name, children } = props
    return (
        <div>
            이름은 { name } 입니다.
            <br/>
            children은 { children } 입니다.    
        </div>
        
    )
}

MyComponent.defaultProps = {
    name : "남규석"
}

MyComponent.propTypes = {
    name : PropTypes.string
}

export default MyComponent