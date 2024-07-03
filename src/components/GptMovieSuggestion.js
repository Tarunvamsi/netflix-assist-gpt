import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null; //TODO: ERROR PAGE SHOW

  return (
    <div className="p-4 m-4 bg-black text-white opacity-90 ">
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
