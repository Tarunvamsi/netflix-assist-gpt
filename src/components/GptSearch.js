import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BGIMAGE_URL } from "../utils/constants";

const GptSearch = () => {
  return <div>
    <div className="absolute -z-10">
        <img src={BGIMAGE_URL} alt="logo" className="opacity-95 to-black"  />
      </div>
    <GptSearchBar></GptSearchBar>
  </div>;
};

export default GptSearch;
