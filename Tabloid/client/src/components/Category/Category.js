import React from "react";
import { Card, CardBody } from "reactstrap";
import "./Category.css"


const Category = ({ category }) => {

    return (
        <div className="categoryCard">
            < Card >
                <CardBody>
                    <p>
                        <strong>Name: {category.name}</strong>
                    </p>
                </CardBody>
            </Card>
        </div >
    );
};

export default Category;