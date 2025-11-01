import React, { useState } from 'react'
import {useQuery} from '@tanstack/react-query'
import FetchSearchMovieData from '../APIData/SearchMovieApi'

function SearchMovie() {
  
const [movie,setMovie]=useState("")

  const {data,isError,error,isPending}=useQuery({
    queryKey:["movie-search-engine",movie],
    queryFn:()=>FetchSearchMovieData(movie)
  });

  console.log(data?.results)
  

  
  return (
    <div>
      <div>
      <input value={movie} onChange={(e)=>setMovie(e.target.value)}>
      </input>
      </div>
      {
        isPending && <p>Loading......</p>}
        {
        isError && <p>{error.message}</p>
      }
      <div>
        {
         data?.results?.map((movie)=>(
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            </div>
         ))
        }
      </div>
    </div>
  )
}

export default SearchMovie