import React from 'react';

function ContactsCard(props) {

    console.log(props)
    let style = {
        height: "400px", 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    }

    return (
        <div className="contact-card">
            <div className="card-header">
                <img align="center" src={props.contacts.imgUrl} alt="" />
            </div>
            <div className="card-body" style={style}>
                <h3><font color="#3AC1EF">{props.contacts.name}</font></h3>
                <h4><font color="#3AC1EF">{props.contacts.punch}</font></h4>
            </div>
            <p>Phone: {props.contacts.phone}</p>
            <p>Email: {props.contacts.mail}</p>
        </div>
    )
}

export default ContactsCard;