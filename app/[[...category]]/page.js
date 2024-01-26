import React from "react";
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json"
const API_URL='https://api.themoviedb.org/3' 
// async function delay(ms){
//   return new Promise((resolve)=>setTimeout(resolve,ms));
// }
const getTopRatedMovies=async ()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTAyYjVmZjkwNGY0ODY5MmQyOTNhOTEyN2FlOTQ2YyIsInN1YiI6IjY1ODAzYWNiY2VkYWM0MDgyNzdkNDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2esDzpyVbCghysrKr2clfh_P-RRCVjs6hc6K78djAE'
    }
  };
  const rest=await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`,options)
  return rest.json()
}

const getPopularMovies=async ()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTAyYjVmZjkwNGY0ODY5MmQyOTNhOTEyN2FlOTQ2YyIsInN1YiI6IjY1ODAzYWNiY2VkYWM0MDgyNzdkNDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2esDzpyVbCghysrKr2clfh_P-RRCVjs6hc6K78djAE'
    }
  };
  const rest=await fetch(`${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`,options)
  return rest.json()
}

async function HomePage({ params }) {
  // await delay(5000);
  let selectedCategory;
  const { results:topRatedMovies }= await getTopRatedMovies();
  const { results:popularMovies }= await getPopularMovies();

  if (!params.category?.length>0) {
    selectedCategory=true;
  }

 

  return (
    <HomeContainer
    topRatedMovies={topRatedMovies}
    popularMovies={popularMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0,7) : [],
      }}
    />
  );
}

export default HomePage;