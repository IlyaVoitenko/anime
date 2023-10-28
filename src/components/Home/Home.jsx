import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getTopAnime = async () => {
      const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
      console.log(data.data);
      console.log(data?.data[0].images.jpg.large_image_url);
      setData(data);
      return data;
    };
    getTopAnime();
  }, []);
  return (
    <section className="p-0" id="home">
      <div className="home-slider">
        <div className="wrappen">
          <div className="slide">
            <div
              className={`flex text-center justify-end pt-[2rem] pr-[9%] bg-cover	bg-center	 bg-[url('https://cdn.myanimelist.net/images/anime/1208/94745l.jpg')] bg-no-repeat min-h-screen`}
            >
              <div className="content">
                <h3>{data?.data[0].title_english}</h3>
                <p>{data?.data[0].synopsis}</p>
                <a href="#" className="btn">
                  download
                </a>
              </div>
            </div>
          </div>

          <div className="slide">
            <div
              className={`flex text-center justify-start pt-[2rem] pr-[9%] bg-cover	bg-center	bg-[url('https://cdn.myanimelist.net/images/anime/1935/127974l.jpg')] bg-no-repeat min-h-screen`}
            >
              <div className="content">
                <h3>{data?.data[1].title_english}</h3>
                <p>{data?.data[1].synopsis}</p>
                <a href="#" className="btn">
                  download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
