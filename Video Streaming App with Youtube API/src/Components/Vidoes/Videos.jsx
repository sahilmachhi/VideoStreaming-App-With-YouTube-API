import { Box, Stack } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";
import { PropTypes } from "prop-types";

function Videos({ videos }) {
  console.log(videos);
  return (
    <>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((video, id) => {
          return (
            <Box key={id}>
              {video.id.videoId && <VideoCard video={video} />}
              {video.id.channelId && <ChannelCard channelDetail={video} />}
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Videos;
