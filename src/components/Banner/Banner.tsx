import "./Banner.css";
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/Requests";
import requestType, { emptyResponse } from "../types";

function Banner() {
  const [movie, setMovie] = useState<requestType>(emptyResponse);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals.url);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const truncate = (string: string | undefined, n: number) => {
    if (string) {
      return string.length > n ? string.substring(0, n - 1) + "..." : string;
    }
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <img src="" alt="" />
      <div className="banner__contents">
        <h1 className="banner__title">{movie.name || movie.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
