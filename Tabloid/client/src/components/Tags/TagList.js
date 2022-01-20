import React, { useEffect, useState } from "react";
import Tag from './Tag';
import DeleteTagForm from "./DeleteTagForm";
import { useHistory } from "react-router";
import { getAllTags, deleteTag } from "../../modules/tagManager";

const TagList = () => {
  const [tags, setTags] = useState([]);
  const history = useHistory();
  const getTags = () => {
    getAllTags().then(tags => setTags(tags));
  };

 

  useEffect(() => {
    getTags();
  }, []);

  return (
    
    <div className="container">
      <button type="button"
				className="button"
				onClick={() => {history.push("/Tag/create")}}>
				Add Tag
			</button>
      <div className="row justify-content-center">
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.id}/>
        ))}
      </div>
    </div>
  );
};

export default TagList;