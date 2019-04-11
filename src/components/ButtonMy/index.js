import React from 'react';
import {Button} from 'react-bootstrap';

class ButtonMy extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    
    render() {
        return (
            <Button onClick={this.props.handleClick}>{this.props.BtnText}</Button>
        )
    }
    
}

export default ButtonMy;