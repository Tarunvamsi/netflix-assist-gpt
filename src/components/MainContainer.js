import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // State to control mute
  const [isMuted, setIsMuted] = useState(true);

  // Toggle mute state
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (movies === null) return null; // Fix: return null instead of just return

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[40%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview} isMuted={isMuted} toggleMute={toggleMute} />
      <VideoBackground movieId={id} isMuted={isMuted} />
    </div>
  );
};

export default MainContainer;
