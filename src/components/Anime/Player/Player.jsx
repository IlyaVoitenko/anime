import ReactPlayer from "react-player";
import { animeTrailerSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";

const Player = () => {
  const animeTrailer = useSelector(animeTrailerSelector);
  const { music_videos, promo } = animeTrailer.data;
  return (
    <div className="mt-5 ">
      <ReactPlayer
        url={
          promo.length === 0
            ? music_videos[0].video.embed_url
            : promo[0].trailer.embed_url
        }
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
