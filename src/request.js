const API_KEY = "8ef30a39bd41ae9b8b5105a0f18e5deb"

const requist = {
    fetchtrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetch_Netflix_Orignals:`/discover/tv?api_key=${API_KEY}&with_network=200`,
    fetch_Top_Rated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetch_Action_movies:`/discover/movie?api_key=${API_KEY}&with_genres=28`, 
    fetch_Comedy_movies:`/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetcht_Horror_movies:`/discover/movie?api_key=${API_KEY}&with_genres=27`, 
    fetcht_Romantic_movies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetcht_Documentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`, 
}

export default requist;