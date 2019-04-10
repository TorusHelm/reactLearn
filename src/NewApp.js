import React from "react";
import { Button } from "react-bootstrap";

class NewApp extends React.Component {
    
    constructor() {
        super()
        this.state = {
            isLoggedIn: {
                key: false,
                textBtn: "Войти",
                context: "не вошли"
            }
        }
    }

    handleLogIn = () => {
        const key = !this.state.isLoggedIn.key
        this.setState({
            isLoggedIn: Object.assign(this.state.isLoggedIn, {
                key: key,
                textBtn: key ? this.textIn = "Выйти" : this.textOut = "Войти",
                context: key ? this.context = "вошли" : this.context = "вышли"
            })
        })
    }

    render() {

        const {isLoggedIn} = this.state;

        return (
            <div>
                <Button onClick={this.handleLogIn}>{isLoggedIn.textBtn}</Button>
                <h1>Вы {isLoggedIn.context}</h1>
            </div>
        )
    }
}

export default NewApp;