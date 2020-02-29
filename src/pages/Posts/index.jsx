import React, { useState }from 'react';
import { connect } from "react-redux";
import {Card, Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { myFirebase } from '../../config/firebase';
import { usePostsFetch } from './hooks';
import Pagination from "../../components/common/Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSpinner, faBookmark as fasBookmark, faArchive as fasArchive } from '@fortawesome/free-solid-svg-icons';
 import { faBookmark as farBookmark, faTrashAlt as farTrashAlt} from '@fortawesome/free-regular-svg-icons';

function Posts(props) {
    const { user, history } = props;
    const [{ state, loading, error }, fetchPosts] = usePostsFetch({ user_id: user.id });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(3);

    if (error) return (<div>Something went wrong.</div>);
     if (!state.posts[0]) return (<div><FontAwesomeIcon icon={faSpinner} size="4x" pulse/></div>);

    const deletePost = async (id) => {
        try {
            await myFirebase.firestore().collection("posts").doc(id).delete();
            await fetchPosts();
        } catch (e) {
            console.log('err', e);
        }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = state.posts.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
    <>
        {currentPosts.map(p =>
            <div key={p.id}>
                <Card style={{ width: '50rem' }} className = "mx-auto mt-4 mb-4" >
                    <Card.Body>
                        {/* <FontAwesomeIcon icon={fasBookmark } />
                        <FontAwesomeIcon icon={ farBookmark } /> */}
                        {/*<FontAwesomeIcon icon={ fasArchive } color="grey"/>*/}
                        {/*<FontAwesomeIcon icon={ farTrashAlt } color="grey"/>*/}
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Img variant="top" src={p.image} alt = "nkar" className="img"/>
                        <Card.Text>
                        {p.content}
                        <Link to={"/post/" + p.id}>read more...</Link>
                        </Card.Text>
                    </Card.Body>
                    <Button
                        id="topright"
                        variant="outline-primary"
                        size="sm"
                        onClick = {() => {deletePost(p.id)}}>X</Button>
                </Card>
            </div>
        )}
        <div>
            <Pagination 
            postsPerPage = {postsPerPage} 
            totalPosts = {state.posts.length}
            paginate={paginate}
            
            />
        </div>
    </>
    )
}
function mapStateToProps(state) {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(Posts) ;