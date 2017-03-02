import React, { Component } from 'react'
import Moment from 'react-moment'

class MovieDetails extends Component {
  render() {
    const divStyle = {
      backgroundColor: this.props.theme
    }
    console.log('date', this.props.releaseDate)
    return (
      <div className='movie-wrapper'>
        <div className='movie-theme' style={divStyle}>hi
        </div>
        Movie name : {this.props.name}<br />
        Description : {this.props.description}<br />
        Actors : {this.props.actors}<br />
        Released On : <Moment date={this.props.releaseDate} format='DD MMMM YYYY' /><br />
        Rating  :{this.props.rating}<br />
        Theme : {this.props.theme}
      </div>
    )
  }
}

export default MovieDetails