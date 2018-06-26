

import React, { Component } from 'react';
import '../stylesheets/main.css';
import classNames from 'classnames/bind';

class progressChartBar extends Component {
    render() {
        var className = classNames('progressChartBar__bar',this.props.className);
        return(
            <div className="progressChartBar">
                <span className="progressChartBar__count">2,346</span>
                <label className="progressChartBar__title" htmlFor="progressChartBar__bar">Total orders - Movie 1</label>
                <progress id="progressChartBar__bar" className={className} name="progressChartBar__bar" max="100" value="70">
                    70%
                </progress>
            </div>
        );
    }
}
export default progressChartBar;












