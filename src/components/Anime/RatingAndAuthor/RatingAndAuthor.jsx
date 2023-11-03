const RatingAndAuthor = ({ title_english, score, author }) => {
  return (
    <div className=" flex flex-col  sm:flex-row justify-between items-center">
      <div className="text-2xl ">
        <span>{title_english || "title"}</span> |{" "}
        <span className="text-yellow-400">{score || "score"}</span>
      </div>{" "}
      <div className=" w-full sm:mt-0 mt-4  sm:w-[8vw]  text-center">
        <img src={author?.images.jpg.image_url} alt={author?.name} />
        <p>{author?.name}</p>
      </div>
    </div>
  );
};

export default RatingAndAuthor;
