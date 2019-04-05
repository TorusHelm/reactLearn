import React, { Component } from 'react';
import style from './style.css';

class SimpleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content_open: true
        }
    }

    componentDidMount() {
        console.log(this.state)
    }

    handleClick() {
        this.setState(prevState => ({
            content_open: !prevState.content_open
        }));
        console.log(this.state.content_open)
    }
    
    render() {

        let content_text = this.state.content_open === true ? 'Close' : 'Open';

        return (
        
            <div>
                <h1>TorusHelm</h1>
                    <div className="content">
                        <button onClick={this.handleClick} className="toggler">{content_text}</button>
                        <p>
                            I try to learn react.
                        </p>
                        <p>
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                        </p>
                    </div>
                <ul>
                    <li>Ireland</li>
                    <li>Iceland</li>
                    <li>Norway</li>
                </ul>
            </div>

        )
    }
}

export default SimpleComponent;