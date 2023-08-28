import axios from "axios";
const API_KEY = '749e7f468334a380156d9b74274a9414';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovieById = async (id) => {
    const { data } = await axios(`movie/${id}`,{params:{api_key:API_KEY}})
    return data
};
export const getPopularMovies = async () => {
    const {data} = await axios.get(`movie/popular`, {params:{api_key:API_KEY}})
    return data.results
}
export const getMovieCast = async (id) => {
    const { data } = await axios(`movie/${id}/credits`, { params: { api_key: API_KEY } })
    return data.cast
}
export const getMovieReviews = async (id) => {
    const { data } = await axios(`movie/${id}/reviews`, { params: { api_key: API_KEY } })
    return data.results
}
export const getMovieBySearch = async (query) => {
    const { data } = await axios(`search/movie?query=${query}`, { params: { api_key: API_KEY } })
    return data.results
}