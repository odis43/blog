{
  /* <div>
          <div className="font-poppins font-bold text-3xl mt-10">music ♫</div>
          <div className="w-[66.313rem] h-[32.625rem] border-solid border-2 border-black mt-2 mb-10 carousel rounded-box">
            {albums.map((album) => (
              <div
                className={`columns-2 carousel-item w-full`}
                key={album.title}
                style={{ backgroundColor: album.first }}
              >
                <img
                  className=" ml-16 mt-16 w-96 h-96 object-cover rounded-box"
                  src={album.path}
                  alt={album.title}
                />

                <div className="h-72 w-[30.938rem] ml-20 mt-16">
                  <div
                    className={`font-extrabold text-5xl`}
                    style={{ color: album.second }}
                  >
                    {album.title}
                  </div>
                  <div
                    className={`font-extrabold text-5xl text-[${album.second}]`}
                    style={{ color: album.second }}
                  >
                    {album.artist}
                  </div>
                  <div className="w-auto h-auto text-white">{album.review}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */
}
