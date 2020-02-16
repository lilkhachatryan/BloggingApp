import { storage } from "../../../src/config/firebase";
import React, { useState }from 'react';
import { Button, Form, Col, Row } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';



function Pordznakan() {
    const [imgAsFile, setImgAsFile] = useState(new File([], ''));
    const [imgAsUrl,setImgAsUrl] = useState({imgUrl:""});

    const handleImgAsFile = (e)=>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            console.log(image, "image");
            setImgAsFile(image);
        }
        console.log(imgAsFile,"imgAsFile");

    };
    const handleFireUpload = e =>{
        e.preventDefault();
        console.log("start of upload");
    };
    const handleSubmit = () => {        
        uploadFile();
    };
      
    const uploadFile = () => {
        if(imgAsFile === '') {
            console.error(`not an image, the image file is a ${typeof(imgAsFile)}`)
        }
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
    };

        return (
            <>
        <form onSubmit = {handleFireUpload}>
        <input accept="image/*"  id="icon-button-file" type="file" name = "file" onChange ={handleImgAsFile} />
        <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
        </IconButton>
        </label> 
        <Button onClick = {handleSubmit}>Add File</Button>                     
        </form>  
        <img src = {imgAsUrl.imgUrl}/>
        </>
    )
}
export default Pordznakan;
    