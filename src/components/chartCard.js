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
               <div class="chartCard__rightBlock">
                   <span class="chartCart__titleInfoRight">Average value of sales in the past month in:<span class="chartCard__titleInfoRightEmph"> United States</span></span>
                   <span class="chartCart__titleInfoRightSubText">All Sales: 162,862</span>
               </div>

               <div className="progressChartBar__container">
                   <ProgressChartBar className="background-secondary"/>
                   <ProgressChartBar className="background-secondary"/>
               </div>
               <div class="chartCard__footer">
                   <p class="chartCard__footerText"> <span className="chartCard__footerBold">Analysis of Sales:</span> The value has been changed over time and last month reached a value of over $50,000</p>
                   <p class="chartCard__footerTimeStamp"><i className="fa fa-clock-o" aria-hidden="true"></i> Update on 16.07.2015</p>
               </div>
           </section>
        );
    }
}
export default ChartCard;