import React from "react";
import { Card, CardBody } from "reactstrap";
import { useHistory, useParams } from "react-router";
import { deletePost } from "../../modules/postManager";

const DeletePostForm = ({ }) => {
    const history = useHistory();
    const { postId } = useParams();
    const handleDeletePost= () => {
        deletePost(postId)
            .then(() => history.push("/post"));
    };

    return (
        <Card >
            <CardBody>
                <p>
                    <strong>Are you sure you want to delete this Post?</strong>
                    <button className="button" type="button" onClick={() => { history.push("/post") }}> No </button>
                    <button className="button" type="button" onClick={handleDeletePost}> Yes </button>
                </p>
            </CardBody>
        </Card>
    );
};

export default DeletePostForm;