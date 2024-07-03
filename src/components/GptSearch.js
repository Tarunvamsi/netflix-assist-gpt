import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BGIMAGE_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return <div>
    <div className="fixed -z-10">
        <img src={BGIMAGE_URL} alt="logo" className="opacity-95 to-black"  />
      </div>
    <GptSearchBar></GptSearchBar>
    <GptMovieSuggestion></GptMovieSuggestion>
  </div>;
};

export default GptSearch;
