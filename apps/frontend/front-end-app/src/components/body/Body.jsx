import React from "react";
import FileUploader from '../fileUploader/fileUploader';
import Results from '../results/Results';
import "./body.css";


export default function Body() {
  
  return (
    <div className="body">
        <div className="fileUploader">
            <FileUploader />
        </div>
        <div className="separator">

        </div>
        <div className="results">
            <Results/>
        </div>
    </div>
  );
}
