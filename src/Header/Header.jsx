import React from "react";
import "./Header.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Nav() {
  const [value, setvalue] = useState(false);
  const [search, setsearch] = useState(null);
  const [searchmovies, setsearchmovies] = useState([]);

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
    console.log(searchmovies, "from here");
  }

  //  useefect for search
  useEffect(() => {
    change();
  }, [search]);

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
        />
        <button id="searchbtn">search</button>
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
                        />
                        <h2 id="searchmoviename">{`${
                          item.title || item.original_title
                        }`}</h2>
                        <p id="searchmoviedes">{item.overview}</p>
                      </li>
                    </>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
}
///thMNnM22Uk1BVg0MHsL42sd3LJN.jpg
//poster path https://image.tmdb.org/t/p/original${movie.poster_path}
// query for serch
// https://api.themoviedb.org/3/search/movie?query=Avatar&api_key=8ef30a39bd41ae9b8b5105a0f18e5deb
export default Nav;
