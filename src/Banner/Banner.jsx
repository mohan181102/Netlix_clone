import React, { useEffect, useState } from "react";
import "./Banner.css"
import requist from "../request";
import instance from "../axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";


function Banner(){
    const [movies,setmovies] = useState([])
    const [youtub,setyoutube] = useState("")

    useEffect(()=>{
        async function fetchdata(){
            const request = await instance.get(requist.fetch_Top_Rated)
            setmovies(
                request.data.results[Math.floor(Math.random()*request.data.results.length)]
            )
            return request
        }
        fetchdata()
        console.log(movies) 

    },[])

    function truncate(str,n){
        return str?.length>n? str.substr(0,n-1)+"...":str
    }

    function handlesubmit(movie){
        movieTrailer(movie).then((url)=>setyoutube(url.split("v=")[1].substring(0,11)))
    }

    function clear(){
        setyoutube("")
        document.getElementById("yt_popup").style.display="none"
    }


    return(
    <header 
        className="banner"
        style={{
            backgroundPosition:"center center",
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
        }}
        >
            <div className="banner_content">
                {/* title */}
                <h1 className="banner_titile">
                    {movies?.original_title||movies?.title||movies?.name}
                </h1>
                {/* button */}
                <div>
                    <button className="banner_button" onClick={()=>{handlesubmit(movies?.original_title||movies?.title||movies?.name)}}>Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <p className="banner_discription">
                    {truncate(movies?.overview,150)}
                </p>
            </div>
            {youtub &&
                    <div id="yt_popup" className="yt_div">
                        <YouTube id="youtube"
                        videoId={youtub} 
                        
                    />
                    <button className="yt_btn" onClick={()=>clear()}> &#x274C;</button>
                    </div>
                    
                    
            }
             
    <div className="banner_fadebottom"/>
    </header>
    )
}


export default Banner