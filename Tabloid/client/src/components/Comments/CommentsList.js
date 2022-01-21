import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostComments } from "../../modules/commentManager";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Comment } from "./Comment";
import { getPostById } from "../../modules/postManager";

export const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getPostComments(id).then(cmts => { console.log(cmts); setComments(cmts) });
        getPostById(id).then(pst => { console.log(pst); setPost(pst) });
    }, [id])

    return (
        <div>
            {post !== undefined ? <h3>Comments for '{post.title}'</h3> : null}
            {comments.length > 0 ? comments.map(c => <Comment key={c.id} comment={c} />) : <h3>There aren't any comments for this post.</h3>}
            <button onClick={() => history.push(`/post/details/${id}`)}>Return to Post</button>
        </div>
    );
}