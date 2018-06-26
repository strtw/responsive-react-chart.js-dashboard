

import React, { Component } from 'react';
import '../stylesheets/main.css';
import classNames from 'classnames/bind';

class progressChartBar extends Component {
    render() {
        var className = classNames('progressChartBar__bar',this.props.className);
        var movieTitle = this.props.title;
        var count = this.props.count;
        return(
            <div className="progressChartBar">
                <span className="progressChartBar__count">{this.props.count}</span>
                <label className="progressChartBar__title" htmlFor="progressChartBar__bar">Total orders - {this.props.title}</label>
                <progress id="progressChartBar__bar" className={className} name="progressChartBar__bar" max="100" value="70">
                    70%
                </progress>
            </div>
        );
    }
}
export default progressChartBar;












