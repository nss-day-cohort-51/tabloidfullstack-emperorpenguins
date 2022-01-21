import React, { useState, useEffect } from "react"
import { getPostById, update } from "../../modules/postManager"
import { useHistory, useParams } from "react-router"
import { getAllCategories } from "../../modules/CategoryManager";

export const EditPostForm = () => {
    const [post, setPost] = useState({
        title: "",
        content: "",
        categoryId: 0,
        publishDateTime: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const { postId } = useParams();
    const history = useHistory();
    const [categories, setCategories] = useState([]);


    const handleFieldChange = event => {
        const stateToChange = { ...post };
        stateToChange[event.target.id] = event.target.value;
        setPost(stateToChange);
    };


    const updateExistingPost = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedPost = {
            id: postId,
            title: post.title,
            content: post.content,
            categoryId: post.categoryId,
            publishDateTime: post.publishDateTime
        };

        update(editedPost)
            .then(() => history.push("/post")
            )
    }
    useEffect(() => {
        getAllCategories().then(res => {
            setCategories(res)})
                getPostById(postId)
                    .then(post => {
                        setPost(post);
                        setIsLoading(false);
                    });
        }, [postId]);

        return (
            <>
                <form>
                    <fieldset>
                        <h2 className="postForm__title">Edit Post</h2>
                        <div className="formgroup">
                            <label htmlFor="name">Post</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="title"
                                value={post.title}
                            />
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="content"
                                value={post.content}
                            />
                            <select type="text" id="categoryId" onChange={handleFieldChange} required autoFocus className="form-control" value={post.categoryId}>
                                <option value="0">Select Category</option>
                                {categories.map(c => (<option key={c.id} value={c.id}>
                                    {c.name}
                                </option>))}
                            </select>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="publishedDate"
                                value={post.publishDateTime}
                            />
                            <button
                                type="button" disabled={isLoading}
                                onClick={updateExistingPost}
                                className="button"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }

