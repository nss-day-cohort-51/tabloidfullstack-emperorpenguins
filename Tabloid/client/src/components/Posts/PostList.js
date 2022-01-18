import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPublishedPosts } from "../../modules/postManager";

export default function PostList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPublishedPosts().then(setPosts)
    }, [])

    return (
        <section className="postList">
            <h1>Post List</h1>
            {posts.map(p => <Post key={p.id} post={p} />)}
        </section>
    )
}