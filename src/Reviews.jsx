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
      <div className="mt-18 ml-24">
        <img className="w-64" src={news} alt="" />
        <div className="font-poppins font-bold text-8xl ">reviews.</div>
        <div className="mt-10 w-1/2 text-lg">
          Was never much of a reviewer, at least until now. Thought I'd finally
          give it a go for my favourite pieces of music and film. This year I
          found myself really enjoying modern jazz and neo soul bands like
          BADBADNOTGOOD and Hiatus Kaiyote. Be sure to check this site from time
          to time as I'll be periodically updating it with more tunes and films.
        </div>
      </div>
      <div>
        <div className="mt-44">
          <div className="w-full h-[43rem] border-solid mt-2 carousel">
            <div
              className={`carousel-item w-full border-t-4 border-black items-center`}
              style={{ backgroundColor: "white" }}
            >
              <div className="h-72 w-[40rem] mt-20 ml-24">
                <div
                  className={`font-extrabold text-8xl`}
                  style={{ color: "black" }}
                >
                  music
                </div>
                <div
                  className={`font-extrabold text-4xl text-black`}
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
            {albums.map((album, index) => (
              <div
                id={`slide${index}`}
                className={`columns-2 carousel-item w-full`}
                key={album.title}
                style={{ backgroundColor: album.first }}
              >
                <img
                  className=" ml-[15rem] mt-24 w-[30rem] h-[30rem] object-cover rounded-box"
                  src={album.path}
                  alt={album.title}
                />

                <div className="h-72 w-[40rem] ml-20 mt-24">
                  <div
                    className={`font-extrabold text-6xl`}
                    style={{ color: album.second }}
                  >
                    {album.title}
                  </div>
                  <div
                    className={`font-extrabold text-6xl text-[${album.second}]`}
                    style={{ color: album.second }}
                  >
                    {album.artist}
                  </div>
                  <div className="mt-4 text-lg w-auto h-auto text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Gravida arcu ac tortor dignissim convallis aenean et
                    tortor. Ipsum dolor sit amet consectetur adipiscing. Arcu
                    dui vivamus arcu felis bibendum ut tristique et egestas.
                    Interdum velit euismod in pellentesque massa placerat.
                    Pretium fusce id velit ut tortor pretium viverra suspendisse
                    potenti. Porttitor leo a diam sollicitudin tempor id eu.
                    Gravida arcu ac tortor dignissim convallis aenean et. Id
                    neque aliquam vestibulum morbi blandit cursus risus. Tellus
                    elementum sagittis vitae et leo duis ut diam quam. Venenatis
                    urna cursus eget nunc scelerisque viverra mauris in. Dapibus
                    ultrices in iaculis nunc sed augue lacus.
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
                  className=" ml-[15rem] mt-24 w-[30rem] h-[30rem] object-cover rounded-box"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Gravida arcu ac tortor dignissim convallis aenean et
                    tortor. Ipsum dolor sit amet consectetur adipiscing. Arcu
                    dui vivamus arcu felis bibendum ut tristique et egestas.
                    Interdum velit euismod in pellentesque massa placerat.
                    Pretium fusce id velit ut tortor pretium viverra suspendisse
                    potenti. Porttitor leo a diam sollicitudin tempor id eu.
                    Gravida arcu ac tortor dignissim convallis aenean et. Id
                    neque aliquam vestibulum morbi blandit cursus risus. Tellus
                    elementum sagittis vitae et leo duis ut diam quam. Venenatis
                    urna cursus eget nunc scelerisque viverra mauris in. Dapibus
                    ultrices in iaculis nunc sed augue lacus.
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
