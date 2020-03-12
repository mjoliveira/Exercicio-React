import React from "react";
import { Router } from "@reach/router";
import Home from "./conteiners/Home";
import Pagina2 from "./conteiners/Pagina2";
import NotFound from "./conteiners/NotFond";

export default function () {
    return <Router>
        <Home path="/" />
        <Pagina2 path="/pagina-2/:id" />
        <NotFound default="/erro-404" />
    </Router>
}