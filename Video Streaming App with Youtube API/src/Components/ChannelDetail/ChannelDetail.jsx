import ChannelCard from "../ChannelCard/ChannelCard";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Videos from "../Vidoes/Videos";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../../Utils/FetchAPI";

function ChannelDetail() {
  const { id } = useParams();
  const [channel, setChannel] = useState();
  const [videos, setVideos] = useState([]);
  console.log("outside ", channel);

  useEffect(() => {
    // fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
    //   setChannel(data.items[0]);
    // });
    // fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
    //   (data) => {
    //     setVideos(data.items);
    //   }
    // );
    setChannel(null);
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannel(data?.items[0]);
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videosData?.items);
      fetchResults();
      console.log(channel);
    };
  }, [id]);
  return (
    <Box>
      <Box>
        <ChannelCard channelDetail={channel} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
