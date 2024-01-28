import React from "react";
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";
const API_URL = "https://api.themoviedb.org/3";
// async function delay(ms){
//   return new Promise((resolve)=>setTimeout(resolve,ms));
// }
const getSingleCategory = async (genreId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTAyYjVmZjkwNGY0ODY5MmQyOTNhOTEyN2FlOTQ2YyIsInN1YiI6IjY1ODAzYWNiY2VkYWM0MDgyNzdkNDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2esDzpyVbCghysrKr2clfh_P-RRCVjs6hc6K78djAE",
    },
  };
  const rest = await fetch(
    `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`,
    options
  );

  return rest.json();
};

const getCategories = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTAyYjVmZjkwNGY0ODY5MmQyOTNhOTEyN2FlOTQ2YyIsInN1YiI6IjY1ODAzYWNiY2VkYWM0MDgyNzdkNDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2esDzpyVbCghysrKr2clfh_P-RRCVjs6hc6K78djAE",
    },
  };
  const rest = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`,
    options
  );
  return rest.json();
};

const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTAyYjVmZjkwNGY0ODY5MmQyOTNhOTEyN2FlOTQ2YyIsInN1YiI6IjY1ODAzYWNiY2VkYWM0MDgyNzdkNDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2esDzpyVbCghysrKr2clfh_P-RRCVjs6hc6K78djAE",
    },
  };
  const rest = await fetch(
    `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`,
    options
  );
  return rest.json();
};

const getTopRatedMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTAyYjVmZjkwNGY0ODY5MmQyOTNhOTEyN2FlOTQ2YyIsInN1YiI6IjY1ODAzYWNiY2VkYWM0MDgyNzdkNDQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2esDzpyVbCghysrKr2clfh_P-RRCVjs6hc6K78djAE",
    },
  };
  const rest = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`,
    options
  );
  return rest.json();
};

async function HomePage({ params }) {
  // await delay(5000);
  let selectedCategory;
  // console.log("params",params)

  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoryPromise = getCategories();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularPromise, categoryPromise]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  // console.log("bbbbb",selectedCategory)
  // console.log("aa",params.category[0])

  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(1, 7) : [],
      }}
    />
  );
}

export default HomePage;
