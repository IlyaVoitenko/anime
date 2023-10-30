import { useEffect } from "react";
// import { getTopAnime } from "../../services/api";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "@material-tailwind/react";

import Header from "../Header";

const Home = () => {
  useEffect(() => {
    // getTopAnime();
  }, []);

  return (
    <section className="relative">
      <Header />
      <div className="h-screen w-screen  bg-[url('./wallpaperflare-cropped.jpg')] bg-no-repeat" />
      <div className="absolute top-0 left-0 h-screen w-1/2 flex justify-center items-center blur-[5px]  bg-[url('./wallpaperflare-cropped.jpg')] bg-no-repeat" />
      <div className="absolute  top-0 h-screen flex flex-col justify-center items-center w-1/2 ">
        <h1 className="text-black mb-2">Naruto</h1>
        <Button color="amber">
          <span className="flex  items-center ">
            More
            <AiOutlineArrowRight />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Home;
