import storage from "../../../src/config/firebase";
import React, {useState}from 'react';
import { Button, Form, Col, Row } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';



function Pordznakan() {
    const [imgAsFile, setImgAsFile] = useState("");
    const [imgAsUrl,setImgAsUrl] = useState({imgUrl:""});
    console.log(imgAsFile,"imgAsFile");

    const handleImgAsFile = (e)=>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            console.log(image, "image");
            setImgAsFile(image);

            uploadFile();
        };
    }
        const handleFireUpload = e =>{
            e.preventDefault();
            console.log("start of upload");
       }

       if(imgAsFile === '') {
        console.error(`not an image, the image file is a ${typeof(imgAsFile)}`)
      }
      
    const uploadFile = () => {
        const uploadTask = storage.ref(`/images/${imgAsFile.name}`).put(imgAsFile);
      uploadTask.on('state_changed', 
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(imgAsFile.name).getDownloadURL()
         .then(fireBaseUrl => {
           setImgAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
         })
      })
    }

        return (
        <form onSubmit = {handleFireUpload}>
        <input accept="image/*"  id="icon-button-file" type="file" name = "file" onChange ={handleImgAsFile} />
        <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
        </IconButton>
        </label> 
        <Button onClick = {imgAsUrl.imgUrl}>Add File</Button>                     
        </form>  
    )
}
export default Pordznakan;
    