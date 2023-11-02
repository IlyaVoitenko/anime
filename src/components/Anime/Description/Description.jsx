const Description = ({ title_english, score, synopsis }) => {
  return (
    <div className="flex flex-col mt-10">
      <div className="text-2xl ">
        <span>{title_english}</span> |{" "}
        <span className="text-yellow-400">{score}</span>
      </div>
      <p className="mt-5">{synopsis}</p>
    </div>
  );
};

export default Description;
