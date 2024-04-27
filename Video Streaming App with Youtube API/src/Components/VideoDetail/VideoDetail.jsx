import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../Utils/FetchAPI";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

function VideoDetail() {
  let [videoDetail, setVideoDetail] = useState({});
  let videoId = useParams().id;
  console.log(videoId);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [videoId]);
  console.log(videoDetail);
  // if (!videoDetail) {
  //   videoDetail = "loading";
  // }

  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                className="react-player"
                controls
              />
              <Typography
                color="#fff"
                variant="h5"
                fontWeight="bold"
                p={2}
                fontSize={28}
              >
                {!videoDetail?.snippet?.localized?.title
                  ? "loading"
                  : videoDetail?.snippet?.localized?.title}
              </Typography>
              {/* <Typography
                color="#fff"
                variant="subtitle2"
                // fontWeight="bold"
                fontSize={20}
                p={2}
              >
                {!videoDetail?.snippet?.localized?.description
                  ? "loading"
                  : videoDetail?.snippet?.localized?.description}
              </Typography> */}
              <Stack
                direction="row"
                py={1}
                px={2}
                justifyContent="space-between"
                sx={{ color: "#fff" }}
              >
                <Link to={`/channel/${videoId.snippet.channelId}`}>
                  <Typography
                    color="#fff"
                    variant={{ sm: "subtitle1", md: "h6" }}
                    fontWeight="bold"
                    p={2}
                    fontSize={28}
                  >
                    {!videoId.snippet.channelTitle
                      ? "loading"
                      : videoId.snippet.channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {/* write api value here */} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {/* write api value here */} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default VideoDetail;
