import React from "react";
import { Card, CardBody } from "reactstrap";
import "./Category.css";
import { useHistory } from "react-router";


const Category = ({ category }) => {

    const history = useHistory();

    return (
        <div className="categoryCard" >
            < Card >
                <CardBody>
                    <p style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <strong>Name: {category.name}</strong>
                        <button className="button" type="button" style={{ width: "50px" }} onClick={() => history.push(`/category/${category.id}/edit`)}> Edit </button>
                    </p>
                </CardBody>
            </Card>
        </div >
    );
};

export default Category;