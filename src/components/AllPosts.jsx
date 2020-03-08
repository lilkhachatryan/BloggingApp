import React, { useState }from 'react';
import { connect } from "react-redux";
import {Card, Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { myFirebase, storage } from '../config/firebase';
import { usePostsFetch } from '../pages/Posts/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSpinner, faBookmark as fasBookmark, faArchive as fasArchive } from '@fortawesome/free-solid-svg-icons';
 import { faBookmark as farBookmark, faTrashAlt as farTrashAlt} from '@fortawesome/free-regular-svg-icons';

function AllPosts(props) {
    const { posts, isDelete , deletePost} = props;

    return (
    <>
        {posts.map(p =>
            <div key={p.id}>
                <Card  className = "mx-auto mt-4 mb-4" >
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
                    {isDelete && <Button
                        id="topright"
                        variant="outline-primary"
                        size="sm"
                        onClick = {() => {deletePost(p)}}>X</Button>}
                </Card>
            </div>
        )}
    </>
    )
}

export default AllPosts;