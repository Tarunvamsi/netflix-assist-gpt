import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BGIMAGE_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BGIMAGE_URL} alt="logo" className="opacity-95 to-black h-screen md:h-full object-cover" />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestion></GptMovieSuggestion>
      </div>
    </>
  );
};

export default GptSearch;
