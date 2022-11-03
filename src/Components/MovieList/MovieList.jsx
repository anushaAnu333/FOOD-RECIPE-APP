import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import './MovieList.css'
const MovieList = () => {
    const [movieList,setMovieList]=useState([])
    const {type}=useParams()

    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getData()
    },[type])

    const getData = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
		);
		const data = await res.json();
		console.log(data.results)
		    setMovieList(data.results);
	}; //1
  return (
    <div>
<div className="movie_list">
    <h2 className="list_title">{(type?type:"POPULAR").toUpperCase()}</h2>
    <div className="list_cards">
        {

            movieList.map(movie=>(
                <Card movie={movie}/>
            ))
        }
    </div>
</div>
    </div>
  )
}

export default MovieList