import React, { Component } from 'react'
import MovieDetails from './MovieDetails.jsx'

class MoviesDetailsList extends Component {
  render() {
    const movies = this.props.moviesArray.map(movie =>
      <li key={movie.id}>
        <MovieDetails
          name={movie.name}
          description={movie.description}
          actors={movie.actors}
          releaseDate={movie.releaseDate}
          rating={movie.rating}
          theme={movie.theme}
           />
      </li>)
    return (
      <div className='movie-wrapper'>
        <div className='movie-details'>
          <div className='movie-name'>
            {movies}
          </div>
          <div className='movie-rating'>
          </div>
        </div>
      </div>
    )
  }
}

export default MoviesDetailsList