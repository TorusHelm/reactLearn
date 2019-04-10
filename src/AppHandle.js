import React from "react"

function HandleClick() {
    console.log("I was clicked!")
}

function AppHandle() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100" alt="" />
            <br />
            <br />
            <button onClick={HandleClick}>Click me</button>
        </div>
    )
}

export default AppHandle