import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, baseUrl, imageUrl } from '../../Constants/Constants';



const Banner = () => {


    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovies(response.data.results)
            console.log(response.data.results);
        })
    }, [])

    const movie = movies[Math.floor(Math.random() * movies.length)];
    return (
        <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title || movie.name : ""}</h1>
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )


}
export default Banner;