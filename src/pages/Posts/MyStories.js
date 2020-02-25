import React, {useState, useEffect} from 'react';
import {myFirebase} from '../../config/firebase';
import React from 'react';
import reducer from "../../pages/Auth/Login/reducer";
import Pagination from "../../components/common/Pagination";

function MyStories() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(2);
    
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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    
    return (
        <div>
            {currentPosts.map(p =>{
            <div>
            <Card style={{ width: '50rem' }} className = "mx-auto" key = {p.id}>
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>
                    {p.content}
                  <Link to={"/post/" + p.id}>read more...</Link>                       
                    </Card.Text>
                </Card.Body>
            </Card>
            <img alt ="jjj" />
                
            </div>
            }
        )}

        <Pagination 
            postsPerPage = {postsPerPage} 
            totalPosts = {posts.length}
            paginate={paginate}
        />
            
        </div>
    )
}

export default MyStories
