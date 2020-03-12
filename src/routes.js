import React from "react";
import { Router } from "@reach/router";
import NotFound from "./conteiners/NotFond";
import List from "./conteiners/Dragon/List";
import Login from "./conteiners/User/login";

export default function () {
    return <Router>
        <List path="/dragon" />
        <Login path="/login" />
        <NotFound default="/erro-404" />
    </Router>
}