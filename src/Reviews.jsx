import React, { useEffect, useState } from "react";
import news from "./images/1.Newspaper.png";
import Nav from "./Nav";
import axios from "axios";
import arrow from "./svg/arrow-right.svg";

const Reviews = () => {
  const [albums, setAlbums] = useState([]);
  const [films, setFilms] = useState([]);

  const fetchData = (url, setData) => {
    axios
      .get(url)
      .then((response) => {
        const res = response.data;
        console.log(`Response from ${url}:`, res);
        setData(res);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error response from API:", error.response);
        }
      });
  };

  useEffect(() => {
    fetchData("/albums", setAlbums);
  }, []);

  useEffect(() => {
    fetchData("/films", setFilms);
  }, []);

  useEffect(() => {
    console.log("Films state:", films);
  }, [films]);

  return (
    <div className="relative bg-white overflow-y-auto">
      <Nav />
      <div className="mt-18 sm:ml-24">
        <img className="w-60 sm:w-72" src={news} alt="" />
        <div className="font-poppins font-bold sm:text-8xl text-7xl ml-4">
          reviews.
        </div>
        <div className="w-80 ml-4 mt-4 sm:mt-10 sm:w-1/2 text-base sm:text-lg font-medium">
          These are more so discussions (with varying quality) than reviews 😛.
          Be sure to check this site from time to time as I'll be periodically
          updating it with more of my favourite tunes and films.
        </div>
      </div>
      <div>
        <div className="mt-12 sm:mt-44">
          <div className="overflow-y-hidden sm:overflow-y-auto w-full h-[35rem] sm:h-[43rem] border-solid mt-2 carousel">
            <div
              className={`carousel-item w-full border-t-4 border-black items-center`}
              style={{ backgroundColor: "white" }}
            >
              <div className="h-72 w-[40rem] mt-20 sm:ml-24">
                <div
                  className={`font-extrabold text-8xl flex justify-center sm:justify-normal`}
                  style={{ color: "black" }}
                >
                  music
                </div>
                <div
                  className={`font-extrabold text-4xl text-black flex justify-center sm:justify-normal`}
                  style={{ color: "black" }}
                >
                  <a href="#slide0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {albums
              .sort((a, b) => a.id - b.id)
              .map((album, index) => (
                <div
                  id={`slide${index}`}
                  className={`sm:columns-2 carousel-item w-full overflow-y-auto sm:overflow-y-hidden overflow-x-hidden`}
                  key={album.title}
                  style={{ backgroundColor: album.first }}
                >
                  {window.innerWidth > 640 ? (
                    <img
                      className="sm:ml-[10rem] sm:mt-24 w-44 h-44 sm:w-[30rem] sm:h-[30rem] object-cover rounded-box"
                      src={album.path}
                      alt={album.title}
                    />
                  ) : null}

                  <div className="sm:h-72 sm:w-[40rem] h-40 w-36 sm:ml-20 sm:mt-24 mt-12 ml-4">
                    <div
                      className={`font-extrabold sm:text-6xl text-4xl`}
                      style={{ color: album.second }}
                    >
                      {album.title}
                    </div>

                    <div
                      className={`font-extrabold sm:text-6xl text-4xl text-[${album.second}]`}
                      style={{ color: album.second }}
                    >
                      {album.artist}
                      {/* {window.innerWidth < 640 ? (
                      <img
                        className="sm:ml-[15rem] sm:mt-24 w-44 h-44 sm:w-[30rem] sm:h-[30rem] object-cover rounded-box"
                        src={album.path}
                        alt={album.title}
                      />
                    ) : null} */}
                    </div>
                    <div className="sm:mt-4 sm:text-lg text-sm sm:w-auto sm:h-80 sm:overflow-y-scroll text-white w-96">
                      {album.review}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className="w-full h-[43rem] border-solid carousel">
            <div
              className={`carousel-item w-full border-t-4 border-black items-center`}
              style={{ backgroundColor: "white" }}
            >
              <div className="h-72 w-[40rem] mt-20 ml-24">
                <div
                  className={`font-extrabold text-8xl`}
                  style={{ color: "black" }}
                >
                  film
                </div>
                <div
                  className={`font-extrabold text-4xl text-black`}
                  style={{ color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            {films.map((film) => (
              <div
                className={`columns-2 carousel-item w-full`}
                key={film.title}
                style={{ backgroundColor: film.first }}
              >
                <img
                  className=" ml-[10rem] mt-24 w-[30rem] h-[30rem] object-cover rounded-box"
                  src={film.path}
                  alt={film.title}
                />

                <div className="h-72 w-[40rem] ml-20 mt-24">
                  <div
                    className={`font-extrabold text-6xl`}
                    style={{ color: film.second }}
                  >
                    {film.title}
                  </div>
                  <div
                    className={`font-extrabold text-6xl text-[${film.second}]`}
                    style={{ color: film.second }}
                  >
                    {film.artist}
                  </div>
                  <div className="mt-4 text-lg w-auto h-auto text-white">
                    {film.review}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
