import React, {Component} from "react"
import './style.scss'

class App extends Component {

    constructor() {
        super()
        this.state = {
            firstName: false,
            lastName: false,
            logged: false
        }
    }

    submitted = () => {
        if(!this.state.logged) {
            this.setState({
                logged: true
            })
            alert('Вы вошли как: ' + this.state.firstName + ' ' + this.state.lastName)
        }
    }

    handleSubmit = (e) => {
        (this.state.firstName) && (this.state.lastName) ? this.submitted() : alert('Заполните оба поля')
        e.preventDefault()
    }

    handleSetName = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEnter = () => {
        this.state.logged && this.setState({ logged: false })
    }

    render() {
        return (
            <div>
                {!this.state.logged && 
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                Имя
                                <input required name="firstName" className="d-block" type="text" onChange={this.handleSetName} placeholder="Введите ваше имя" />
                            </label>
                            <label>
                                Фамилия
                                <input required name="lastName" className="d-block" type="text" onChange={this.handleSetName} placeholder="Введите вашу фамилию" />
                            </label>
                            <button type="submit">Войти</button>
                        </div>
                    </form>
                }
                {this.state.logged &&
                    <form className="logNameStyle" onSubmit={this.handleSubmit}>
                        <h4> {this.state.firstName + ' ' + this.state.lastName}</h4>
                        <button type="submit" onClick={this.handleEnter}>Выйти</button>
                    </form>
                }
            </div>
        )
    }
}

export default App