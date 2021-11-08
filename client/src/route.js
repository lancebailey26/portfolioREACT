import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/contact.js"
import General from "./components/general.js"
import Intro from "./components/intro.js"
import Blog from "./components/blog.js"
import Nav from "./components/nav.js"

export default function Routers(){
    return(
        <main>
            <Nav/>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Intro />
                        <General/>
                    </Route>
                    <Route exact path="/blog">
                        <Blog/>
                    </Route>
                </Switch>
            </Router>
            <Contact/>
        </main>
    )
}