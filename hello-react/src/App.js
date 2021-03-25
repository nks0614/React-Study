import React, {Component} from 'react';
import './App.css'
import InterationSample from './InterationSample'

class App extends Component {
    render() {
        return (
            <div>
                {/* <ScrollBox ref={(ref) => this.scrollBox=ref}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>밑으로</button> */}
                <InterationSample/>
            </div>
            
        )
    }
}

export default App;
