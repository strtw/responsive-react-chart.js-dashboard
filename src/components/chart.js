import React, { Component } from 'react';
import '../stylesheets/main.css';
import {Line} from 'react-chartjs-2';

var data = {labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        data: [50, 50, 60, 40, 55, 38,30],
        backgroundColor: [
            'rgba(144,217,202,.6)'
        ],
        borderColor: [
            '#64b9a2'
        ],
        borderWidth: 2
    },
        {
            data: [65, 60, 40, 50, 37, 25,40],
            backgroundColor: [
                'rgba(238,238,238,.6)'
            ],
            borderColor: [
                '#E1E1E1'
            ],
            borderWidth: 2
        }]};

var options = {
    maintainAspectRatio: true,
    responsive:true,

    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:false,
                min:20,
                steps: 1,
                stepValue: 10,
                max: 70,
                maxTicksLimit:5
            }
        }]
    }
};


class Chart extends Component {

    render() {
        return (
            <div className="chart">
                <h2 class="chart__header">Total Movie Sales</h2>
                <p class="chart__headerSubtitle">Comparison - Movie 1 and Movie 2</p>
                <Line data = {data} options = {options}/>
            </div>
        );
    }
}
export default Chart;
