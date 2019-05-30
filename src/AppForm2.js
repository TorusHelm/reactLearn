import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            areaContext: "Some default value",
            isFriendly: true,
            gender: '',
            favColor: 'blue'
        }
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        alert('Done')
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />

                {
                    /**
                     * Другие полезные элементы форм:
                     * 
                     * <textarea /> 
                     * <input type="checkbox" />
                     * <input type="radio" />
                     * <select> и <option> 
                     */
                }
                <br />
                <textarea 
                    value={this.state.areaContext}
                    name="areaContext"
                    placeholder="Some text about you"
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <br />
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                    className="w-100"
                >
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                {this.state.gender && <h2><font color="#3AC1EF">You are a {this.state.gender}</font></h2>}
                <h2><font color="#3AC1EF">Your favorite color is {this.state.favColor}</font></h2>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <button>Submit</button>
            </form>
        )
    }
}

export default App