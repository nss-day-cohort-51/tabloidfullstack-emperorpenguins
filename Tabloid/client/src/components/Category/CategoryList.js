import React, { useEffect, useState } from "react";
import Category from "./Category";
import { useHistory } from "react-router";
import { getAllCategories } from "../../modules/CategoryManager";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const history = useHistory();

    const getCategories = () => {
        getAllCategories()
            .then(categories => setCategories(categories));
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="container" >
            <button type="button"
                className="button"
                onClick={() => { history.push("/category/create") }}>
                Add Category
            </button>

            <div className="categoryList" >
                <h1>Category List</h1>
                {categories.map(c => <Category key={c.id} category={c} />)}
            </div>
        </div>
    );

};

export default CategoryList;