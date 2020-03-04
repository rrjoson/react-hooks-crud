import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");

const HomePage = Loadable({
  loader: () => import("./pages/HomePage"),
  loading: () => <div>Loading...</div>
});

const AddPage = Loadable({
  loader: () => import("./pages/AddPage"),
  loading: () => <div>Loading...</div>
});

const EditPage = Loadable({
  loader: () => import("./pages/EditPage"),
  loading: () => <div>Loading...</div>
});

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/add">
        <AddPage />
      </Route>
      <Route path="/edit/:id">
        <EditPage />
      </Route>
    </Switch>
  </Router>,
  rootElement
);
