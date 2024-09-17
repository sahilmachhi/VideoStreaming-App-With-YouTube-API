import { Box, Stack } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";
import { PropTypes } from "prop-types";
import LoadingVideoCard from "../LoadingVideoCard/LoadingVideoCard";

function Videos({ videos, direction, isLoading }) {
  const loadingCard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        {isLoading
          ? loadingCard.map((id) => {
              return (
                <>
                  <LoadingVideoCard key={id} />
                </>
              );
            })
          : videos.map((video, id) => {
              if (video.id.playlistId) return null;
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
            })}
      </Stack>
    </>
  );
}

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Videos;
