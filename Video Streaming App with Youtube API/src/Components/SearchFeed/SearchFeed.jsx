import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Videos from "../Vidoes/Videos";
import { fetchFromAPI } from "../../Utils/FetchAPI";
import { useEffect, useState } from "react";
function SearchFeed() {
  let searchId = useParams().searchId;
  let [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchId}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [searchId]);
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          paddingLeft: { sm: "2rem", xs: "0.8rem", md: "6rem" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          textAlign="left"
          sx={{
            color: "white",
          }}
        >
          search results for:
          <span style={{ color: "#F31503" }}> {searchId} </span>
        </Typography>
        <Videos videos={videos} isLoading={isLoading} />
      </Box>
    </Stack>
  );
}

export default SearchFeed;
