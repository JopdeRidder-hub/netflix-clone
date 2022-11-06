interface responseType {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export const emptyResponse = {
  backdrop_path: "",
  first_air_date: "",
  genre_ids: [],
  id: 0,
  name: "",
  origin_country: [],
  original_language: "",
  original_name: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  vote_average: 0,
  vote_count: 0,
};

export default responseType;
