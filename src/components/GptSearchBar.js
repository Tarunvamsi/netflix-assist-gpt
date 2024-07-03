import React, { useRef } from "react";
import { API_OPTIONS, BGIMAGE_URL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //take movie and search in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const prompt =
      "Act as a Movie Recommendation System and Suggest some best movies for the query :" +
      searchText.current.value +
      ". Only give names of 10 movies, comma seperated. Like the example result ahead. Exmaple Result : yeh jawaani hai deewani, Animal, Kalki 2898 AD, Maharaja, Gaddar, Saaho, Salaar, Bahubali, Jailer, Kantara";
    const gptResult = await openai.generateContent(prompt);
    const response = await gptResult.response;
    const text = await response.text();
    if (!text) {
      //TODO: WRITE ERROR HANDLING
    }
    console.log("results : ", text);
    const gptMovies = text.split(","); //converts to array

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames: gptMovies ,movieResults:tmdbResults}));
  };
  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className="w-1/2  bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 rounded-xl col-span-9 "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 rounded-lg text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
