import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function ChannelCard({ channelDetail, mt }) {
  let route = channelDetail?.snippet?.channelId;
  let route2;
  if (!route) {
    route2 = channelDetail?.id;
  }

  let subCount = channelDetail?.statistics?.subscriberCount;
  let sub = formatNumber(subCount);
  function formatNumber(subCount) {
    if (subCount < 1000) {
      return subCount.toString();
    } else if (subCount < 100000) {
      return (subCount / 1000).toFixed(1) + "K";
    } else if (subCount < 1000000) {
      return (subCount / 100000).toFixed(1) + "L";
    } else {
      return (subCount / 1000000).toFixed(1) + "M";
    }
  }

  return (
    <>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          marginTop: mt,
          width: { md: "330px", lg: "338px", sm: "320px", xs: "280px" },
        }}
      >
        <Link
          to={route ? `/channel/${route}` : `/channel/${route2}`}
          target="channel_detail"
        >
          <CardContent className="flex flex-col justify-center text-center text-white items-center">
            {channelDetail?.snippet?.thumbnails?.medium?.url ? (
              <CardMedia
                image={channelDetail?.snippet?.thumbnails?.medium?.url}
                alt={"name"}
                sx={{
                  width: "180px",
                  height: "180px",
                  mb: 2,
                  border: "1px solid",
                }}
                className="rounded-full"
              />
            ) : null}
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
            </Typography>
            {subCount ? <Typography>{sub} subscribers</Typography> : null}
          </CardContent>
        </Link>
      </Box>
    </>
  );
}

ChannelCard.propTypes = {
  channelDetail: PropTypes.shape({
    id: PropTypes.string,
    statistics: PropTypes.string,
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
