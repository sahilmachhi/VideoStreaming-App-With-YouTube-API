import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ChannelCard({ channelDetail }) {
  return (
    <>
      <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
        <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
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

export default ChannelCard;
