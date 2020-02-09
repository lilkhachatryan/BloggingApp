import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import{Container,Row,Col,Table} from "react-bootstrap";

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
                        res.push(doc.data());                        
                        
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
                <div class="card-body">
                <h5 class="card-title">{p.title}</h5>
                <p class="card-text">{p.content}</p>
              </div>
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