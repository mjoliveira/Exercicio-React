import React from "react";
import { Router } from "@reach/router";
import NotFound from "../containers/notFond";
import List from "../containers/dragon/list";
import Login from "../containers/user/login";
import Create from "../containers/dragon/create"
import Update from "../containers/dragon/update";

export default function () {
    return <Router>
        <List path="/" />
        <Create path="/create"/>
        <Login path="/login" />
        <NotFound default="/erro-404" />
        <Update path="/update/:id"/>
    </Router>
}