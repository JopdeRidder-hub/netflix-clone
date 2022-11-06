const API_KEY =  ""

const requests = {
    fetchNetflixOriginals:
    {
       title: "Originals",
       url: `/discover/tv?api_key=${API_KEY}&with_networks=213` 
    },
    fetchTrending:
    {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:
    {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchAction:
    {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchTV:
    {
        title: "TV Movie",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchAnimation:
    {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchWestern:
    {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchSciFi:
    {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchMystery:
    {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchRomance:
    {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchComedy:
    {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorror:
    {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
}

export default requests