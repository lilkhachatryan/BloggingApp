import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { myFirebase } from '../../config/firebase';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Image } from "react-bootstrap";
import moment from 'moment';
 
function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    const fetchPost = () => {
        const ref = myFirebase.firestore().collection('posts').doc(id);
        ref.get()
            .then((doc) => {
                    if (doc.exists) {
                        setPost(doc.data());
                        console.log("doc.data()", doc.data());
                        console.log("post", post);
                    } else {
                        console.log("No such document!");
                    }
            })
            .catch((err) => console.log("err -->", err))
    };

    useEffect(() => {
        fetchPost();
    }, []);

    const DefaultAvatar = () => {
        let avatar = post.user_id.firstName.charAt(0) + post.user_id.lastName.charAt(0);
        avatar = avatar.toUpperCase();
        return (<div style={{
                    height: 50,
                    width: 50,
                    borderRadius: '50%',
                    backgroundColor: '#007bff',
                    textAlign: 'center',
                    fontSize: 26,
                    color: '#fff'
                }}
                className="ml-sm-2">{avatar}</div>);
    };

    const formatDate = () => {
        return moment(post.created_at.seconds).format('ll');
    };

    const Avatar = () => {
        if (post.user.avatar) {
            return (<Image src={post.user.image} roundedCircle style={{height: 50, width: 50}} className="ml-sm-2"/>);
        } else {
            return <DefaultAvatar />;
        }
    };
     return (
        <Jumbotron fluid>
            {Object.keys(post).length && <Container  className = "wholePost">
                <h1>{post.title}</h1>
                <div>{post.user && <Avatar />}</div>
                <div>
                    <img src={post.image} alt="post image" id="postDetailsImage"/>
                </div>
                <p> {post.content}</p>
                <p>{formatDate()}</p>
            </Container>}
        </Jumbotron>
     )
}

export default PostDetails;
 