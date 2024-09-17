import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Sidebar from "../Sidebar/Sidebar";
import { Typography } from "@mui/material";
import Videos from "../Vidoes/Videos";
import { fetchFromAPI } from "../../Utils/FetchAPI";
import { useEffect, useState } from "react";
function Feed() {
  let [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${category}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [category]);
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          padding: {
            sx: 0,
            md: 2,
          },
          color: "white",
        }}
      >
        <Sidebar category={category} setCategory={setCategory} />
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          paddingLeft: { sm: "2rem", xs: "0.8rem", md: "2rem" },
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
          {category}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos} isLoading={isLoading} />
      </Box>
    </Stack>
  );
}

export default Feed;
