import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPublishedPosts, getUserPosts } from "../../modules/postManager";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function PostList({ allPosts }) {
    const [posts, setPosts] = useState([])

    const history = useHistory();

    useEffect(() => {
        if (allPosts === true) {
            getPublishedPosts().then(setPosts)
        } else {
            getUserPosts().then(setPosts)
        }
    }, [allPosts])

    return (
        <section className="postList">
            {allPosts === true ? <h1>All Posts</h1> : <h1>Your Posts</h1>}
            <button type="button"
                className="button"
                onClick={() => { history.push("/post/create") }}>
                Add Post
            </button>
            {posts.length > 0 ? posts.map(p => <Post key={p.id} post={p} />) : <h4>You don't have any posts.</h4>}
        </section>
    )
}