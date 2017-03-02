import React, { Component } from 'react'

class MovieDetails extends Component {
  render() {
    return (
      <div>
        Movie name : {this.props.name}<br />
        Description : {this.props.description}<br />
        Actors : {this.props.actors}<br />
        Released On : {this.props.releaseDate}<br />
        Rating  :{this.props.rating}<br />
        Theme : {this.props.theme}
      </div>
    )
  }
}

export default MovieDetails