import  { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a video file.');
        return;
      }

      const formData = new FormData();
      formData.append('video', selectedFile);

      // Send the video file to the server for upload
      await axios.post('http://localhost:3000/api/videos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle successful upload
      alert('Video uploaded successfully');
      setSelectedFile(null); // Clear the selected file input
    } catch (error) {
      console.error(error);
      // Handle upload error
      alert('An error occurred while uploading the video.');
    }
  };

  return (
    <div>
      <h2>Upload a Video</h2>
      <input type="file" accept="video/" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default VideoUpload;
