import { Link } from "react-router-dom";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
function VideoCard({ video }) {
  const videoId = video.id.videoId;
  const videoDetails = video.snippet;
  const channelId = video.snippet.channelId;
  return (
    <>
      <Card
        sx={{
          width: { md: "320px", xs: "100%" },
          boxShadow: "none",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Link
          className="text-white"
          to={videoId ? `/video/${videoId}` : "/video/noId"}
        >
          <CardMedia
            image={videoDetails?.thumbnails?.high?.url}
            alt={videoDetails.title}
            sx={{ width: 358, height: 180 }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link
            className="text-white"
            to={videoId ? `/video/${videoId}` : "/video/noId"}
          >
            <Typography variant="subtitle1" fontWeight="700" color="#fff">
              {videoDetails.title.slice(0, 60) || "no Title"}
            </Typography>
          </Link>
          <Link
            className="text-white"
            to={channelId ? `/channel/${channelId}` : "/Channel/noId"}
          >
            <Typography variant="subtitle2" fontWeight="700" color="#fff">
              {videoDetails.channelTitle.slice(0, 60) || "no Title"}
              <CheckCircle
                sx={{ fontSize: "1rem", ml: "0.3rem", color: "grey" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}

export default VideoCard;
