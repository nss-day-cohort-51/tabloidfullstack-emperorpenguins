import React, { useState} from "react";
import { useHistory } from "react-router";
import {  addTag } from "../../modules/tagManager"


 const AddTagForm = () => {
    const [tag, setTag] = useState({
        name: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newTag = { ...tag }
        let selectedVal = event.target.value
        if (event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newTag[event.target.id] = selectedVal
        setTag(newTag)
    }

    const handleClickSaveTag = (event) => {
		event.preventDefault()
            addTag(tag)
                .then(() => history.push("/Tag"))
    }
     
    return (
		<form className="form-group">
			<fieldset>
			<h2 className="tagForm__title">New Tag</h2>
				<div className="form-group">
					<label htmlFor="name">Tag:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Tag Name" value={tag.name} />
				</div>
			<button className="btn btn-primary" onClick={handleClickSaveTag}>Save Tag</button>
			</fieldset>
		</form>
	)
};

export default AddTagForm;