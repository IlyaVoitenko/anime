import { useEffect } from "react";
import { setTopAnime } from "../../store/thunk";
import { useDispatch } from "react-redux";

import MainPoster from "../MainPoster";
import PreviewTopAnime from "../PreviewTopAnime";
import Header from "../Header";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTopAnime());
  }, [dispatch]);

  return (
    <section>
      <div className="relative">
        <Header isBlackLinks={true} />
        <MainPoster />
      </div>
      <PreviewTopAnime />
    </section>
  );
};

export default Home;
