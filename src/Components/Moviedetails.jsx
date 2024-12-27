import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Moviedetails = () => {

    const[movie,setMovie]=useState();
    const {id}=useParams();

     const fetchdata = async() =>{
            
            try{
                const response = await fetch('https://www.omdbapi.com/?s={searchTerm}&apikey=43e171dc)');
                const data = await response.json();
                setSearch();
            }catch(error){
                console.log(error)
            };
        }
        useEffect(() =>{
            fetchdata();
    
        } , []);
  return (
    <div>
        <Link to="/">back</Link>
        <div>
            <img src={movie.Poster} alt="" />
            <div>
           <h1>{movie.Title}</h1>
           <p><strong>year</strong>{movie.Year}</p>
           <p><strong>genre</strong>{movie.Genre}</p>
           <p><strong>Director</strong>{movie.Director}</p>
           <p><strong>Plot</strong>{movie.Plot}</p>


            </div>
        </div>
    </div>
  );
};

export default Moviedetails