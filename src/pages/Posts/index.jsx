import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import{Card,ListGroup,ListGroupItem ,Row,Col,Table,Form,FormControl,Button} from "react-bootstrap";
import ReadMoreReact from 'read-more-react';
import {Link} from "react-router-dom"

// import {useActions} from'./actions';
import {myFirebase} from '../../config/firebase';

function Posts(props) {
    const [posts, setPosts] = useState([]);
    
    const fetchPosts = () => {

        const ref = myFirebase.firestore().collection('posts');

        ref.get()
            .then((asd) => {
                let res = [];
                 asd.docs.map(doc => {
                    if (doc.exists) {
                        //debugger;                      
                        res.push({...doc.data(), id: doc.id});                        
                        
                    } else {
                        console.log("No such document!");
                    }
                });
                setPosts(res);
                
            })
            .catch((err) => console.log("err -->", err))
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    console.log("posts", posts);

    return (
    <>
        {posts.map(p =>
            
            <Card style={{ width: '50rem' }} className = "mx-auto" key = {p.id}>
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>
                    {p.content}
                        <Link to={"/post/" + p.id}>read more...</Link>                       
                    </Card.Text>
                </Card.Body>
            </Card>
        )}
    </>
    )
}
// function mapStateToProps(state) {
//     return {
//         posts: state.posts
//     }
// }

// const actionCreators = {
//
// };

export default connect()(Posts) ;