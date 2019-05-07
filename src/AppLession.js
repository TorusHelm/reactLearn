import React from 'react'
import Button from 'react-bootstrap/Button'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            logIn: false
        }
    }

    handleEnter = () => {
        this.setState(prevState => {
            return {
                logIn: !prevState.logIn
            }
        })
    }

    render() {
        let btnText = this.state.logIn ? 'Выйти' : 'Войти';
        let logState = this.state.logIn ? 'Вы вошли' : 'Вы вышли';

        return (
            <div>
                <Button onClick={this.handleEnter}>{btnText}</Button>
                <h1>{logState}</h1>
            </div>
        )
    }
}

export default App