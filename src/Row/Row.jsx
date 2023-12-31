import React, { useEffect, useState } from "react";
import instance from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchurl, backdrop }) {
  const [movies, setmovies] = useState([]);
  const [videoId, setvideoid] = useState(null);
  const opts = {
    height: "390",
    width: "100%",
    playerVarse: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchingdata() {
      const request = await instance.get(fetchurl);
      console.log(request);
      setmovies(request.data.results);
      return request;
    }
    fetchingdata();
  }, [fetchurl]);

  // create trailer

  function handlesubmit(movie) {
    if (videoId) {
      setvideoid("");
    } else {
      movieTrailer(movie?.name || movie.title)
        .then((url) => {
          // console.log(url)
          console.log("url:- ", url);
          // console.log(movie)
          let check = url.split("v=")[1].substring(0, 11);

          setvideoid(check);
        })
        .catch((e) => {
          console.log(e);
          document.getElementById("yt_er").style.opacity = "1";
          document.getElementById("yt_er").style.display = "block";
        });
    }
  }

  function clear() {
    setvideoid("");
    document.getElementById("yt_popup").style.display = "none";
  }

  function dlt() {
    document.getElementById("yt_er").style.opacity = "0";
  }

  function scrol(e) {
    if (e.target.scrollLeft > 1800) {
      console.log("above 1800");
    } else {
      return;
    }
  }
  return (
    <>
      <div id="row">
        <h2 className={`Row_title`}>{title}</h2>
        <div id="Row" onScroll={scrol}>
          {movies.map((movie, i) => {
            return (
              <img
                id="row_poster"
                onClick={() => handlesubmit(movie)}
                className={`row_poster${
                  backdrop ? "row_poster" : "withlarge row_poster"
                }`}
                loading="lazy"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.name}
                key={movie.id}
              />
            );
          })}
        </div>
        {videoId && (
          <div id="yt_popup" className="yt_div">
            <YouTube id="youtube" videoId={videoId} opts={opts} />
            <button className="yt_btn" onClick={() => clear()}>
              {" "}
              &#x274C;
            </button>
          </div>
        )}
        {
          <p id="yt_er" className="trailer_er">
            Can not find trailer !{" "}
            <button
              className="btn"
              onClick={() => {
                dlt();
              }}
            >
              &#x274C;
            </button>{" "}
          </p>
        }
      </div>
    </>
  );
}

export default Row;
