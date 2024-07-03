import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieNames && movieResults.length > 0) {
      setLoading(false);
    }
  }, [movieNames, movieResults]);

  

  if (!movieNames) return null; //TODO: ERROR PAGE SHOW

  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
