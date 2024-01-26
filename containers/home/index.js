import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import  FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import  MoviesSection  from '@/components/movies-section'
import MovieCategories from '@/components/categories'

const HomeContainer = ({topRatedMovies=[],popularMovies=[],selectedCategory}) => {
  
  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]}/>
        <Categories categories={Genres.genres.slice(0,5)}/>
        {
          selectedCategory.movies.length>0 && (
            <MoviesSection title={Genres.genres.find((genre)=>`${genre.id}`===selectedCategory.id)
            }
            movies={selectedCategory.movies}
            />
          )
        }
        <MoviesSection title="Popular Films" movies={topRatedMovies.slice(1,7)}/>
        <MoviesSection title="Your Favorites" movies={popularMovies.slice(7,13)}/>
    </div>
  )
}

export default HomeContainer