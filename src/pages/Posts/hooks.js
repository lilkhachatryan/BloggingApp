import React, {useState, useEffect} from 'react';
import { postsRef, userRef, postRef, bookmarkRef } from "../../utils/endpoints";

const usePostsFetch = ({params, user}) => {
    const [state, setState] = useState({posts: [], currentPage: 0 , topic: ""});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchPosts = async (offset = 2) => {
        setLoading(true);
        setError(false);
        try {
            let endpoint = postsRef();
            if (params.user_id) {
                endpoint = postsRef().where("user", "==", userRef(params.user_id));
            }
            if (params.topic){
                endpoint = postsRef().where("topic", "==", params.gago)
            }

            const res = await endpoint.get();
            const posts = [];

            // res.docs.map(doc => {
            //     if (doc.exists) {
            //         posts.push({...doc.data(), id: doc.id});
            //     } else {
            //         console.log("No such document!");
            //     }
            // });

            for (let i = 0; i < res.docs.length; i++) {
                const doc = res.docs[i];

                if (doc.exists) {
                    let isBookmarked = false;
                    if (user.id) { // need to remove this, tmporary for not getting error in home page
                        const resBookmark = await bookmarkRef()
                            .where("user", "==", userRef(user.id))
                            .where("post", "==", postRef(doc.id))
                            .get();

                        if (resBookmark.docs[0] && resBookmark.docs[0].exists) isBookmarked = true;
                    }

                    posts.push({...doc.data(), id: doc.id, isBookmarked});
                } else {
                    console.log("No such document!");
                }
            }

            setState(prev => ({
                ...prev,
                posts,
                currentPage: prev.currentPage++,
                totalPages: posts.length
            }));
        } catch (e) {
            console.log("err -->", e);
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return [{state, loading, error}, fetchPosts, setState];
};

export {
    usePostsFetch
}