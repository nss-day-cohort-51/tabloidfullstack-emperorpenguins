import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPostById } from "../../modules/postManager";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card, CardHeader, CardBody, CardFooter, CardImg } from "reactstrap";

export const PostDetails = () => {
    const [post, setPost] = useState();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getPostById(id).then(setPost);
    }, [id])

    if (!post) {
        return null
    }



    return (
        <div className="postDetailsCard">
            <h2>Post Details</h2>
            < Card >
                <CardHeader>
                    <strong>Title: {post.title}</strong><br></br><br></br>
                    <strong>Estimated Read Time:</strong> {post.estimatedReadTime}
                </CardHeader>
                {post.imageLocation ?
                    <CardImg src={post.imageLocation}>
                    </CardImg>
                    : null}
                <CardBody>
                    {post.content}
                </CardBody>
                <CardFooter>
                    Published Date: {post.publishDateTime.slice(0, 10)}
                    <br>
                    </br>
                    Author: {post.userProfile.displayName}
                    <button className="button" type="button" onClick={() => history.push(`/post/${post.id}/edit`)}>Edit</button>
                    <button className="button"type="button" onClick={() => {history.push( `/post/delete/${post.id}`)}}>Delete</button>
                </CardFooter>
                <button onClick={() => history.push(`/comments/${post.id}`)}>View Comments</button>
            </Card>
        </div >
    )
}