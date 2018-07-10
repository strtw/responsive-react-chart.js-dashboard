/**
 * Created by stu on 6/23/18.
 */

import React, { Component } from 'react';
import Button from './buttons';
import classNames from 'classnames/bind';
import 'font-awesome/css/font-awesome.min.css';

class MovieCard extends Component {
    render()
    {
        var className = classNames('movieCard',this.props.className);//concatenates movieCard class from .scss file with styles added at component level
        return (
            <div className={className}>
                <span className="movieCard__title text-dark">{this.props.title}</span>
                <span className="movieCard__subtitle text-dark">Release Date </span>
                <span className="movieCard__subtitleDetails text-light"><i className="fa fa-clock-o" aria-hidden="true"></i> 04 Jan 2015</span>
                <div className="movieCard__details">
                    <span className="movieCard__date text-dark">May 3 2015</span>
                    <span className="movieCard__button">
                    <Button text="Buy Tickets"></Button>
                    </span>
                </div>
                <div className="movieCard__details">
                    <span className="movieCard__date text-dark">May 4 2015</span>
                    <span className="movieCard__button">
                    <Button text="Buy Tickets"></Button>
                    </span>
                </div>
            </div>
        );
    }
}

export default MovieCard;