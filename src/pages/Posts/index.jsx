import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import{Card,ListGroup,ListGroupItem ,Row,Col,Table,Form,FormControl,Button} from "react-bootstrap";
import ReadMoreReact from 'read-more-react';
import {Link} from "react-router-dom";
import {storage} from "../../../src/config/firebase";
import Pagination from "../../components/common/Pagination";


// import {useActions} from'./actions';
import {myFirebase} from '../../config/firebase';

function Posts(props) {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(2);
    const { user,history } = props;
    console.log("user.id", user.id);
    const fetchPosts = () => {
        const userRef = myFirebase.firestore()
            .collection('users')
            .doc(user.id);

        const ref = myFirebase.firestore().collection('posts')
            .where("user_id", "==", userRef)
            // .orderBy("created_at");

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
                console.log("get postsss", res);
                setPosts(res);
                
            })
            .catch((err) => console.log("err -->", err))
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
    <>
        {
        currentPosts.map(p =>
            <div key={p.id}>
            <Card style={{ width: '50rem' }} className = "mx-auto" >
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Img variant="top" src={p.image} alt = "nkar" className="img"/>
                    <Card.Text>
                    {p.content}
                    <Link to={"/post/" + p.id}>read more...</Link>                       
                    </Card.Text>
                </Card.Body>
                <Button
                id = "topright"
                variant="outline-primary"
                size="sm"
                onClick = {() => {
                    myFirebase.firestore().collection("posts").doc(p.id).delete();
                    window.location.reload()}}>X</Button>
            </Card>                
            </div>
        )}
        <div>
            <Pagination 
            postsPerPage = {postsPerPage} 
            totalPosts = {posts.length}
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

// const actionCreators = {
//
// };

export default connect(mapStateToProps)(Posts) ;