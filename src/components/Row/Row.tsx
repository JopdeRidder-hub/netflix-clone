import React, { useEffect, useState } from "react";
import "./Row.css";
import requestType, { emptyResponse } from "../types";
import axios from "../../api/axios";

interface rowPropTypes {
  title: string;
  fetchUrl: string;
  isLarge: boolean;
}

function Row({ title, fetchUrl, isLarge }: rowPropTypes) {
  const [movies, setMovies] = useState<requestType[]>([emptyResponse]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLarge && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.original_name}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
