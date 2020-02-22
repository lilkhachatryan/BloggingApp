import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import {myFirebase} from '../../config/firebase';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container,Image} from "react-bootstrap";
import {connect} from "react-redux"

 
 function PostDetails(props) {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    console.log("post 111", post);

    
    const fetchPost = () => {
        console.log("post_222", post);
        const ref = myFirebase.firestore().collection('posts').doc(id);
        ref.get()
            .then((doc) => {
                console.log("post_333", post);
                    if (doc.exists) {                    
                        setPost(doc.data()); 
                        console.log('doc.data().user_id', doc.data().user_id);
                        setUser(doc.data().user_id);                        
                    } else {
                        console.log("No such document!");
                    }          
                
            })
            .catch((err) => console.log("err -->", err))
    };

    useEffect(() => {
        fetchPost();
        console.log("post_44", post);
    }, []);

    // useEffect(() => {
    //     setUser(post.user_id);
    //     // console.log("user", user);

    // }, [post]);
    // console.log("user", user);


    const defaultAvatar = () => {
        const avatar = user.firstName.charAt(0) + user.lastName.charAt(0);
        return avatar.toUpperCase();
    }
     return (
        <Jumbotron fluid>
            {post && <Container  className = "wholePost">
                <h1>{post.title}</h1>
                {user && <div>
                        {user.avatar ? <Image src={user.image} roundedCircle style={{height: 50, width: 50}} className="ml-sm-2"/>
                                : <div style={{
                                            height: 50,
                                            width: 50,
                                            borderRadius: '50%',
                                            backgroundColor: '#007bff',
                                            textAlign: 'center',
                                            fontSize: 26,
                                            color: '#fff'
                                        }}
                                    className="ml-sm-2">{defaultAvatar()}</div>
                        } 
                    </div>
                }
                <div>
                    <img src={post.image} alt="post image" id="postDetailsImage"/>
                </div>
                <p> {post.content}</p>
                <p>{JSON.stringify(post.created_at)}</p>
            </Container>}
        </Jumbotron>
     )
 }

export default PostDetails;
 