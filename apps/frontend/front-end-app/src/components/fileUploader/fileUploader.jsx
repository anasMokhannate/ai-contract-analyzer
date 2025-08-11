import React from "react";
import "./fileUploader.css";

export default function FileUploader() {
  
  return (
    <div className="fileUploader">
        <h2>File Uploader</h2>
        <form>
            <input type="file" id="fileInput" />
            <button type="submit">Upload</button>
        </form>
        <div className="fileList">
            <h3>Uploaded Files:</h3>
            <ul id="uploadedFiles">
            {/* List of uploaded files will be displayed here */}
            </ul>
        </div>

    </div>
  );
}
