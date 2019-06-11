import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            direction: '',
            firstCheck: false,
            secondCheck: false,
            thirdCheck: false,
        }
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
    }
    
    render() {
        return (
            <main>
                <form>
                    <br />
                    <br />
                    <input required onChange={this.handleChange} name="firstName" type="text" placeholder="First Name" value={this.state.firstName} /><br />
                    <input required onChange={this.handleChange} type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} /><br />
                    <input required onChange={this.handleChange} type="text" name="age" placeholder="Age" value={this.state.age} /><br /><br />

                    {/* Здесь создайте переключатели для выбора пола */}
                    <input onChange={this.handleChange} checked={this.state.gender === "male"} value="male" name="gender" type="radio" />&nbsp;
                    male
                    <br />
                    <input onChange={this.handleChange} checked={this.state.gender === "female"} value="female" name="gender" type="radio" />&nbsp;
                    female
                    <br />
                    <br />
                    
                    {/* Здесь создайте поле со списком для выбора пункта назначения */}
                    <select
                        value={this.state.direction}
                        onChange={this.handleChange}
                        name="direction"
                    >
                        <option value="" hidden disabled>Select</option>
                        <option value="Home">Home</option>
                        <option value="work">Work</option>
                        <option value="etc">etc.</option>
                    </select>
                    <br />
                    <br />
                    
                    {/* Здесь создайте флажки для указания диетологических ограничений */}
                    <input onChange={this.handleChange} type="checkbox" value="firstCheck" name="firstCheck" />&nbsp;First check
                    <br />
                    <input onChange={this.handleChange} type="checkbox" value="secondCheck" name="secondCheck" />&nbsp;Second check
                    <br />
                    <input onChange={this.handleChange} type="checkbox" value="thirdCheck" name="thirdCheck" />&nbsp;Third check
                    <br />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstName}</p>
                <p>Your age: {this.state.lastName}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.direction}</p>
                <p>
                    Your dietary restrictions: <br />
                    <ul>
                        <li>First check: {this.state.firstCheck ? 'yes' : 'no'}</li>
                        <li>Second check: {this.state.secondCheck ? 'yes' : 'no'}</li>
                        <li>Third check: {this.state.thirdCheck ? 'yes' : 'no'}</li>
                    </ul>
                </p>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            </main>
        )
    }
}

export default App