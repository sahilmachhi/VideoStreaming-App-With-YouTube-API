import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
          width: { md: "330px", lg: "338px", sm: "320px", xs: "280px" },
          boxShadow: "none",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Link
          className="text-white"
          to={videoId ? `/video/${videoId}` : "/video/noId"}
          aria-label="play this youtube video"
        >
          <CardMedia
            image={videoDetails?.thumbnails?.high?.url}
            alt={videoDetails.title}
            sx={{
              width: { md: "330px", lg: "338px", sm: "320px", xs: "280px" },
              height: 180,
            }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link
            className="text-white"
            to={videoId ? `/video/${videoId}` : "/video/noId"}
          >
            <Typography
              variant="h2"
              fontWeight="700"
              fontSize={18}
              color="#fff"
            >
              {videoDetails.title.slice(0, 54) || "Video Title"}
            </Typography>
          </Link>
          <Link
            className="text-white"
            to={channelId ? `/channel/${channelId}` : "/Channel/noId"}
            aria-label="go to this youtube channel page"
          >
            <Typography
              variant="body1"
              fontWeight="700"
              fontSize={14}
              color="#fff"
            >
              {videoDetails.channelTitle.slice(0, 60) || "Channel Title"}
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
VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }).isRequired,
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      channelId: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        high: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
export default VideoCard;
