import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]); //2

	const getMovies = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
		);
		const data = await res.json();
		console.log(data.results)
		setPopularMovies(data.results);
	}; //1

	//results from api response

	useEffect(() => {
		getMovies();
	}, []);
	return <>
    <div className="poster">
        <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>

            {
                popularMovies.map(movie=>(
                    <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                        </div>
                        <div className="posterImage_overlay">
                            <div className="posterImage_title">
                                {movie?movie.original_title:""}
                            </div>
                            <div className="posterImage_runtime">
                                {movie?movie.release_date:""}
                                <span className="posterImage_rating">
                                    {movie?movie.vote_average:""}
                                    <i className="fas fa-star"/>{" "}
                                </span>
                            </div>
                            <div className="posterImage_description">{movie? movie.overview:""}</div>
                        </div>
                    </Link>




                ))
            }
        </Carousel>
        <MovieList/>
    </div>
    </>;
};

export default Home;

// useEffect(()=>{
//     fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// },[])


//font awesome cdn
//load all styles link ..put inside indx.html

//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>