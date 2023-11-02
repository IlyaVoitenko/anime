import ReactPlayer from "react-player";

const Player = () => {
  return (
    <div className="mt-5">
      <ReactPlayer
        url="https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8"
        controls={true}
        width="100%"
        height="auto"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload", // Отключить скачивание
            },
            tracks: [],
            forceDASH: true, // Включить поддержку DASH
          },
        }}
        playing={false}
        playbackRate={1.0}
        onReady={() => console.log("Video is ready")}
        onPlay={() => console.log("Video is playing")}
        onPause={() => console.log("Video is paused")}
        onEnded={() => console.log("Video has ended")}
        onError={(error) => console.error("Video error:", error)}
        onSeek={(seconds) => console.log("Seeked to:", seconds)}
      />
    </div>
  );
};

export default Player;
