import React, { Component } from "react";
import Files from 'react-files'
 
class DummyFileUpload extends Component { 
  constructor(props) { 
    super(props)
  
    this.state = {
    }

  }
  changeHandler = Files => {
    console.log(Files)
  }
 
  render() {
    return (
        <div className="files">
        <Files
          className='files-dropzone'
          onChange={this.onFilesChange}
          //onError={this.onFilesError}
          accepts={['image/png', '.pdf', 'audio/*']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
      </div>
    );
  }
}export default DummyFileUpload;









