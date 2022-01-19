import React, { useState, useEffect } from "react"
import { getTagById, update } from "../../modules/tagManager"
import { useHistory, useParams } from "react-router"

export const EditTagForm = () => {
  const [tag, setTag] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(false);

  const { tagId } = useParams();
  const history = useHistory();

  const handleFieldChange = event => {
    const stateToChange = { ...tag };
    stateToChange[event.target.id] = event.target.value;
    setTag(stateToChange);
  };

  const updateExistingTag = event => {
    event.preventDefault()
    setIsLoading(true);

    const editedTag = {
      id: tagId,
      name: tag.name,
    };

    update(editedTag)
      .then(() => history.push("/Tag")
      )
  }
  useEffect(() => {
    getTagById(tagId)
      .then(tag => {
        setTag(tag);
        setIsLoading(false);
      });
  }, [tagId]);

  return (
    <>
      <form>
        <fieldset>
        <h2 className="tagForm__title">Edit Tag</h2>
          <div className="formgroup">
            <label htmlFor="name">Tag</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={tag.name}
            />
        <button
              type="button" disabled={isLoading}
              onClick={updateExistingTag}
              className="button"
            >Submit</button>
            </div>
            </fieldset>
      </form>
    </>
  );
}

