import React, { useState } from 'react';
import { useMutation , gql } from '@apollo/client';

const ADD_MOVIES = gql`
  mutation AddMovie($name:String!,$genre:String!,$year:String!){
  addMovie(name:$name,genre:$genre,year:$year){
    name
    genre
    year
  }
}

`;

export default function AddMovie() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [addMovie, { data, loading, error }] = useMutation(ADD_MOVIES);

  const submitMovie = (e) =>{
    e.preventDefault();
    alert(year)
    addMovie({ variables: { name: name ,genre:genre ,year:year } });
  } 
  
  if(data) {alert("Data Added successfully")}
  return (
    <div className='addMovie' id="form">
      <form onSubmit={(e) => submitMovie} className="movieForm">
          <div>
          <label>Name</label>
          <input type="text" required onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
          <label>Genre</label>
          <input type="text" required onChange={(e) => setGenre(e.target.value)}/>
          </div>
          <div>
          <label>Year</label>
          <input type="text" required onChange={(e) => setYear(e.target.value)}/>
          </div>    
          <div>
          <button type="submit" onClick={submitMovie}>Add Movies</button>
          </div>
      </form>
    </div>
  )
}
