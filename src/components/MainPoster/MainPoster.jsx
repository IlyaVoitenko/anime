import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "@material-tailwind/react";

const MainPoster = () => {
  return (
    <>
      <div className=" h-screen w-screen 2xl:w-screen bg-[url('./mb.jpg')] hidden sm:block sm:bg-[url('./wallpaperflare-cropped.jpg')] bg-no-repeat " />
      <div className="sm:absolute top-0 left-0 h-screen w-screen sm:w-1/2 flex justify-center items-center blur-[5px] sm:blur-[5px] bg-[url('./mb3.jpg')] sm:bg-[url('./wallpaperflare-cropped.jpg')] bg-no-repeat" />
      <div className="absolute top-0 h-screen flex flex-col justify-center items-center sm:w-1/2  w-screen">
        <h1 className="text-black mb-2">Naruto</h1>
        <Button color="amber">
          <span className="flex  items-center ">
            More
            <AiOutlineArrowRight />
          </span>
        </Button>
      </div>
    </>
  );
};

export default MainPoster;
