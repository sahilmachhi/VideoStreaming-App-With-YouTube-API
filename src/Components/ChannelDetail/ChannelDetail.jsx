import ChannelCard from "../ChannelCard/ChannelCard";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Videos from "../Vidoes/Videos";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../Utils/FetchAPI";
import PropTypes from "prop-types";

function ChannelDetail() {
  let id = useParams().id;
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isVideoLoading, setVideoLoading] = useState(true);
  const [isChannelLoading, setChannelLoading] = useState(true);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelLoading(false);
      setChannel(data.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideoLoading(false);
        setVideos(data.items);
      }
    );
  }, [id]);
  console.log(channel);
  return (
    <Container sx={{ backgroundColor: "black" }}>
      <Box
        minHeight="95vh"
        flexDirection="column"
        sx={{ backgroundColor: "black", display: "flex", alignItems: "center" }}
      >
        <Box>
          <div
            style={{
              zIndex: 10,
              height: "300px",
              background: `linear-gradient(107deg, rgba(253,48,255,1) 18%, rgba(255,48,48,1) 29%, rgba(255,113,48,1) 46%, rgba(255,45,144,1) 62%, rgba(255,41,41,1) 100%)`,
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Box>
        <ChannelCard
          channelDetail={channel}
          mt={"-93px"}
          isLoading={isChannelLoading}
        />
        <Box display="flex" p="2">
          {/* <Box sx={{ mr: { xs: "100px" } }} /> */}
          <Videos videos={videos} isLoading={isVideoLoading} />
        </Box>
      </Box>
    </Container>
  );
}

ChannelDetail.propTypes = {
  id: PropTypes.string,
};

export default ChannelDetail;
