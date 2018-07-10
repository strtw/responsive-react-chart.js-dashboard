import React, { Component } from 'react';
import '../stylesheets/main.css';
import {Line} from 'react-chartjs-2';
import chart from '../scripts/chart.js';


class Chart extends Component {

    render() {
        return (
            <div className="chart">
                <h2 className="chart__header">Total Movie Sales</h2>
                <p className="chart__headerSubtitle">Comparison - Movie 1 and Movie 2</p>
                <Line data = {chart.data} options = {chart.options}/>
            </div>
        );
    }
}
export default Chart;
