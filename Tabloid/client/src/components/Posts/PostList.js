import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPublishedPosts } from "../../modules/postManager";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function PostList() {
    const [posts, setPosts] = useState([])

    const history = useHistory();

    useEffect(() => {
        getPublishedPosts().then(setPosts)
    }, [])

    return (
        <section className="postList">
            <h1>Post List</h1>
            <button type="button"
                className="button"
                onClick={() => { history.push("/post/create") }}>
                Add Post
            </button>
            {posts.map(p => <Post key={p.id} post={p} />)}
        </section>
    )
}