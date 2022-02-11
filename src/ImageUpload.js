import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { storage, db } from "./Firebase";

function ImageUpload() {
  const [image, setImage] = useState(null);  
  const [progress, setProgress] = useState(0);  
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
      if (e.target.files[0]) {
          setImage(e.target.files[0]);
      }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
  }

  return (
    <div>
      {/* I want to have... */}
      {/* Caption input */}
      {/* File picker */}
      {/* Post button */}

      <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)} value={caption}/>
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
}

export default ImageUpload;
