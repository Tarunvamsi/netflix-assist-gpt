import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, isMuted }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log("trailer", trailerVideo);

  // Fetch trailer video and update the store with trailer video data
  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          `?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=fSGpAQPtGoc&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0`
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; webkitallowfullscreen; mozallowfullscreen; allowfullscreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
