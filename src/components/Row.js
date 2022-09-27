import React, {useState,useEffect} from "react";
import instance from '../instance';
import '../Row.css'
const imageUrl="http://image.tmdb.org/t/p/original/";

function Row({title,fetchURL}){

    const[movies,setMovies]=useState([])
    
    async function fetchData(){
        const request= await instance.get(fetchURL)
        setMovies(request.data.results)
    }

    useEffect(() => {
     fetchData()
    }, [])
    
        console.log("movies is ", movies);
    return(
        <div>
            <h3>{title}</h3>
    
            <div className="row_posters">
                {movies.map((movie)=>(
                    <img className="row_poster"
                    src={`${imageUrl}${movie.poster_path}`}
                    alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row