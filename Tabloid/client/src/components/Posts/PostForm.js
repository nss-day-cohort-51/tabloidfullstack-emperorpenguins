import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addPost } from "../../modules/postManager";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import { getAllCategories } from "../../modules/CategoryManager";


const PostForm = () => {
    const [state, setState] = useState({});

    const [post, setPost] = useState({
        title: "",
        content: "",
        categoryId: 0,
        publishDateTime: ""
    });

    const [categories, setCategories] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newPost[event.target.id] = selectedVal
        setPost(newPost)
    }

    const handleClickSavePost = (event) => {
        event.preventDefault()
        addPost(post)
            .then(() => history.push("/post"))
    }

    useEffect(() => {
        getAllCategories()
            .then(res => {
                setCategories(res)
                setState({})
            })
    }, [])



    return (
        <Form className="form-group">

            <h2 className="postForm__title">New post</h2>
            <FormGroup className="form-group">
                <Label htmlFor="name">Title:</Label>
                <Input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Post Title" value={post.title} />
            </FormGroup>
            <FormGroup className="form-group">
                <Label htmlFor="name">Content:</Label>
                <Input type="textarea" id="content" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Content" value={post.content} />
            </FormGroup>
            <FormGroup className="form-group">
                <Label htmlFor="name">Category:</Label>
                <select type="text" id="categoryId" onChange={handleControlledInputChange} required autoFocus className="form-control" value={post.categoryId}>
                    <option value="0">Select Category</option>
                    {categories.map(c => (<option key={c.id} value={c.id}>
                        {c.name}
                    </option>))}
                </select>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="publishDateTime">Published Date</Label>
                <Input type="datetime-local" id="publishDateTime" onChange={handleControlledInputChange} value={post.publishDateTime} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleClickSavePost}>Save post</Button>



        </Form>
    )
};

export default PostForm;