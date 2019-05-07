import React, {Component} from "react"

class App extends Component {

    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
            })
    }

    render() {

        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <h3>{text}</h3>
            </div>
        )
    }
}

export default App