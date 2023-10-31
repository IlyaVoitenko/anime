import { Link } from "react-router-dom";

const ListTopAnime = ({ list }) => {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row justify-evenly items-center  mt-10 mb-10">
      {list &&
        list.map((anime) => (
          <Link key={anime.mal_id} to={"/top-anime"} className="text-white">
            <div className="flex flex-col mr-2 ml-2 w-6/12 h-2/3 sm:w-[12vw] sm:h-[20vw] text-center mt-5 mb-5 items-center">
              <img
                src={anime.images.jpg.image_url}
                className="w-screen h-3/4  sm:w-[12vw] sm:h-[17vw]"
                alt={anime.title_english}
              />
              <span>{anime.title_english}</span>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ListTopAnime;
