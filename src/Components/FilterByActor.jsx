import React, { Component } from 'react'

class FilterByActor extends Component {

  constructor() {
    super()
    this.state = {actors : []}
  }
  
  componentWillMount() {
    const actorsArray = this.props.moviesArray.map((movie) => {
      return movie.actors
    })
    let newActorsArray = []
    for (let i = 0; i < actorsArray.length; i++) {
      newActorsArray = newActorsArray.concat(actorsArray[i])
    }
    newActorsArray = newActorsArray.filter(function (item, index, inputArray) {
      return inputArray.indexOf(item) === index;
    })
    this.setState({actors : newActorsArray})
  }

  filterByActor(e) {
    this.props.filterByActor(e.target.value)
  }

  render() {
    let actors = this.state.actors.map((actor) => {
      return (<option>{actor}</option>)
    })
    return (
      <div>
        Filter by Actor :
        <select onChange={this.filterByActor.bind(this)}>
          <option>All</option>
          {actors}
        </select>
      </div>
    )
  }
}

export default FilterByActor