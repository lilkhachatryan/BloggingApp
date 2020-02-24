import React from 'react';
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { myFirebase } from '../../config/firebase';
import { usePostsFetch } from './hooks';

function Posts(props) {
    const { user, history } = props;
    const [{ state, loading, error }, fetchPosts] = usePostsFetch({ user_id: user.id });

    if (error) return (<div>Something went wrong.</div>);
    if (!state.posts[0]) return (<div>Spinner component</div>);

    const deletePost = async (id) => {
        try {
            await myFirebase.firestore().collection("posts").doc(id).delete();
            await fetchPosts();
        } catch (e) {
            console.log('err', e);
        }
    };

    return (
    <>
        {state.posts.map(p =>
            <div key={p.id}>
                <Card style={{ width: '50rem' }} className = "mx-auto mt-4 mb-4" >
                    <Card.Body>
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
    </>
    )
}
function mapStateToProps(state) {
    return {
        user: state.login.user
    }
}

export default connect(mapStateToProps)(Posts) ;