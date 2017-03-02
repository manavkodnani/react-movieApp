import React, { Component } from 'react'
import '../Container.css'
import FilterByActor from './FilterByActor.jsx'
import MoviesDetailsList from './MoviesDetailsList.jsx'

const axios = require('axios')

class Container extends Component {
  constructor() {
    super()
    this.state = { moviesDetailsArray: [] , allMoviesDetailsArray : []}
  }

  componentWillMount() {
    axios.get('https://movie-api-atlrumqzze.now.sh/movies-ref')
      .then(({data}) => {
        console.log(data)
        this.setState({ moviesDetailsArray: data , allMoviesDetailsArray : data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  filterByActor(selectedActor) {
    if (selectedActor !== 'All') {
      let moviesIncludingActor = this.state.allMoviesDetailsArray.filter((movie) => {
        return (movie.actors.includes(selectedActor))
      })
      console.log('movies includes actor', moviesIncludingActor)
      this.setState({moviesDetailsArray : moviesIncludingActor})
    }
    else {
      this.setState({moviesDetailsArray : this.state.allMoviesDetailsArray})
    }
  }

  render() {
    if (this.state.moviesDetailsArray.length !== 0) {
      return (
        <div>
          <h1>This weeks movies</h1>
          <FilterByActor moviesArray={this.state.moviesDetailsArray} filterByActor={this.filterByActor.bind(this)} />
          <MoviesDetailsList moviesArray={this.state.moviesDetailsArray} />
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}
export default Container