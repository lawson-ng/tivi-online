import React from "react";
import ReactPlayer from "react-player";

const URL = "https://thvli-live2.admon.com.vn/thvli/thvl2-abr/playlist.m3u8";
const VideoPlayer = (props) => {
  return (
    <ReactPlayer
      className="react-player"
      // This is the video address passed from the superior page
      url={URL}
      playing
      width="100%"
      controls
      config={{
        file: {
          forceHLS: true,
        },
      }}
    />
  );
};
export default VideoPlayer;
