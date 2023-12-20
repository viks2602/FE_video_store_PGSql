import  { useEffect, useState } from 'react';
import axios from 'axios';

const VideoDisplay = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        // Fetch the video data from the server based on the videoId
        /* we need to pass dynamic video id here for fetch dymamic video after upload  */
        const response = await axios.get(`http://localhost:3000/api/videos/video/${1}`);

        // Set the video data in state
        setVideoData(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    // Call the fetchVideoData function when the component mounts
    fetchVideoData();
  }, []);

  return (
    <div>
      {videoData ? (
        <video controls>
          <source src={`data:video/mp4;base64,${videoData}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoDisplay;
