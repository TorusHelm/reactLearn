import React from 'react';
import {Container} from 'react-bootstrap';

function MainMy() {

    const firstName = "Torus";
    const lastName = "Helm";
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize : 30
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "lightblue"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "tomato"
    } else {
        timeOfDay = "night"
        styles.color = "green"
    }
    
    return (
        <main>
            <Container className="pt-3">
                <h1 style={styles}>Good {`${timeOfDay} ${firstName} ${lastName}`}!</h1>
            </Container>
        </main>
    )
}

export default MainMy;