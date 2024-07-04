import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BGIMAGE_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full h-screen">
        <img src={BGIMAGE_URL} alt="background" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent  opacity-95"></div>
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
  
  
};

export default GptSearch;
