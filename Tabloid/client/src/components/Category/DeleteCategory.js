import React from "react";
import { Card, CardBody } from "reactstrap";
import { useHistory, useParams } from "react-router";
import { deleteCategory } from "../../modules/CategoryManager";

const DeleteCategory = ({ }) => {
    const history = useHistory();
    const { categoryId } = useParams();
    const handleDeleteCategory = () => {
        deleteCategory(categoryId)
            .then(() => history.push("/category"));
    };

    return (
        <Card >
            <CardBody>
                <p>
                    <strong>Are you sure you want to delete this Category?</strong>
                    <button className="button" type="button" onClick={() => { history.push("/category") }}> No </button>
                    <button className="button" type="button" onClick={handleDeleteCategory}> Yes </button>
                </p>
            </CardBody>
        </Card>
    );
};

export default DeleteCategory;