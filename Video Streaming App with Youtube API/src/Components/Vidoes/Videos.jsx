import { Box, Stack } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";
import { PropTypes } from "prop-types";

function Videos({ videos, direction, isLoading }) {
  return (
    <>
      <Stack
        direction={direction ? direction : "row"}
        flexWrap="wrap"
        justifyContent="left"
        alignItems="left"
        // width="100%"
        gap={2}
        className="ml-[2rem] sm:ml-[1rem] md:ml-2 lg:ml-0"
      >
        {isLoading ? (
          <h1 className="text-white">loading</h1>
        ) : (
          videos.map((video, id) => {
            return (
              <Box
                key={id}
                // display="flex"
                // justifyContent="center"
                // alignItems="center"
              >
                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard channelDetail={video} />}
              </Box>
            );
          })
        )}
      </Stack>
    </>
  );
}

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Videos;
