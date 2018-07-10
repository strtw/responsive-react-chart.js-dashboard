import React, { Component } from 'react';
import '../stylesheets/main.css';
import MovieCard from './movieCard';
import ChartCard from './chartCard';


class App extends Component {
  render() {

    return (
        <div className="dashboard">
            <ChartCard/>
            <section className="movies">
                <div className="movieCardContainer">
                    <MovieCard className="default" title="Movie 1"/>
                </div>
                <div className="movieCardContainer">
                    <MovieCard title="Movie 2"/>
                </div>
            </section>
        </div>
    );
  }
}

export default App;