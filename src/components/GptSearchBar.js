import React, { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const prompt =
      "Act as a Movie Recommendation System and Suggest some best movies for the query :" +
      searchText.current.value +
      ". Only give names of 10 movies, comma seperated. Like the example result ahead. Exmaple Result : yeh jawaani hai deewani, Animal, Kalki 2898 AD, Maharaja, Gaddar, Saaho, Salaar, Bahubali, Jailer, Kantara";
    const gptResult = await openai.generateContent(prompt);
    const response = await gptResult.response;
    const text = await response.text();
    if (!text) {
      //TODO: WRITE ERROR HANDLING
      setLoading(false);
      return;
    }
    console.log("results : ", text);
    const gptMovies = text.split(","); //converts to array

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    setLoading(false);
  };

  return (
    <div className="pt-[25%] md:pt-[7%] flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-white text-xl md:text-4xl font-bold mb-4">
          Let <span className="text-purple-500">AI</span> Be{" "}
          <span className="text-blue-500">Your</span> Movie{" "}
          <span className="text-red-500">Guru</span>
        </h1>
        <p className="text-white text-lg italic mb-4 hover:text-green-500">
          Discover the best movies tailored just for you.
        </p>
      </div>
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 rounded-xl col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 rounded-lg text-white col-span-3"
          onClick={handleGptSearchClick}
          disabled={loading}
        >
          {loading ? "Loading..." : lang[langKey].search}
        </button>
      </form>
      <p className="text-white text-sm mb-4 opacity-60 text-center">
        Get personalized recommendations in seconds. Just type your favorite
        genres or movies, and let our AI do the magic!
      </p>
    </div>
  );
};

export default GptSearchBar;
