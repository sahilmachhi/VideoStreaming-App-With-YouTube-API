import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Feed from "./Components/Feed/Feed";
import VideoDetail from "./Components/VideoDetail/VideoDetail";
import ChannelDetail from "./Components/ChannelDetail/ChannelDetail";
import SearchFeed from "./Components/SearchFeed/SearchFeed";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>hello</Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchId" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
