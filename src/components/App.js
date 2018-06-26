import React, { Component } from 'react';
import '../stylesheets/main.css';
import MovieCard from './movieCard';
import ChartCard from './chartCard';


class App extends Component {
  render() {

    return (
        <div class="dashboard">
            <ChartCard/>
            <section class="movies">
                <MovieCard title="Movie 1" className="pull-left"/>
                <MovieCard title="Movie 2" className="pull-left"/>
            </section>
        </div>
    );
  }
}

export default App;
