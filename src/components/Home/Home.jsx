import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  // const [image, setImage] = useState("");
  const [content, setContent] = useState(null);
  useEffect(() => {
    const getTopAnime = async () => {
      const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
      console.log(data.data[0]);
      // setImage(data.data[0].images.jpg.image_url);
      setContent({
        name: data.data[0].title_english,
        title: data.data[0].synopsis,
      });
      return data;
    };
    getTopAnime();
  }, []);
  return (
    <section className="home" id="home">
      <div className="home-slider">
        <div className="wrappen">
          <div className="slide">
            <div className={styles.box}>
              <div className="content">
                <h3>{content?.name}</h3>
                <p>{content?.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
