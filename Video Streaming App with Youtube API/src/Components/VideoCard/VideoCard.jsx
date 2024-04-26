import { Link } from "react-router-dom";
import { propTypes } from "prop-types";
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
      >
        {" "}
        {}
      </Link>
    </>
  );
}

VideoCard.propTypes = {
  video: propTypes.shape({
    id: propTypes.shape({
      videoId: propTypes.string.isRequired,
    }),
    snippet: propTypes.shape({
      channelTitle: propTypes.string.isRequired,
      publishTime: propTypes.string.isRequired,
      thumbnails: propTypes.shape({
        default: propTypes.shape({
          url: propTypes.string.isRequired,
        }),
      }),
    }),
  }),
};

export default VideoCard;
