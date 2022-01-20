import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCategoryById, updateCategory } from "../../modules/CategoryManager";

export const EditCategory = () => {
    const [category, setCategory] = useState({ name: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { categoryId } = useParams();
    const history = useHistory();

    const handleFieldChange = event => {
        const stateToChange = { ...category };
        stateToChange[event.target.id] = event.target.value;
        setCategory(stateToChange);
    };

    const updateExistingCategory = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedCategory = {
            id: categoryId,
            name: category.name
        };
        updateCategory(editedCategory)
            .then(() => history.push("/category")
            )
    }

    useEffect(() => {
        getCategoryById(categoryId)
            .then(category => {
                setCategory(category);
                setIsLoading(false);
            });
    }, [categoryId]);

    return (
        <>
            <form>
                <fieldset >
                    <h2 className="categoryForm__title">Edit Category</h2>
                    <div className="formgroup">
                        <label htmlFor="name"> Category </label>
                        <input type="text" required className="form-control" onChange={handleFieldChange} id="name" value={category.name} />
                        <button type="button" disabled={isLoading} onClick={updateExistingCategory} className="button"> Submit </button>
                    </div>

                </fieldset>
            </form>
        </>
    );
}


