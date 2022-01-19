import React, { useEffect, useState } from "react";
import Category from "./Category";
import { getPublishedCategories } from "../../modules/CategoryManager";

export default function CategoryList() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getPublishedCategories().then(setCategories)
    }, [])

    return (
        <section className="categoryList">
            <h1>Category List</h1>
            {categories.map(c => <Category key={c.id} category={c} />)}
        </section>
    )
}