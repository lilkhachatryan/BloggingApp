import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import{Card,ListGroup,ListGroupItem ,Row,Col,Table,Form,FormControl,Button} from "react-bootstrap";

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

    const handleOnChange = (e) => {
        
    }

   const handleOnClick = ()=>{



   }

    return (
    <>
        {posts.map(p =>
            <Card style={{ width: '18rem' }} key = {p.id}>
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>
                    {p.content}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                </ListGroup>      
                <Form inline>
                    <FormControl type="text" placeholder="add your comment" className="mr-sm-2" onChange = {handleOnChange}/>
                    <Button variant="outline-success" onClick = {handleOnClick} >ADD</Button>
                </Form>
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