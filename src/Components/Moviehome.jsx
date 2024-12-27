import React, { useEffect, useState } from 'react'

function Moviehome() {
    const[searchTerm,setSearchTerm]=useState();
    const[movies,setMovies]=useState([]);


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
        <h1>home</h1>
        <div className="search">
            <input
             type="text"
             placeholder='enter a movie'
             value={searchTerm} 
             onChange={(e) => setSearch(e.target.value)} />
             <button onClick={fetchdata}>search</button>
        </div>
            {movies.map((items)=>(
                <div key={items.imdbID}>
                    <img src={items.poster} alt="" />
                    <h2>{items.Title}</h2>
                    <h3>{items.Year}</h3>
                </div>
            ))}
    </div>
  )
}

export default Moviehome