import React, {Component} from "react"
import './style.scss'

class App extends Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            logged: false
        }
    }

    submitted = () => {
        !this.state.logged && this.setState({ logged: true })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName} = this.state
        firstName && lastName ? this.submitted() : alert('Заполните оба поля')
    }

    handleSetName = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    logOut = () => {
        this.setState({ 
            logged: false, 
            firstName: '',
            lastName: ''
        })
    }

    handlerLogOut = () => {
        this.state.logged && this.logOut()
    }

    isLogInMarkup = () => {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Имя
                        <input 
                            required 
                            value={this.state.firstName} 
                            name="firstName" 
                            className="d-block" 
                            type="text" 
                            onChange={this.handleSetName} 
                            placeholder="Введите ваше имя" 
                        />
                    </label>
                    <label>
                        Фамилия
                        <input 
                            required 
                            value={this.state.lastName} 
                            name="lastName" 
                            className="d-block" 
                            type="text" 
                            onChange={this.handleSetName} 
                            placeholder="Введите вашу фамилию" 
                        />
                    </label>
                    <button type="submit">Войти</button>
                </div>
            </form>
        )
    }

    isLogOutMarkup = () => {
        return (
            <form className="logNameStyle" onSubmit={this.handlerLogOut}>
                <h4> <span>Вы вошли как</span>{this.state.firstName + ' ' + this.state.lastName}</h4>
                <button type="submit">Выйти</button>
            </form>
        )
    }

    render() {
        const {logged} = this.state;

        return (
            <div>
                {!logged && this.isLogInMarkup()}
                {logged && this.isLogOutMarkup()}
            </div>
        )
    }
}

export default App