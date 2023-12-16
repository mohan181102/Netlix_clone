import axios from "axios";


const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    search:"https://api.themoviedb.org/3/search/movie?query="
})

export default instance