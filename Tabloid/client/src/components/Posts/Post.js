import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import "./Post.css"


export default function Post({ post }) {
    const history = useHistory();
    if (post.isApproved = true && post.publishDateTime < Date()) {
        return (
            <div className="postCard">
                < Card >
                    <CardHeader>
                        <strong>Title: {post.title}</strong>
                    </CardHeader>
                    <CardBody>
                        Author: {post.userProfile.displayName} <br></br>
                        Category:
                    </CardBody>
                    <Button onClick={() => history.push(`/details/${post.id}`)}>View Post</Button>
                </Card>
            </div >
        )
    }
    else {
        return null
    }

}

