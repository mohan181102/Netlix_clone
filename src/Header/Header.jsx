import React from "react";
import "./Header.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Nav() {
  const [value, setvalue] = useState(false);
  const [search, setsearch] = useState(null);
  const [searchmovies, setsearchmovies] = useState([]);
  const [youtube, setyoutube] = useState(null);

  let url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=8ef30a39bd41ae9b8b5105a0f18e5deb`;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setvalue(true);
      } else setvalue(false);
    });
  }, []);

  async function change() {
    if (search != null) {
      document.getElementById("serchdata").style.display = "block";
    } else if (search == null) {
      document.getElementById("serchdata").style.display = "none";
    }
    const localdata = await axios.get(url).catch((e) => console.log(e));
    await setsearchmovies(localdata.data.results);
    if (search == null) {
      setsearchmovies(null);
    }
    console.log(searchmovies);
    console.log(searchmovies, "from here");
  }

  //  useefect for search
  useEffect(() => {
    change();
  }, [search]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // trailler play

  function handlesubmit(movie) {
    document.getElementById("serchdata").style.display = "none";
    movieTrailer(movie).then((url) =>
      setyoutube(url.split("v=")[1].substring(0, 11))
    );
  }

  function clear() {
    setyoutube("");
    document.getElementById("yt_popup").style.display = "none";
  }

  return (
    <div className={`nav ${value ? "nav_change" : ""}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        alt="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
      <div id="search">
        <input
          id="input"
          onChange={(e) => setsearch(e.target.value ? e.target.value : null)}
          placeholder="Search.."
        />

        <div id="serchdata">
          <ul id="ulformovies">
            {searchmovies
              ? searchmovies.map((item) => {
                  return (
                    <>
                      <li id="everysearchmovie">
                        <img
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          loading="lazy"
                          id="seachimg"
                          onClick={() =>
                            handlesubmit(
                              item ? item.title || item.original_title : null
                            )
                          }
                        />
                        <h2 id="searchmoviename">
                          {`${item.title || item.original_title}`}
                        </h2>

                        <p id="searchmoviedes">{truncate(item.overview, 50)}</p>
                      </li>
                    </>
                  );
                })
              : "loading..."}
          </ul>
        </div>
        {youtube && (
          <div id="yt_popup" className="yt_div">
            <YouTube id="youtube" videoId={youtube} />
            <button className="yt_btn" onClick={() => clear()}>
              {" "}
              &#x274C;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
///thMNnM22Uk1BVg0MHsL42sd3LJN.jpg
//poster path https://image.tmdb.org/t/p/original${movie.poster_path}
// query for serch
// https://api.themoviedb.org/3/search/movie?query=Avatar&api_key=8ef30a39bd41ae9b8b5105a0f18e5deb
export default Nav;
