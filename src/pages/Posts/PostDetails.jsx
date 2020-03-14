import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { myFirebase } from '../../config/firebase';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Image } from "react-bootstrap";
import { userRef } from "../../utils/endpoints";
import moment from 'moment';
import Loading from "../../components/common/Loading";
import DefaultAvatar from "../../components/common/DefaultAvatar";

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchPost = () => {
        setLoading(true);
        const ref = myFirebase.firestore().collection('posts').doc(id);

        ref.get()
            .then((doc) => {
                    if (doc.exists) {
                        setPost(doc.data());
                        const user_id = doc.data().user.id;

                        userRef(user_id).get().then(doc => {
                            if (doc.exists) {
                                setUser({...doc.data(), id: user_id});
                            }
                        });
                    } else {
                        console.log("No such document!");
                    }
            })
            .catch((err) => setError(true))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchPost();
    }, []);

    const formatDate = () => {
        return moment(post.created_at.seconds).format('ll');
    };

    const Avatar = () => {
        if (user.avatar) {
            return (<Image src={user.image} roundedCircle style={{height: 50, width: 50}} className="ml-sm-2"/>);
        } else {
            let avatar = user.firstName.charAt(0) + user.lastName.charAt(0);
            avatar = avatar.toUpperCase();

            return <DefaultAvatar avatar={avatar}/>;
        }
    };

    if (error) return (<div>Something went wrong.</div>);
    if (loading) return (<Loading />);

     return (
        <Jumbotron fluid className="pt-3 pb-3">
            {post && <Container  className = "wholePost">
                <h1>{post.title}</h1>
                {user &&
                    <div className="d-flex align-items-center mb-3 mt-3">
                        <Avatar />
                        <p className="ml-2 mr-2 mb-0">{user.firstName} {user.lastName}</p>
                        <p className="mb-0">{formatDate()}</p>
                    </div>}
                <div>
                    <img src={post.image} alt="post image" id="postDetailsImage" className="mb-3"/>
                </div>
                <p>{post.content}</p>
            </Container>}
        </Jumbotron>
     )
}

export default PostDetails;
 