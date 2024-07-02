import React from "react";
import PlayIcon from "./icons/PlayIcon";
import InfoCircleIcon from "./icons/InfoCircleIcon";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[17%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/4 ">{overview}</p>
      <div className="my-4 ">
        <button className="bg-red-500 text-white p-4 px-10  rounded-lg text-xl opacity-70 hover:bg-opacity-80 ">
          <div className="flex items-center justify-between h-6">
            <PlayIcon></PlayIcon> Play
          </div>
        </button>

        <button className="mx-2 bg-gray-500 text-white p-4 px-10 text-lg rounded-lg opacity-70 hover:bg-opacity-80 ">
          <div className="flex items-center justify-between h-6">
            <InfoCircleIcon></InfoCircleIcon> More info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
