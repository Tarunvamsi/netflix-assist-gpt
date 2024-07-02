import React from "react";
import { BGIMAGE_URL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[7%] flex justify-center">
      <form className="w-1/2  bg-black grid grid-cols-12 rounded-lg">
        <input
          className="p-4 m-4 rounded-xl col-span-9 "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 bg-red-600 rounded-lg text-white col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
