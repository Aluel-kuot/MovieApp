import React ,{useState,useEffect} from "react";
import './style.css';
import {getMovies} from "../../utils/utilities";
import { Navbar, Router } from "react-router-dom";
import { Router } from "react-router-dom";
import {Link} from "react-router-dom";

const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL
const GetMovies=()=>{
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(false);
     useEffect(()=>{
        (async ()=>{
            setLoading(true)
            const movies = await getMovies ();
            console.log({movies});
            setLoading(false)
            setMovies(movies.results)
        })();
    },[]);
    if(loading){
        return <h1>Loading movies...</h1>
    }
    return (
        <div>
            <h1 className="movie">All Movies</h1>
        <div className="container">
       {movies &&
       !loading &&
       movies.length >0 &&
       movies.map(item=>(
        
      <Link to={`/MovieDetails/${item.id}`}   key={item.id} > <div className="image-container">
            <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title}/>
        </div>
        </Link>
       ))}

       {movies && !loading && movies.length===0 &&(
       <div>
        <h1>No movies found</h1>
       </div>
       )}
        </div>
        </div>
    );
}
export default GetMovies;