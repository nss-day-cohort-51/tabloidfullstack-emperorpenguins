import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import PostList from "./Posts/PostList";
import TagList from "./Tags/TagList";
import AddTagForm from "./Tags/AddTagForm";
import { PostDetails } from "./Posts/PostDetails";
import CategoryList from "./Category/CategoryList";
import PostForm from "./Posts/PostForm";

export default function ApplicationViews({ isLoggedIn }) {

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>
        <Route path="/Tag" exact>
          <TagList />
        </Route>
        <Route path="/Tag/create">
          <AddTagForm />
        </Route>

        <Route exact path="/post" >
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/post/details/:id">
          <PostDetails />
        </Route >

        <Route path="/post/create">
          <PostForm />
        </Route>

        <Route path="/category">
          <CategoryList />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
};
