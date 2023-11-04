import ReactPlayer from "react-player";
import { animeTrailerSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";
import { validPlayerUrl } from "../../../utils/helpers";

const Player = () => {
  const animeTrailer = useSelector(animeTrailerSelector);
  return (
    <div className="mt-5 ">
      <ReactPlayer
        url={validPlayerUrl(animeTrailer.data)}
        controls={true}
        width="100%"
        height="500px"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
            forceDASH: true, // Включить поддержку DASH
          },
        }}
        playing={false}
        playbackRate={1.0}
      />
    </div>
  );
};

export default Player;
