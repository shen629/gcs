import React, { Component } from 'react';
import {NavLink as Link} from 'react-router-dom'

export default class MenuItem extends Component {
    render() {
        if (this.props.isActive) {
            return (
                <li role="presentation" className="menu active">
                    <Link to={this.props.linkTo}>
                        <span><i className={this.props.cssClass}></i></span>
                        {this.props.text}
                    </Link>
                </li>
            );
        } else {
            return (
                <li role="presentation" className="menu">
                    <Link to={this.props.linkTo}>
                        <span><i className={this.props.cssClass}></i></span>
                        {this.props.text}
                    </Link>
                </li>
            );
        }

    }
}
