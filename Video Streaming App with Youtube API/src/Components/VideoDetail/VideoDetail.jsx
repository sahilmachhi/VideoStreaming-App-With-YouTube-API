import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../Utils/FetchAPI";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import Videos from "../Vidoes/Videos";

function VideoDetail() {
  let [isLoading, setLoading] = useState(true);
  let [videoDetail, setVideoDetail] = useState({});
  let videoId = useParams().id;
  let [videos, setVideos] = useState([]);
  let [profile, setProfile] = useState(null);
  let [channelId, setChannelId] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
      (data) => {
        setLoading(false);
        setVideoDetail(data.items[0]);
        setChannelId(data.items[0].snippet.channelId);
      }
    );
    fetchFromAPI(
      `search?part=snippet&type=video&relatedToVideoId=${videoId}`
    ).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [videoId]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) => {
      setProfile(data.items[0]?.snippet?.thumbnails?.default?.url);
    });
  }, [channelId]);

  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky" }}>
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

              <Stack
                direction="col"
                py={1}
                px={2}
                justifyContent="left"
                alignItems="center"
                gap={2}
                sx={{ color: "#fff" }}
              >
                <Link
                  to={`/channel/${
                    videoDetail?.snippet?.channelId
                      ? videoDetail?.snippet?.channelId
                      : null
                  }`}
                >
                  {profile ? (
                    <img
                      src={profile}
                      alt="profile photo"
                      className="size-12 rounded-full"
                    />
                  ) : null}
                </Link>
                <Link
                  to={`/channel/${
                    videoDetail?.snippet?.channelId
                      ? videoDetail?.snippet?.channelId
                      : null
                  }`}
                >
                  <Typography
                    color="#fff"
                    variant="h2"
                    fontWeight="bold"
                    p={2}
                    fontSize={28}
                  >
                    {!videoDetail?.snippet?.channelTitle
                      ? "loading"
                      : videoDetail?.snippet?.channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {videoDetail?.statistics?.viewCount
                      ? videoDetail?.statistics?.viewCount
                      : "loading"}{" "}
                    views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {videoDetail?.statistics?.likeCount
                      ? videoDetail?.statistics?.likeCount
                      : "loading"}{" "}
                    likes
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                color="#fff"
                variant="subtitle2"
                // fontWeight="bold"
                fontSize={20}
                p={2}
              >
                {videoDetail?.snippet?.localized?.description
                  ? videoDetail?.snippet?.localized?.description
                  : "loading"}
              </Typography>
            </Box>
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
            sx={{ overflowY: "scroll" }}
          >
            <Videos videos={videos} direction="column" isLoading={isLoading} />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default VideoDetail;
