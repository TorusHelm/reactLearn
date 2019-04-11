import React, {Component} from "react";
import ButtonMy from './components/ButtonMy';

class App extends Component {
    constructor() {
        super()
        this.state = {
            BtnText: {
                bool: true,
                text: 'Open'
            }
        }
    }

    btnHandleClick = () => {
        const statBoold = this.state.BtnText.bool
        this.setState({
            BtnText: {
                bool: !statBoold,
                text: statBoold ? 'Close' : 'Open'
            }
        });
    }
    
    render() {
        return (
            <div>
                <ButtonMy BtnText={this.state.BtnText.text} handleClick={this.btnHandleClick} />
            </div>
        )
    }
}

export default App