/**
 * Created by stu on 6/23/18.
 */
import React, { Component } from 'react';
import '../stylesheets/main.css';
import Chart from './chart';
import ProgressChartBar from './progressChartBar';

class ChartCard extends Component {
    render() {
        return (
           <section className="chartCard">
               <Chart/>
               <div className="chartCard__rightBlock">
                   <span className="chartCart__titleInfoRight">Average value of sales in the past month in:<span className="chartCard__titleInfoRightEmph"> United States</span></span>
                   <span className="chartCart__titleInfoRightSubText">All Sales: 162,862</span>
               </div>

               <div className="progressChartBar__parentContainer">
                   <div className="progressChartBar__container">
                       <ProgressChartBar className="background-secondary" title="Movie 1" count="2,346"/>
                   </div>
                   <div className="progressChartBar__container">
                       <ProgressChartBar className="background-light" title="Movie 2" count="4,422"/>
                   </div>
               </div>
               <div className="chartCard__footer">
                   <p className="chartCard__footerText"> <span className="chartCard__footerBold">Analysis of Sales:</span> The value has been changed over time and last month reached a value of over $50,000</p>
                   <p className="chartCard__footerTimeStamp"><i className="fa fa-clock-o" aria-hidden="true"></i> Update on 16.07.2015</p>
               </div>
           </section>
        );
    }
}
export default ChartCard;