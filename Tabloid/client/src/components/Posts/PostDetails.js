import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../modules/postManager";
import { Card, CardHeader, CardBody, CardFooter, CardImg } from "reactstrap";


export const PostDetails = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPostById(id).then(setPost)
    }, [])

    if (!post) {
        return null
    }

    return (
        <div className="postDetailsCard">
            < Card >
                <CardHeader>
                    <strong>Title: {post.title}</strong>
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
                    < br >
                    </br>

                    Author: {post.userProfile.displayName}
                </CardFooter>
            </Card>
        </div >
    )
}