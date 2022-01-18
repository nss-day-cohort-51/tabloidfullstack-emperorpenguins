import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "./Post.css"


export default function Post({ post }) {
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
                </Card>
            </div >
        )
    }
    else {
        return null
    }

}

