import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addCategory } from '../../modules/CategoryManager';


const AddCategory = () => {
    const [category, setCategory] = useState({
        name: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCategory = { ...category }
        let selectedVal = event.target.value

        if (event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newCategory[event.target.id] = selectedVal
        setCategory(newCategory)
    }

    const handleClickSaveCategory = (event) => {
        event.preventDefault()
        addCategory(category)
            .then(() => history.push("/category"))
    }

    return (
        <form className="form-group">
            <fieldset>
                <h2 className="categoryForm__title">New Category</h2>
                <div className="form-group">
                    <label htmlFor="name">Category:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Category Name" value={category.name} />
                </div>
                <button className="btn btn-primary" onClick={handleClickSaveCategory}>Save Category</button>
            </fieldset>
        </form>
    )
};

export default AddCategory;