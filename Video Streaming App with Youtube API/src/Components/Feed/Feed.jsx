import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Sidebar from "../Sidebar/Sidebar";

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
    </Stack>
  );
}

export default Feed;
