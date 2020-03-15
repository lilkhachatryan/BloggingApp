import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { myFirebase, storage } from '../../config/firebase';
import { usePostsFetch } from '../Posts/hooks';
import Pagination from "../../components/common/Pagination";
import Loading from "../../components/common/Loading";
import { Tab, Tabs } from 'react-bootstrap';
import {
    addBookmark,
    deletePostRef,
    bookmarkRef,
    postRef,
    userRef,
    deleteBookmark,
    editBookmark
} from "../../utils/endpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark, faArchive as fasArchive } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark, faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons';

function ReadingList(props) {
    const { user, history } = props;
    let { tab } = useParams();

    if (!['save', 'archive'].includes(tab)) {
        tab = 'save';
        history.replace(`/me/list/${tab}`);
    }

    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getBookmarks = async () => {
        setLoading(true);
        try {
            const res = await bookmarkRef()
                .where("user", "==" , userRef(user.id))
                .where("isArchived", "==" , tab !== 'save')
                .get();

            const bookmarks = [];

            for (let i = 0; i < res.docs.length; i++) {
                const doc = res.docs[i];
                if (doc.exists) {
                    const post_id = doc.data().post.id;
                    const postRes = await postRef(post_id).get();

                    bookmarks.push({ ...doc.data(), id: doc.id, post: {...postRes.data(), id: postRes.id} });
                } else {
                    console.log("No such document!");
                }
            }
            setBookmarks(bookmarks);
        } catch (e) {
            console.log('removeBookmarkPost', e);
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        getBookmarks();
    }, [tab]);

    const archivePost = async (bookmark) => {
        await editBookmark(bookmark.id,{ isArchived: true });
        setBookmarks((prev) =>  prev.filter(item => item.id !== bookmark.id));
    };

    const removeBookmarkPost = async (bookmark) => {
        try {
            await deleteBookmark(bookmark.id);
            setBookmarks((prev) =>  prev.filter(item => item.id !== bookmark.id));
        } catch (e) {
            console.log('removeBookmarkPost', e);
        }
    };

    const changeTab = (key) => {
        history.replace(`/me/list/${key}`);
    };

    const Bookmarks = () => {
        if (!bookmarks[0]) {
            return (
                <Card className="mx-auto mt-4 mb-4">
                    <Card.Body>
                        <div>You don't have saved blogs. <Link to={'/posts'}>Click here for finding blogs!</Link></div>
                    </Card.Body>
                </Card>)
        }

        return (
            <>
                {bookmarks.map(bookmark =>
                        <div key={bookmark.id}>
                            <Card  className = "m-4" >
                                <Card.Body className={"pl-5"}>
                                    <Card.Title><Link to={"/post/" + bookmark.post.id}>{bookmark.post.title}</Link></Card.Title>
                                    <div className="d-flex">
                                        <Card.Img variant="top" src={bookmark.post.image} alt="nkar" className="img mr-3  mb-3" style={{ width: 80, height: 80 }}/>
                                        <Card.Text className="mx-auto">
                                            {bookmark.post.content.substring(0, 200)+"..."}
                                        </Card.Text>
                                    </div>
                                    <div className="d-flex">
                                        {tab === 'save' && <FontAwesomeIcon
                                            icon={ fasArchive }
                                            color="grey"
                                            className="mr-2"
                                            onClick={() => archivePost(bookmark)} />}
                                        <FontAwesomeIcon
                                            icon={ farTrashAlt }
                                            color="grey"
                                            onClick={() => removeBookmarkPost(bookmark)}/>
                                    </div>
                                </Card.Body>

                            </Card>
                        </div>
                    )}
                    {/*<div>*/}
                    {/*    <Pagination*/}
                    {/*        postsPerPage = {postsPerPage}*/}
                    {/*        currentPage={currentPage}*/}
                    {/*        totalPosts = {state.posts.length}*/}
                    {/*        paginate={paginate} />*/}
                    {/*</div>*/}
                </>
        )
    };

    if (error) return (<div>Something went wrong.</div>);

    if (loading) return (<Loading />);

    return (
        <Tabs id="controlled-tab-example" activeKey={tab} onSelect={k => changeTab(k)}>
            <Tab eventKey="save" title="Saved">
                <Bookmarks />
            </Tab>
            <Tab eventKey="archive" title="Archived">
                <Bookmarks />
            </Tab>
        </Tabs>
    );
}

function mapStateToProps(state) {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(ReadingList) ;