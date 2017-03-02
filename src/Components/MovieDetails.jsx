import React from 'react'
import Moment from 'react-moment'

export default ({name, description, actors, releaseDate, rating, theme}) => {
    const divStyle = {
      backgroundColor: theme
    }
    const ratingStyle = {
      color: 'black'
    }
    const descriptionStyle = {
      fontWeight:'lighter'
    }
    switch (rating) {
      case 1: {
        ratingStyle.color = 'red'
        break
      }
      case 2: {
        ratingStyle.color = 'red'
        break
      }
      case 3: {
        ratingStyle.color = 'blue'
        break
      }
      case 4: {
        ratingStyle.color = 'blue'
        break
      }
      case 5: {
        ratingStyle.color = 'green'
        break
      }
    }
    console.log('actors...', actors)
    let newactors = actors.map((actor) => {
      return (<li class='actor'>{actor}</li>)
    })
    return (
      <div className='movie-wrapper'>
        <div className='movie-theme' style={divStyle}>
        </div>
        <div className='movie-name'>
        Movie name : {name}<br />
        <label style={descriptionStyle}>Description : {description}</label><br />
        Actors : {newactors}<br />
        Released On : <Moment date={releaseDate} format='DD MMMM YYYY' />
        </div>
        <br />
        <div className='movie-rating' style={ratingStyle}>
          {rating}/5<br />
        </div>
      </div>
    )
}