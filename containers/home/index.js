import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) => {
  // console.log("aaaa", selectedCategory);
  // console.log(categories);
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <Categories categories={categories.slice(1, 6)} />
      {selectedCategory.movies.length>0 && (
        <MoviesSection
         movies={selectedCategory.movies}
         title={categories.find((item) => (
          item.id == selectedCategory.id
        ))?.name  || "TOP RATED"}
          />
      )}
      <MoviesSection
        title="Popular Films"
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={popularMovies.slice(1, 7)}
      />
    </div>
  );
};

export default HomeContainer;
