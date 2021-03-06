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
                        <p style={{ display: "flex", flexDirection: "row" }}>
                            <button className="button" type="button" style={{ width: "50px" }} onClick={() => history.push(`/category/${category.id}/edit`)}> Edit </button>
                            <button className="button" type="button" style={{ width: "100px", color: "red" }} onClick={() => { history.push(`/category/delete/${category.id}`) }}> Delete </button>
                        </p>
                    </p>
                </CardBody>
            </Card>
        </div >
    );
};

export default Category;