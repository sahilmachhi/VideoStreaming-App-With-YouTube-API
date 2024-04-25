import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Sidebar from "../Sidebar/Sidebar";
import { Typography } from "@mui/material";

function Feed() {
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
        <Sidebar />
      </Box>
      <Box>
        <Typography variant="h4">
          <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
      </Box>
    </Stack>
  );
}

export default Feed;
