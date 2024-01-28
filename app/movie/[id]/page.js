import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation';

const API_URL='https://api.themoviedb.org/3' 
const getMovie=async (movieId)=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTAyYjVmZjkwNGY0ODY5MmQyOTNhOTEyN2FlOTQ2YyIsInN1YiI6IjY1ODAzYWNiY2VkYWM0MDgyNzdkNDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2esDzpyVbCghysrKr2clfh_P-RRCVjs6hc6K78djAE'
    }
  };
  const rest=await fetch(`${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`,options)
  
  return rest.json();
  
}


// async function delay(ms){
//   return new Promise((resolve)=>setTimeout(resolve,ms));
// }


const MoviePage =async ({params,searchParams}) => {
    // await delay(2000)
    
   
    const movieDetail=await getMovie(params.id)
    
    if(!movieDetail){
      notFound();
    };

    if(searchParams.error==="true"){
      throw new Error("error happened")
    }
    

  return (
    <MovieContainer  movie={movieDetail}/>
  )
}

export default MoviePage