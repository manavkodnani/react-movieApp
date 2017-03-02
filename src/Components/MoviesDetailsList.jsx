import React from 'react'
import MovieDetails from './MovieDetails.jsx'

export default ({moviesArray}) => {
    const movies = moviesArray.map(movie =>
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
          <div>
            {movies}
          </div>
    )
}