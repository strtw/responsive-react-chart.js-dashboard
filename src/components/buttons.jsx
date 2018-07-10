/**
 * Created by stu on 6/23/18.
 */


import React, { Component } from 'react';
import '../stylesheets/main.css';

class Button extends Component {
    render() {
        return (
            <a className="button--primary">
                {this.props.text}
            </a>
        );
    }
}
export default Button;