const Poster = ({ image, alt }) => {
  return (
    <div className="relative flex items-center justify-center mt-2">
      <div
        className={`absolute inset-0 z-0 bg-cover filter blur-lg blur-y-0 hidden sm:block`}
      >
        <img src={image} className="w-full h-[38vw] mt-4 " alt={alt} />
      </div>
      <div className="z-10">
        <img
          src={image}
          alt={alt}
          className=" w-screen h-full sm:w-[30vw] sm:h-[40vw] "
        />
      </div>
    </div>
  );
};

export default Poster;
