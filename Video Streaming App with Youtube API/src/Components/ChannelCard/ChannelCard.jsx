import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function ChannelCard({ channelDetail, mt }) {
  let route = channelDetail?.snippet?.channelId;
  let route2;
  if (!route) {
    route2 = channelDetail?.id;
  }

  return (
    <>
      <Box sx={{ boxShadow: "none", borderRadius: "20px", marginTop: mt }}>
        <Link to={route ? `/channel/${route}` : `/channel/${route2}`}>
          <CardContent className="flex flex-col justify-center text-center text-white">
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.medium?.url}
              alt={"name"}
              sx={{
                width: "180px",
                height: "180px",
                mb: 2,
                border: "1px solid",
              }}
            />
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
            </Typography>
          </CardContent>
        </Link>
      </Box>
    </>
  );
}

ChannelCard.propTypes = {
  channelDetail: PropTypes.shape({
    id: PropTypes.string,
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      channelId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  mt: PropTypes.string,
};

export default ChannelCard;
