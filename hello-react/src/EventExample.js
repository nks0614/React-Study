import React, {Component} from 'react'

class EventExample extends Component {

    state = {
        userName : "",
        message : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        alert(`${this.state.userName} : ${this.state.message}`)
        this.setState({
            userName : "",
            message : ""
        })
    }

    handleKeyPress = (e) => {
        if(e.key === "Enter"){
            this.handleClick()
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                    type="text"
                    name = "userName"
                    placeholder="아무거나"
                    value={this.state.userName}
                    onChange={this.handleChange}/><br/>
                <input 
                    type="text"
                    name = "message"
                    placeholder="아무거나"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}/>
                <button 
                    onClick={this.handleClick}>
                        클릭
                </button>
            </div>
        )
    }
}

export default EventExample