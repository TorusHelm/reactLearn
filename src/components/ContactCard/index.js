import React from 'react';
import {Card} from 'react-bootstrap';

function ContactsCard(props) {

    return (
        <Card className="">
            <Card.Img style={{height: '200px', width: 'auto'}} variant="top" src={props.contacts.imgUrl} />
            <Card.Body>
                <Card.Title>{props.contacts.name}</Card.Title>
                <Card.Subtitle>{props.contacts.punch}</Card.Subtitle>
                <Card.Link href="#">Phone: {props.contacts.phone}</Card.Link>
                <Card.Link className="d-block ml-0" href="#">Email: {props.contacts.mail}</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ContactsCard;