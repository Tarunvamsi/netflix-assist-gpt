import React from "react";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import HomeIcon from "./HomeIcon"; // Assuming this is your home icon component

const SearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <button
      type="submit"
      className="inline-flex items-center h-10 py-1 px-3 ms-2 mt-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-red-500 focus:ring-1 focus:outline-none focus:ring-white dark:bg-teal-600 dark:hover:bg-red-500 dark:focus:ring-white"
      onClick={handleGptSearchClick}
    >
      {showGptSearch ? (
        <>
          <HomeIcon className="w-4 h-6 me-2" /> {/* Render HomeIcon component here */}
          
          HomePage
        </>
      ) : (
        <>
          <svg
            className="w-4 h-6 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          GPTSearch
        </>
      )}
    </button>
  );
};

export default SearchBar;
