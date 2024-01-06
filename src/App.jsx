import React, { useEffect } from "react";
import Row from "./Row/Row";
import requist from "./request";
import Banner from "./Banner/Banner";
import "./App.css";
import LoadingBar from "react-top-loading-bar";
import Nav from "./Header/Header";
import { useState } from "react";
import Loader from "./Loader";

function App() {
  const [progress, setprogress] = useState(0);

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 7000);

  return (
    <div className="app">
      {/* <div id="loading">
        <div id="loader"></div>
      </div> */}
      <Loader />
      <Nav />
      {/*Banner  */}
      <Banner />

      <Row title="Netflix orignals" fetchurl={requist.fetch_Netflix_Orignals} />

      <Row
        title="Trending now"
        backdrop={true}
        fetchurl={requist.fetchtrending}
      />
      <Row
        title="Top rated"
        backdrop={true}
        fetchurl={requist.fetch_Top_Rated}
      />

      <Row
        title="Action"
        backdrop={true}
        fetchurl={requist.fetch_Action_movies}
      />
      <Row
        title="Comedy"
        backdrop={true}
        fetchurl={requist.fetch_Comedy_movies}
      />
      <Row
        title="Horror"
        backdrop={true}
        fetchurl={requist.fetcht_Horror_movies}
      />

      <Row
        title="Romantic"
        backdrop={true}
        fetchurl={requist.fetcht_Romantic_movies}
      />
      <Row
        title="Documentries"
        backdrop={true}
        fetchurl={requist.fetcht_Documentaries}
      />
      <Loader display={false} />
    </div>
  );
}

export default App;

//tmdb api:- 8ef30a39bd41ae9b8b5105a0f18e5deb

//https://netflix-clone-e057c.web.app/
