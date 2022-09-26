import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Movie from '../components/movie';
const GET_MOVIES = gql`
query {
    movies{
      name
      genre
      year
    }
  }
`;

function DisplayAllMovies() {
    const state = {
        movies: []
    }
    const { loading, error, data } = useQuery(GET_MOVIES);
    if (loading) return <p>Movies Loading ...</p>;
    if (error) return <p>Error Occured!!</p>;
    if (data.movies) {
        state.movies = data.movies;
    } else {
        <p>Please add Movies !!</p>;
    }
    return (
        <div  className='movies'>
            {state.movies.map((movie) => {
                return <Movie key={movie.name}
                    name={movie.name}
                    genre={movie.genre}
                    year={movie.year}
                    image={movie.image} />
            })}
        </div>
    )
}

export default DisplayAllMovies