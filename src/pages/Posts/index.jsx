import React, { useState }from 'react';
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { myFirebase, storage } from '../../config/firebase';
import { usePostsFetch } from './hooks';
import Pagination from "../../components/common/Pagination";
import Loading from "../../components/common/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark, faArchive as fasArchive } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark, faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons';

function Posts(props) {
    const { user, history } = props;
    const [{ state, loading, error }, fetchPosts] = usePostsFetch({ user_id: user.id });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    const deletePost = async (post) => {
        try {
            await myFirebase.firestore().collection("posts").doc(post.id).delete();

            let imgName = post.image.match(/\.*%2F(.*)\?alt/);
            imgName = imgName && imgName[1].replace(/%20/g, " ");

            const deleteRef = storage.ref('images').child(imgName);

            await deleteRef.delete();
            await fetchPosts();
        } catch (e) {
            console.log('err', e);
        }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = state.posts.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (error) return (<div>Something went wrong.</div>);
    if (loading) return (<Loading />);
    if (!state.posts[0]) return (
        <Card  className="mx-auto mt-4 mb-4" >
            <Card.Body>
                <div>You don't have posted blog. <Link to={'/addPost'}>Click here for creating it now!</Link></div>
            </Card.Body>
        </Card>);

    return (
    <>
        {currentPosts.map(p =>
            <div key={p.id}>
                <Card  className = "m-4" >
                    <Card.Body className={"pl-5"}>
                        {/* <FontAwesomeIcon icon={fasBookmark } />
                        <FontAwesomeIcon icon={ farBookmark } /> */}
                        {/*<FontAwesomeIcon icon={ fasArchive } color="grey"/>*/}
                        {/*<FontAwesomeIcon icon={ farTrashAlt } color="grey"/>*/}
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Img variant="top" src={p.image} alt="nkar" className="img mt-3 mb-3"/>
                        <Card.Text className="mx-auto">
                            {p.content.substring(0, 200)+"..."}
                        </Card.Text>
                        <Link to={"/post/" + p.id}>Read more</Link>
                    </Card.Body>
                    {user.id === p.user.id && <FontAwesomeIcon
                                                icon={farTrashAlt}
                                                id="topright"
                                                onClick = {() => {deletePost(p)}}/>}
                </Card>
            </div>
        )}
        <div>
            <Pagination
                postsPerPage = {postsPerPage}
                currentPage={currentPage}
                totalPosts = {state.posts.length}
                paginate={paginate} />
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