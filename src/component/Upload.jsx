


import  { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function Upload({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onUpload(response.data.id);
      console.log('Video uploaded with ID:', response.data.id);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

// Add prop validation
Upload.propTypes = {
    onUpload: PropTypes.number.isRequired, // Adjust the prop type if needed
  };
  

export default Upload;


