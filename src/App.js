import React from "react"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handlerClickUp = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handlerClickUp10 = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 10
            }
        })
    }

    handlerClickDown = () => {
        // let count = this.state.count
        this.setState((prevState) => {
            return {
                count: prevState.count > 0 ? prevState.count -1 : prevState.count = 0
            }
        })
    }

    handlerClickDown10 = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count >= 10 ? prevState.count -10 : prevState.count = 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handlerClickUp}>Change Up!</button>
                <button onClick={this.handlerClickDown}>Change Down!</button>
                <button onClick={this.handlerClickUp10}>Change Up 10!</button>
                <button onClick={this.handlerClickDown10}>Change Down 10!</button>
            </div>
        )
    }
}

export default App