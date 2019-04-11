import React from 'react';
import {Button} from 'react-bootstrap';

class ButtonMy extends React.Component {

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // вернуть true если компонент нуждается в обновлении
        // вернуть false в противном случае
        const $this = this.props
        if(nextProps === $this) {
            return false
        } else {
            return true
        }
    }
    
    render() {
        return (
            <Button onClick={this.props.handleClick}>{this.props.BtnText}</Button>
        )
    }
    
}

export default ButtonMy;