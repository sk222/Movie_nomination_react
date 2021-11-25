import React from 'react';
import MovieItem from "../components/Movie/MovieItem";
import './MovieList.css';
const MovieList = (props)=>{
 
     return(
      <React.Fragment>
       <ul> 
           { props.movies.length===0 ?<p>No Data</p>:   props.movies.map((movie)=>{ 
            return <div key={movie.id}>
             <MovieItem id={movie.id}
               image={movie.image} title={movie.title} year={movie.year}
               />
             <button className="button-movie-list" onClick={props.nominationHandler} id={movie.id}
               image={movie.image} title={movie.title} year={movie.year} disabled={props.isNominated.includes(movie.id)}> Nominate </button>
            </div>
           })}
       </ul>
      </React.Fragment>
    )
}

export default MovieList;