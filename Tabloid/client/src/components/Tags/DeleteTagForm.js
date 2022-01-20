import React from "react";
import { Card, CardBody } from "reactstrap";
import { useHistory, useParams } from "react-router";
import { deleteTag } from "../../modules/tagManager";



const DeleteTagForm = ({ }) => {
    const history = useHistory();
    const { tagId } = useParams();
    const handleDeleteTag = () => {
        deleteTag(tagId)
            .then(() => history.push("/Tag"));
    };
    return (
        <Card >
            <CardBody>
                <p>
                    <strong>Are you sure you want to delete this tag?</strong>
                    <button className="button" type="button" onClick={() => { history.push("/Tag") }}>No</button>
                    <button className="button" type="button" onClick={handleDeleteTag}>Yes</button>
                </p>
            </CardBody>
        </Card>
    );
};

export default DeleteTagForm;