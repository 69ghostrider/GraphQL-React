import React, { Component } from 'react'
import Movie from '../components/movie'
import DisplayAllMovies from './displayAllMovies'

export default class Movies extends Component {
    
    state = {
        // movies: [
        //     {id:1,name: 'John Wick', genre: 'Action', year:2019, image:"https://bit.ly/3RCmjdE"},
        //     {id:2,name: 'John Wick', genre: 'Action', year:2019, image:"https://bit.ly/3RCmjdE"},
        //     {id:3,name: 'John Wick', genre: 'Action', year:2019, image:"https://bit.ly/3RCmjdE"},
        //     {id:4,name: 'John Wick', genre: 'Action', year:2019, image:"https://bit.ly/3RCmjdE"},
        //     {id:5,name: 'John Wick', genre: 'Action', year:2019, image:"https://bit.ly/3RCmjdE"},
        //     {id:6,name: 'John Wick', genre: 'Action', year:2019, image:"https://bit.ly/3RCmjdE"},
        //     {id:7,name: 'John Wick', genre: 'Action', year:2019, image:"https://bit.ly/3RCmjdE"},
        //     {id:8,name: 'John Wick', genre: 'Action', year:2019, image:"https://bit.ly/3RCmjdE"}
        // ]
    } 
    render() {
    return (
      <div>
         <DisplayAllMovies />
      </div>
    )
  }
}


