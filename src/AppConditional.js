import React, {Component} from "react";
import Conditional from "./components/Conditional";

class AppConditional extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1600)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <Conditional /> : false}
                <h1>Hello world!</h1>
            </div>
        )
    }
}

export default AppConditional
