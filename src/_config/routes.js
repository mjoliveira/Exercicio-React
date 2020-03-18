import React from "react";
import { Router } from "@reach/router";
import NotFound from "../containers/NotFond";
import List from "../containers/Dragon/List";
import Login from "../containers/User/login";
import Create from "../containers/Dragon/Create"

export default function () {
    return <Router>
        <List path="/" />
        <Create path="/create"/>
        <Login path="/login" />
        <NotFound default="/erro-404" />
    </Router>
}