
import React, { Component } from "react";
import Files from 'react-files'
var images = []
class DummyFileUpload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgUpload: 'hello',
      imgs: ['']
    }
    this.filechangehandler = this.filechangehandler.bind(this)

  }
  filechangehandler(e) {
    var files = e.target.files
    var imgArray = this._renderFiles(files) 
   
  }


/**
 *   resourses/images/timestamp.json 
 * data: {
 *   "timestamp":reader.result
 * }
 * 
 * 
 */
  _renderFiles(files) {

    var newimgs = []
    const that = this
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        console.log("image upload :::: " + i + " || " + reader.result)
        const single = '<img src=' + reader.result + ' />'
        document.getElementsByClassName('imgBox')[0].innerHTML = document.getElementsByClassName('imgBox')[0].innerHTML + single  
        newimgs.push(single)

      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    }

    return newimgs
  }
  render() {
    return (
      <div className="files">
        <input
          type="file"
          className="input-file"
          name="imgUpload"
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          accepts={['image/png', '.pdf', 'audio/*']}
          onChange={this.filechangehandler} />
        <p>{this.state.imgUpload}</p>
        <div className="imgBox">

        </div>

      </div>
    );
  }
}
export default DummyFileUpload;













//If you want to upload an image without posting to a server, you can use base64.
//
{/*
import React, { Component } from "react";
import Files from 'react-files'
 
class DummyFileUpload extends Component { 
  constructor(props) { 
    super(props)
  
    this.state = {
    }

  }
  changeHandler = files => {
    window['files'] = files  
    console.log(files)
  }
 
  render() {
    return (
        <div className="files">
        <Files
          className='files-dropzone'
          onChange={this.changeHandler}
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








*/}