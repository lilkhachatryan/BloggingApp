import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
// import {useActions} from'./actions';
import {myFirebase} from '../../config/firebase';

function Posts(props) {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        const ref = myFirebase.firestore().collection('posts');

        let postList = [];

        ref.get()
            .then((docs) => {
                postList = docs.docs.map(doc => {
                    if (doc.exists) {
                        return doc.data();
                    } else {
                        console.log("No such document!");
                    }
                });
                setPosts(postList);
                // return postList;
            })
            .catch((err) => console.log("err -->", err))
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    console.log("posts", posts);
    return (
        <>
            <div>
                posts list
            </div>
            <p>You still Logged in and this is protected route</p>
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