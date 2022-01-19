import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "./Category.css"


export default function category({ category }) {
    console.log({ category });

    return (
        <div className="categoryCard">
            < Card >
                <CardHeader>
                    <strong>Name: {category.name}</strong>
                </CardHeader>

                {/* <CardBody>
                    Content: {category.content} <br></br>
                </CardBody> */}

            </Card>
        </div >
    )


}