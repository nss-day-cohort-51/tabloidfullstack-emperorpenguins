import React from "react";
import { Card, CardBody } from "reactstrap";
import { useHistory } from "react-router"

const Tag = ({tag, handleDeleteTag}) => {
  const history = useHistory();
  return (
    <Card >
      <CardBody>
        <p>
          <strong>{tag.name}</strong>
          <button className="button"type="button" onClick={() => {history.push( `/Tag/delete/${tag.id}`)}}>Delete</button>
          <button className="button" type="button" onClick={() => history.push(`/Tag/${tag.id}/edit`)}>Edit</button>
        </p>
      </CardBody>
    </Card>
  );
};



export default Tag;