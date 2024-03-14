import React, { useState, useRef } from 'react';
import Movie from './../components/Movie';
import MovieForm from './../components/MovieForm';



const Movies = () => {
   
    const [movies, setMovies]=useState([])
    const removeMovie=(id)=>{
        setMovies(movies.filter(movieList => {
            return movieList.id !==id;
        }))
    }
    const renderMovies = movies.length ? movies.map((movieList) => {
        return(
            <Movie movieList={movieList} key={movieList.title} removeMovie={removeMovie}/>
        )
    }): (<div className='strongText'>'추가된 영화가 없습니다.'</div>)

    const addMovie=(movieList)=>{
        setMovies([
            ...movies,
            movieList
        ]);
    }
    
    return (
        <div className='pt80 moviesWrap'>
            <h2>Movies page</h2>
            <h3>Movie list</h3>
            <MovieForm addMovie={addMovie} />
            { renderMovies}
        </div>
    );
};

export default Movies;