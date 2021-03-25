import React, {Component} from 'react'
import './Validation.css'

class Validation extends Component {
    state = {
        pw : '',
        clicked : false,
        validated : false,
    }

    handleChange = (e) => {
        this.setState({
            pw : e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.pw === "000"
        })
        this.input.focus()
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.pw}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default Validation