import React from "react";

class AppUpdates extends React.Component {

    constructor() {
        super()
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    render() {
        return (
            <h1>{this.state.width}</h1>
        )
    }

}

export default AppUpdates;