import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import {myFirebase} from '../../config/firebase';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container} from "react-bootstrap"

 
 function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    
    const fetchPost = () => {

        const ref = myFirebase.firestore().collection('posts').doc(id);

        ref.get()
            .then((doc) => {
                    if (doc.exists) {
                        //debugger;                      
                        setPost(doc.data()); 
                        
                    } else {
                        console.log("No such document!");
                    }          
                
            })
            .catch((err) => console.log("err -->", err))
    };

    useEffect(() => {
        fetchPost();
    }, []);
    
     return (

    <Jumbotron fluid>
         <Container  className = "wholePost">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{JSON.stringify(post.created_at)}</p>
        </Container>
    </Jumbotron>
     )
 }
 
 export default PostDetails
 