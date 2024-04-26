import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function VideoCard({
  video: {
    id: { videoId },
    snippet: {
      channelTitle,
      publishTime,
      thumbnails: {
        default: { url },
      },
    },
  },
}) {
  console.log(videoId);
  return (
    <>
      <Link
        className="text-white"
        to={videoId ? `/video/${videoId}` : "/video/noId"}
      ></Link>
    </>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired,
    }),
    snippet: PropTypes.shape({
      channelTitle: PropTypes.string.isRequired,
      publishTime: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        default: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
    }),
  }),
};

export default VideoCard;
